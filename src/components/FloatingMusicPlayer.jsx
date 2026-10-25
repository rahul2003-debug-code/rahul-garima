import { useState, useEffect } from "react";
import { Play, Pause, SkipForward, Volume2, VolumeX, Music2 } from "lucide-react";
import { weddingAudio, WEDDING_TRACKS } from "../utils/audio";

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(WEDDING_TRACKS[0]);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setCurrentTrack(state.currentTrack);
    });
    return () => unsubscribe();
  }, []);

  const handleTogglePlay = () => {
    weddingAudio.toggle();
  };

  const handleNextTrack = (e) => {
    e.stopPropagation();
    weddingAudio.nextTrack();
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (isMuted) {
      weddingAudio.setVolume(0.65);
      setIsMuted(false);
    } else {
      weddingAudio.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "clamp(12px, 2.5vh, 20px)",
        right: "clamp(12px, 3vw, 20px)",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        maxWidth: "calc(100vw - 24px)"
      }}
      aria-label="विवाह संगीत वादक"
    >
      {/* Floating Pill Player */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: "linear-gradient(135deg, rgba(45, 4, 12, 0.95) 0%, rgba(26, 2, 7, 0.98) 100%)",
          border: "1.5px solid #D4AF37",
          borderRadius: "35px",
          padding: "6px 12px 6px 8px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: isPlaying
            ? "0 6px 22px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.35)"
            : "0 4px 15px rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          maxWidth: "320px"
        }}
      >
        {/* Rotating Vinyl Disc / Ring Icon */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleTogglePlay();
          }}
          title={isPlaying ? "संगीत रोकें (Pause)" : "विवाह गीत बजाएं (Play)"}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)",
            border: "1.5px solid #FAD980",
            padding: "2px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#240106",
              animation: isPlaying ? "spinDisc 4s linear infinite" : "none"
            }}
          >
            {isPlaying ? <Music2 size={16} color="#240106" /> : <Play size={16} color="#240106" style={{ marginLeft: "2px" }} />}
          </div>
        </div>

        {/* Track Title and Animated Equalizer Bars */}
        <div style={{ overflow: "hidden", textAlign: "left", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "0.75rem",
                color: "#FAD980",
                letterSpacing: "0.5px",
                fontWeight: 600
              }}
            >
              {isPlaying ? "🎶 बज रहा है:" : "विवाह गीत:"}
            </span>

            {/* Equalizer Wave Bars */}
            {isPlaying && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "10px" }}>
                <span className="eq-bar bar-1" />
                <span className="eq-bar bar-2" />
                <span className="eq-bar bar-3" />
                <span className="eq-bar bar-4" />
              </div>
            )}
          </div>

          <p
            style={{
              fontFamily: "var(--font-hindi-text)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#FFF0C2",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: 0,
              maxWidth: "150px"
            }}
          >
            {currentTrack.title}
          </p>
        </div>

        {/* Quick Play/Pause and Next Track Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleTogglePlay();
            }}
            title={isPlaying ? "रोकें" : "बजाएं"}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(229, 195, 120, 0.35)",
              color: "#FFF0C2",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} style={{ marginLeft: "1px" }} />}
          </button>

          <button
            onClick={handleNextTrack}
            title="अगला विवाह गीत"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(229, 195, 120, 0.35)",
              color: "#FFF0C2",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <SkipForward size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spinDisc {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .eq-bar {
          display: inline-block;
          width: 3px;
          background: #FAD980;
          border-radius: 2px;
          animation: wave 1s ease-in-out infinite alternate;
        }
        .bar-1 { height: 6px; animation-delay: 0.1s; }
        .bar-2 { height: 10px; animation-delay: 0.3s; }
        .bar-3 { height: 7px; animation-delay: 0.2s; }
        .bar-4 { height: 9px; animation-delay: 0.4s; }
        @keyframes wave {
          0% { height: 3px; }
          100% { height: 11px; }
        }
      `}</style>
    </div>
  );
}
