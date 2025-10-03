// components/HeygenEmbed.jsx
import { useEffect } from "react";

export default function HeygenEmbed() {
  useEffect(() => {
    const host = "https://labs.heygen.com";
    const fallbackUrl =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9CbGFja19TdWl0X3B1YmxpYyIs\r\nInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2RhNWNiYTZi\r\nYzdiMzRjNWVhMTM5Zjc3ZGE5OGZkYzA0XzU1MzcwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVk\r\nUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiOTg1YzdmOTY3MTk3NDk1\r\nNmI2ZGY2MWQ4ZjA3Mjk1YTYiLCJ1c2VybmFtZSI6IjJlZTM5MTgxOWNhNTRhZDM5NDNkNjA1NWY3\r\nMmUzZjQ3In0%3D&inIFrame=1";
    const url = import.meta.env.VITE_HEYGEN_EMBED_URL || fallbackUrl;

    const clientWidth = document.body.clientWidth;

    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
  #heygen-streaming-embed {
    z-index: 9999;
    position: fixed;
    left: 40px;
    bottom: 40px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
    transition: all linear 0.1s;
    overflow: hidden;

    opacity: 0;
    visibility: hidden;
  }
  #heygen-streaming-embed.show {
    opacity: 1;
    visibility: visible;
  }
  #heygen-streaming-embed.expand {
    ${clientWidth < 540 ? "height: 266px; width: 96%; left: 50%; transform: translateX(-50%);" : "height: 366px; width: calc(366px * 16 / 9);"}
    border: 0;
    border-radius: 8px;
  }
  #heygen-streaming-container {
    width: 100%;
    height: 100%;
  }
  #heygen-streaming-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  `;

    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;

    let visible = false;
    let initial = false;

    function onMessage(e) {
      if (e.origin !== host || !e.data || !e.data.type || e.data.type !== "streaming-embed") return;
      if (e.data.action === "init") {
        initial = true;
        wrapDiv.classList.toggle("show", initial);
      } else if (e.data.action === "show") {
        visible = true;
        wrapDiv.classList.toggle("expand", visible);
      } else if (e.data.action === "hide") {
        visible = false;
        wrapDiv.classList.toggle("expand", visible);
      }
    }

    window.addEventListener("message", onMessage);
    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);
    document.body.appendChild(wrapDiv);

    return () => {
      window.removeEventListener("message", onMessage);
      try {
        document.body.removeChild(wrapDiv);
      } catch (_) {}
    };
  }, []);

  return null;
}


