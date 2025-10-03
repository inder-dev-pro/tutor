// Minimal transcript collector: receives JSON { text } and appends to transcript.txt
import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.TRANSCRIPT_PORT || 4545;
const OUTPUT_PATH = process.env.TRANSCRIPT_FILE || path.join(__dirname, "transcript.txt");

function appendLine(line) {
  const timestamp = new Date().toISOString();
  fs.appendFile(OUTPUT_PATH, `[${timestamp}] ${line}\n`, (err) => {
    if (err) {
      console.error("Failed to write transcript:", err);
    }
  });
}

const server = http.createServer((req, res) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/transcript") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      // prevent abuse
      if (body.length > 1_000_000) {
        req.socket.destroy();
      }
    });
    req.on("end", () => {
      try {
        const data = JSON.parse(body || "{}");
        const text = typeof data.text === "string" ? data.text.trim() : "";
        if (text) {
          appendLine(text);
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: "invalid json" }));
      }
    });
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false, error: "not found" }));
});

server.listen(PORT, () => {
  console.log(`Transcript server listening on http://localhost:${PORT}`);
  console.log(`Writing to: ${OUTPUT_PATH}`);
});


