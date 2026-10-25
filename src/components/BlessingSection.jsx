import { WEDDING_DATA } from "../config/weddingData";

export default function BlessingSection() {
  const { invitationHeader } = WEDDING_DATA;

  return (
    <section
      id="blessing"
      style={{
        position: "relative",
        padding: "clamp(60px, 8vw, 90px) 0",
        backgroundColor: "var(--color-maroon-rich)",
        backgroundImage: "radial-gradient(circle at 50% 50%, #52020D 0%, #2A0106 100%)",
        color: "var(--color-text-main)",
        textAlign: "center",
        borderTop: "1px solid rgba(229, 195, 120, 0.3)",
        borderBottom: "1px solid rgba(229, 195, 120, 0.3)",
        overflow: "hidden"
      }}
    >
      {/* Subtle Background Rotating Mandala in Gold */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "550px",
          pointerEvents: "none",
          opacity: 0.08,
          zIndex: 1
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%", animation: "spinMandala 60s linear infinite" }}>
          <circle cx="250" cy="250" r="230" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6,4" />
          <circle cx="250" cy="250" r="190" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="8,6" />
          <circle cx="250" cy="250" r="100" fill="none" stroke="#D4AF37" strokeWidth="1" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 250 250)`}>
              <path d="M250,50 Q235,120 250,150 Q265,120 250,50 Z" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            </g>
          ))}
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 5, maxWidth: "860px" }}>
        {/* Lord Ganesha Auspicious Icon */}
        <div
          style={{
            width: "76px",
            height: "76px",
            margin: "0 auto 20px auto",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
            border: "2px solid #D4AF37",
            padding: "3px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#3B040F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* Elegant Ganesha SVG */}
            <svg viewBox="0 0 100 100" style={{ width: "46px", height: "46px", fill: "#FAD980" }}>
              <path d="M50 20 C42 20 36 26 36 34 C36 40 40 45 44 48 C42 54 41 62 44 70 C46 76 52 82 58 82 C64 82 66 77 64 72 C62 67 58 66 56 61 C55 58 56 54 58 50 C62 48 64 42 64 36 C64 28 58 20 50 20 Z M46 32 C47 32 48 33 48 34 C48 35 47 36 46 36 C45 36 44 35 44 34 C44 33 45 32 46 32 Z" />
              <path d="M48 24 L52 24 L52 14 L48 14 Z" />
              <circle cx="50" cy="12" r="3" />
              <path d="M30 42 C26 42 22 46 22 52 C22 58 26 62 30 62" fill="none" stroke="#FAD980" strokeWidth="3" />
              <path d="M70 42 C74 42 78 46 78 52 C78 58 74 62 70 62" fill="none" stroke="#FAD980" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
            color: "#FFF0C2",
            letterSpacing: "1px",
            marginBottom: "12px"
          }}
        >
          {invitationHeader.mangalAmantran}
        </h2>

        {/* Ornamental Divider */}
        <div className="ornament-divider">
          <div className="divider-line" />
          <span className="divider-center" style={{ color: "#FAD980" }}>卐</span>
          <div className="divider-line" />
        </div>

        {/* Traditional Sanskrit Shloka in Cloud Scallop Card */}
        <div
          className="cloud-scallop-card"
          style={{
            padding: "clamp(24px, 5vw, 36px) clamp(16px, 4vw, 28px)",
            margin: "24px auto",
            color: "#FFF0C2",
            background: "linear-gradient(145deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
            border: "1.5px solid rgba(229, 195, 120, 0.45)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.45)"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1.25rem, 3.2vw, 1.95rem)",
              lineHeight: 1.8,
              color: "#FFF0C2",
              margin: 0,
              textShadow: "0 2px 10px rgba(212, 175, 55, 0.25)"
            }}
          >
            {invitationHeader.shlokaSanskrit}
          </p>
        </div>

        {/* Meaning / Bhavarth */}
        <p
          style={{
            fontFamily: "var(--font-hindi-text)",
            fontSize: "clamp(0.98rem, 2.2vw, 1.15rem)",
            color: "rgba(255, 240, 230, 0.9)",
            lineHeight: 1.8,
            maxWidth: "700px",
            margin: "0 auto"
          }}
        >
          {invitationHeader.shlokaMeaning}
        </p>

        {/* Bottom Kalash Ornament */}
        <div style={{ marginTop: "24px", color: "var(--color-gold-bright)", fontSize: "1.2rem" }}>
          🌸 🪔 🌸
        </div>
      </div>

      <style>{`
        @keyframes spinMandala {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
