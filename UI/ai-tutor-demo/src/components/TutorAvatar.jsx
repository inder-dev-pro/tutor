// components/TutorAvatar.jsx
import { useEffect, useRef, useState } from "react";

// Note: For production, mint short-lived tokens on a backend.
// For local testing, you can place a temporary token in VITE_HEYGEN_TOKEN.
// See README for details.
import StreamingAvatar, { TaskType, StreamingEvents } from "@heygen/streaming-avatar";

export default function TutorAvatar() {
    const videoRef = useRef(null);
    const avatarRef = useRef(null);
    const sessionIdRef = useRef(null);
    const [status, setStatus] = useState("idle");
    const [inputText, setInputText] = useState("");

    const token = import.meta.env.VITE_HEYGEN_TOKEN;
    const avatarId = import.meta.env.VITE_HEYGEN_AVATAR_ID;

    useEffect(() => {
      let cancelled = false;

      async function start() {
        if (!token) {
          setStatus("missing-token");
          return;
        }

        setStatus("connecting");

        try {
          const avatar = new StreamingAvatar({ token });
          avatarRef.current = avatar;

          // Create and start the avatar session
          const session = await avatar.createStartAvatar({
            avatarName: avatarId,
            quality: "high"
          });
          if (cancelled) return;
          sessionIdRef.current = session?.session_id;

          // Attach video element when stream is ready
          const onStreamReady = (e) => {
            if (!videoRef.current) return;
            const mediaStream = e?.detail;
            if (mediaStream) {
              videoRef.current.srcObject = mediaStream;
              // Some browsers need an explicit play() call
              videoRef.current.play?.();
            }
          };
          avatar.on(StreamingEvents.STREAM_READY, onStreamReady);
          // Save handler for cleanup
          avatarRef.current._onStreamReady = onStreamReady;

          setStatus("connected");
        } catch (err) {
          console.error("Heygen start error", err);
          setStatus("error");
        }
      }

      start();

      return () => {
        cancelled = true;
        try {
          if (avatarRef.current) {
            if (avatarRef.current._onStreamReady) {
              avatarRef.current.off(StreamingEvents.STREAM_READY, avatarRef.current._onStreamReady);
            }
            avatarRef.current.stopAvatar?.();
          }
        } catch (_) {}
      };
    }, [token, avatarId]);

    async function handleSpeak() {
      if (!avatarRef.current || !sessionIdRef.current || !inputText) return;
      try {
        // Fire-and-forget: send transcript text to local collector
        try {
          fetch("http://localhost:4545/transcript", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: inputText })
          }).catch(() => {});
        } catch (_) {}

        await avatarRef.current.speak({
          sessionId: sessionIdRef.current,
          text: inputText,
          task_type: TaskType.REPEAT
        });
        setInputText("");
      } catch (err) {
        console.error("Speak error", err);
      }
    }

    return (
      <div className="flex flex-col items-center">
        {status === "missing-token" ? (
          <div className="rounded-xl2 shadow-soft w-full max-w-md bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800 text-center">
            Missing Heygen token. Set <code>VITE_HEYGEN_TOKEN</code> and <code>VITE_HEYGEN_AVATAR_ID</code> in <code>.env.local</code>.
          </div>
        ) : (
          <div className="w-full max-w-md rounded-xl2 border border-slate-200 shadow-soft overflow-hidden bg-slate-900">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted={false}
              className="w-full h-full"
              style={{ aspectRatio: "9 / 16" }}
            />
          </div>
        )}

        <div className="w-full max-w-md mt-3 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={status !== "connected" ? "Connecting..." : "Type something for the tutor to say"}
            disabled={status !== "connected"}
            className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
          <button
            onClick={handleSpeak}
            disabled={status !== "connected" || !inputText}
            className="btn-primary"
          >
            Speak
          </button>
        </div>
      </div>
    );
}
