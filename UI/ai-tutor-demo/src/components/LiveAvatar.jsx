// components/LiveAvatar.jsx
import { useEffect, useRef } from "react";

export default function LiveAvatar() {
  const containerRef = useRef(null);

  useEffect(() => {
    const host = "https://labs.heygen.com";
    const fallbackUrl =
      host +
      "/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9CbGFja19TdWl0X3B1YmxpYyIs\r\nInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2RhNWNiYTZi\r\nYzdiMzRjNWVhMTM5Zjc3ZGE5OGZkYzA0XzU1MzcwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVk\r\nUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiOTg1YzdmOTY3MTk3NDk1\r\nNmI2ZGY2MWQ4ZjA3Mjk1YTYiLCJ1c2VybmFtZSI6IjJlZTM5MTgxOWNhNTRhZDM5NDNkNjA1NWY3\r\nMmUzZjQ3In0%3D&inIFrame=1";
    const url = import.meta.env.VITE_HEYGEN_EMBED_URL || fallbackUrl;

    if (!containerRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Live AI Tutor";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;
    iframe.className = "w-full h-full border-0 rounded-lg";

    containerRef.current.appendChild(iframe);

    return () => {
      if (containerRef.current && iframe.parentNode) {
        containerRef.current.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div className="h-full">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Live AI Tutor</h2>
      <div 
        ref={containerRef}
        className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-lg"
        style={{ aspectRatio: "9 / 16", height: "500px" }}
      />
    </div>
  );
}
