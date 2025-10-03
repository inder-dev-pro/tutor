// Simple WebSocket proxy to OpenAI Realtime API for browser clients
// Requires: OPENAI_API_KEY in environment

import http from "http";
import express from "express";
import cors from "cors";
import { WebSocketServer, WebSocket } from "ws";

const OPENAI_REALTIME_URL = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17";
const PORT = process.env.PORT || 3001;

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY in environment");
}

const app = express();
app.use(cors());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const server = http.createServer(app);

// WS proxy: /realtime
const wss = new WebSocketServer({ server, path: "/realtime" });

wss.on("connection", (clientSocket) => {
  // Connect upstream to OpenAI Realtime with auth header
  const upstream = new WebSocket(OPENAI_REALTIME_URL, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "OpenAI-Beta": "realtime=v1",
    },
  });

  const closeBoth = (code = 1000, reason = "") => {
    try { clientSocket.close(code, reason); } catch {}
    try { upstream.close(code, reason); } catch {}
  };

  upstream.on("open", () => {
    // Optional: inform client ready
    try { clientSocket.send(JSON.stringify({ type: "proxy.ready" })); } catch {}
  });

  upstream.on("message", (data) => {
    try {
      clientSocket.send(data);
    } catch {}
  });

  upstream.on("error", (err) => {
    try {
      clientSocket.send(JSON.stringify({ type: "proxy.error", error: String(err?.message || err) }));
    } catch {}
    closeBoth(1011, "upstream error");
  });

  upstream.on("close", () => {
    closeBoth(1000, "upstream closed");
  });

  clientSocket.on("message", (data) => {
    try {
      upstream.send(data);
    } catch {}
  });

  clientSocket.on("error", () => {
    closeBoth(1011, "client error");
  });

  clientSocket.on("close", () => {
    closeBoth(1000, "client closed");
  });
});

server.listen(PORT, () => {
  console.log(`Realtime proxy listening on http://localhost:${PORT}`);
});


