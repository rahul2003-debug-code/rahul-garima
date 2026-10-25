import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-maroon-dark)",
        backgroundImage: "radial-gradient(circle at 50% 100%, #4D030C 0%, #170003 100%)",
        borderTop: "2px solid #D4AF37",
        color: "var(--color-text-main)",
        padding: "clamp(50px, 7vw, 70px) 0 40px 0",
        textAlign: "center",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "760px" }}>
        {/* Sacred Closing Blessing */}
        <p
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "clamp(1.25rem, 3.2vw, 1.75rem)",
            color: "#FFF0C2",
            lineHeight: 1.65,
            marginBottom: "14px"
          }}
        >
          “आपका स्नेह और शुभाशीर्वाद ही हमारे लिए सबसे अनमोल उपहार है।”
        </p>

        <p
          style={{
            fontFamily: "var(--font-hindi-text)",
            fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
            color: "rgba(255, 240, 230, 0.85)",
            marginBottom: "20px"
          }}
        >
          आपकी गरिमामयी उपस्थिति वर-वधू के जीवन को सौभाग्य और खुशियों से परिपूर्ण करेगी।
        </p>

        {/* Couple Signature */}
        <h3
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "clamp(2rem, 5.5vw, 2.7rem)",
            margin: "0 0 4px 0"
          }}
        >
          <span className="gold-shimmer-text">राहुल</span>{" "}
          <Heart size={24} fill="#E8A598" color="#D4AF37" style={{ verticalAlign: "middle" }} />{" "}
          <span className="gold-shimmer-text">गरिमा</span>
        </h3>

        <p
          style={{
            fontFamily: "var(--font-serif-royal)",
            fontSize: "1.05rem",
            color: "#FAD980",
            letterSpacing: "2px",
            marginBottom: "6px",
            fontWeight: 600
          }}
        >
          Rahul Kumar &amp; Garima Verma
        </p>

        <p
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "1.1rem",
            color: "#E8A598",
            marginBottom: "24px",
            fontWeight: 600
          }}
        >
          ॥ शुभ विवाह — 11 नवम्बर 2026 • बुधवार ॥
        </p>

        {/* Ornamental Divider */}
        <div className="ornament-divider">
          <div className="divider-line" />
          <span className="divider-center" style={{ color: "#FAD980" }}>☁️ ॥ शुभं भवतु • सर्व मंगलम् ॥ ☁️</span>
          <div className="divider-line" />
        </div>

        {/* Return to Top Button */}
        <div style={{ marginTop: "28px", marginBottom: "28px" }}>
          <button
            onClick={scrollToTop}
            className="btn-cloud-secondary"
            style={{
              padding: "11px 28px",
              fontSize: "0.95rem"
            }}
          >
            <ArrowUp size={16} />
            शीर्ष पर वापस जाएं
          </button>
        </div>

        {/* Family Credit with मसोन */}
        <div
          style={{
            borderTop: "1px solid rgba(229, 195, 120, 0.25)",
            paddingTop: "20px",
            fontSize: "0.9rem",
            color: "rgba(255, 240, 230, 0.75)",
            fontFamily: "var(--font-hindi-text)"
          }}
        >
          <p style={{ margin: "0 0 4px 0" }}>
            श्री अशोक कुमार एवं समस्त परिवार, ग्राम व पोस्ट — मसोन, जनपद — गाजीपुर (उ. प्र.)
          </p>
          <p style={{ margin: 0, fontFamily: "var(--font-serif-royal)", fontSize: "0.82rem", color: "#FAD980" }}>
            Rahul ❤️ Garima • Shubh Vivah 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
