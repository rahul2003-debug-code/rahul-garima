import { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart, Cloud } from "lucide-react";

export default function EnvelopeModal({ isOpen, onOpenComplete, onStartAudio }) {
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#DDA83E", "#D87D8A", "#FFF0E6", "#B84D62", "#FFFFFF"]
      });
    } catch {
      // ignore
    }

    if (onStartAudio) {
      onStartAudio();
    }

    setTimeout(() => {
      onOpenComplete();
    }, 1300);
  };

  return (
    <div
      role="dialog"
      aria-label="Royal Wedding Invitation Envelope"
      aria-modal="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(25, 2, 6, 0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundImage: "radial-gradient(ellipse at 50% 40%, #4D030C 0%, #170003 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "16px",
        overflowY: "auto",
        overflowX: "hidden"
      }}
    >
      {/* Skip Button */}
      <button
        onClick={onOpenComplete}
        style={{
          position: "absolute",
          top: "clamp(12px, 3vh, 24px)",
          right: "clamp(12px, 3vw, 24px)",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1.5px solid #D4AF37",
          color: "#FFF0C2",
          padding: "7px 18px",
          borderRadius: "30px",
          fontSize: "0.85rem",
          fontFamily: "var(--font-hindi-display)",
          fontWeight: 600,
          cursor: "pointer",
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          transition: "all 0.25s ease"
        }}
      >
        सीधा निमंत्रण देखें →
      </button>

      {/* Main Cloud Envelope Presentation */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          perspective: "1200px",
          position: "relative",
          margin: "auto",
          textAlign: "center"
        }}
      >
        {/* Divine Invocation at top */}
        <div style={{ marginBottom: "16px" }}>
          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "#FAD980",
              letterSpacing: "1px",
              marginBottom: "2px",
              fontWeight: 600
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
          <h1
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1.8rem, 5.5vw, 2.3rem)",
              color: "#FFF0C2",
              letterSpacing: "1px",
              margin: 0
            }}
          >
            ॥ मंगल आमंत्रण ॥
          </h1>
        </div>

        {/* 3D Cloud Envelope Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(260px, 46vh, 330px)",
            background: "linear-gradient(135deg, #4A030D 0%, #2A0106 100%)",
            borderRadius: "clamp(35px, 8vw, 55px) clamp(35px, 8vw, 55px) clamp(25px, 6vw, 40px) clamp(25px, 6vw, 40px)",
            boxShadow: isOpening
              ? "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(212, 175, 55, 0.45)"
              : "0 18px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.25)",
            border: "2px solid #D4AF37",
            overflow: "visible",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* Inner Dashed Cloud Border */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              right: "12px",
              bottom: "12px",
              border: "1.5px dashed rgba(229, 195, 120, 0.45)",
              borderRadius: "clamp(28px, 6vw, 45px) clamp(28px, 6vw, 45px) clamp(18px, 4vw, 30px) clamp(18px, 4vw, 30px)",
              pointerEvents: "none"
            }}
          />

          {/* Emerging Card (Slides up when opening) */}
          <div
            style={{
              position: "absolute",
              top: isOpening ? "clamp(-100px, -18vh, -125px)" : "12px",
              left: "14px",
              right: "14px",
              height: "clamp(230px, 42vh, 300px)",
              background: "linear-gradient(135deg, #FFFDF8 0%, #FAF5EA 100%)",
              borderRadius: "clamp(30px, 6vw, 42px) clamp(30px, 6vw, 42px) clamp(18px, 4vw, 26px) clamp(18px, 4vw, 26px)",
              border: "1.5px solid #D4AF37",
              boxShadow: isOpening
                ? "0 -12px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(212, 175, 55, 0.3)"
                : "0 2px 10px rgba(0,0,0,0.1)",
              zIndex: isOpening ? 20 : 1,
              transition: "top 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s ease",
              transform: isOpening ? "scale(1.03)" : "scale(1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px"
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FFF0E6 0%, #FCE8E6 100%)",
                border: "1.5px solid #D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6A0512",
                marginBottom: "8px"
              }}
            >
              <Heart size={20} fill="#D4AF37" color="#8A1122" />
            </div>

            <p
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(0.92rem, 2.4vw, 1.05rem)",
                color: "#8A1122",
                letterSpacing: "1px",
                marginBottom: "2px",
                fontWeight: 600
              }}
            >
              ॥ शुभ विवाह आमंत्रण ॥
            </p>

            <h2
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)",
                color: "#4A030D",
                margin: "2px 0"
              }}
            >
              राहुल ❤️ गरिमा
            </h2>

            <p
              style={{
                fontFamily: "var(--font-serif-royal)",
                fontSize: "clamp(0.95rem, 2.4vw, 1.1rem)",
                color: "#8A1122",
                margin: "0 0 10px 0",
                fontWeight: 600
              }}
            >
              Rahul &amp; Garima
            </p>

            <p
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(0.85rem, 2.2vw, 0.95rem)",
                color: "#5C3E45",
                fontWeight: 600,
                borderTop: "1px solid rgba(212, 175, 55, 0.4)",
                borderBottom: "1px solid rgba(212, 175, 55, 0.4)",
                padding: "5px 18px",
                borderRadius: "20px"
              }}
            >
              11 नवम्बर 2026 • बुधवार
            </p>
          </div>

          {/* Cloud Scalloped Flap Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: isOpening ? 2 : 5
            }}
          >
            <svg
              viewBox="0 0 520 350"
              style={{
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))"
              }}
            >
              <path
                d="M 20,20 Q 90,80 160,110 Q 210,130 260,185 Q 310,130 360,110 Q 430,80 500,20 Z"
                fill="#3B040F"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Royal Wax Seal Button */}
          <div
            onClick={handleOpenInvitation}
            role="button"
            tabIndex={0}
            aria-label="Open Wedding Invitation"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpenInvitation();
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) ${isOpening ? "scale(0.8) translateY(40px)" : "scale(1)"}`,
              opacity: isOpening ? 0 : 1,
              width: "clamp(68px, 16vw, 82px)",
              height: "clamp(68px, 16vw, 82px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #D4AF37 0%, #FAD980 50%, #AA771C 100%)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.5), 0 0 0 3px #FAD980",
              zIndex: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            title="क्लिक करके आमंत्रण खोलें"
          >
            <span
              style={{
                fontFamily: "var(--font-serif-royal)",
                color: "#240106",
                fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                fontWeight: "bold",
                letterSpacing: "1px",
                lineHeight: 1
              }}
            >
              R ❤️ G
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                color: "#4A030D",
                fontFamily: "var(--font-hindi-display)",
                marginTop: "3px",
                fontWeight: "bold"
              }}
            >
              ॥ शुभम ॥
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ marginTop: "24px" }}>
          <button
            onClick={handleOpenInvitation}
            className="btn-cloud-primary"
            disabled={isOpening}
            style={{
              fontSize: "clamp(1rem, 2.6vw, 1.15rem)",
              padding: "14px clamp(24px, 5vw, 40px)",
              opacity: isOpening ? 0.7 : 1
            }}
          >
            <Sparkles size={18} />
            {isOpening ? "खोल रहे हैं..." : "॥ विवाह आमंत्रण पत्र खोलें ॥"}
          </button>

          <p
            style={{
              color: "rgba(255, 240, 230, 0.75)",
              fontSize: "0.85rem",
              marginTop: "10px",
              fontFamily: "var(--font-hindi-text)"
            }}
          >
            (क्लिक करने पर पावन शहनाई एवं विवाह गीत स्वतः प्रारंभ होगा)
          </p>
        </div>
      </div>
    </div>
  );
}
