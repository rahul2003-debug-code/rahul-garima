import { Heart, MapPin, Users, Sparkles, Cloud } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";

export default function CoupleSection() {
  const { couple } = WEDDING_DATA;

  return (
    <section
      id="couple"
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        backgroundColor: "var(--color-maroon-rich)",
        backgroundImage: "radial-gradient(ellipse at 50% 30%, #4D0512 0%, #200105 100%)",
        color: "var(--color-text-main)",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(36px, 6vw, 54px)" }}>
          <div className="cloud-pill-badge" style={{ marginBottom: "12px" }}>
            <Cloud size={16} color="#FAD980" />
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                color: "#FAD980",
                fontSize: "clamp(0.88rem, 2.2vw, 0.95rem)",
                fontWeight: 600
              }}
            >
              ॥ दो हृदयों का पावन मिलन ॥
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#FFF0C2",
              margin: "4px 0"
            }}
          >
            <span className="gold-shimmer-text">॥ वर एवं वधू परिचय ॥</span>
          </h2>

          <div className="ornament-divider">
            <div className="divider-line" />
            <span className="divider-center" style={{ color: "#FAD980" }}>☁️ 💖 ☁️</span>
            <div className="divider-line" />
          </div>

          <p
            style={{
              maxWidth: "640px",
              margin: "0 auto",
              fontFamily: "var(--font-hindi-text)",
              fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
              color: "rgba(255, 240, 230, 0.9)"
            }}
          >
            दो कुलों का पावन मिलन, दो हृदयों का आत्मीय संगम एवं एक अनंत प्रेम यात्रा।
          </p>
        </div>

        {/* Split Cloud Cards Grid (Responsive 100% Mobile Safe) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(20px, 4vw, 36px)",
            alignItems: "stretch",
            maxWidth: "1080px",
            margin: "0 auto"
          }}
        >
          {/* Groom Cloud Card */}
          <div
            className="cloud-scallop-card"
            style={{
              padding: "clamp(24px, 5vw, 40px) clamp(16px, 4vw, 30px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              background: "linear-gradient(155deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
              border: "1.5px solid rgba(229, 195, 120, 0.45)",
              color: "#FFF0E6"
            }}
          >
            {/* Groom Cloud Frame */}
            <div
              className="cloud-photo-frame"
              style={{
                width: "clamp(160px, 45vw, 215px)",
                height: "clamp(195px, 54vw, 260px)",
                margin: "0 auto 20px auto"
              }}
            >
              <div className="cloud-photo-inner">
                <img
                  src={couple.groom.image}
                  alt="चि० राहुल कुमार"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top"
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            <span
              style={{
                display: "inline-block",
                alignSelf: "center",
                fontFamily: "var(--font-hindi-display)",
                color: "#FAD980",
                fontSize: "1rem",
                letterSpacing: "0.5px",
                background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
                padding: "5px 22px",
                borderRadius: "30px",
                marginBottom: "10px",
                border: "1.5px solid rgba(229, 195, 120, 0.45)",
                fontWeight: 600
              }}
            >
              ॥ दूल्हा (वर) ॥
            </span>

            <h3
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.7rem, 4vw, 2.2rem)",
                color: "#FFF0C2",
                margin: "4px 0"
              }}
            >
              {couple.groom.nameHi}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-serif-royal)",
                fontSize: "1.05rem",
                color: "#FAD980",
                margin: "0 0 18px 0",
                fontWeight: 600
              }}
            >
              {couple.groom.nameEn}
            </p>

            {/* Lineage / Parents Cloud Box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "22px",
                padding: "14px 18px",
                marginBottom: "16px",
                border: "1px solid rgba(229, 195, 120, 0.25)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  color: "#E8A598",
                  fontSize: "0.92rem",
                  marginBottom: "4px",
                  fontFamily: "var(--font-hindi-display)",
                  fontWeight: 600
                }}
              >
                <Users size={16} />
                <span>मातृ-पितृ चरण</span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "clamp(0.98rem, 2.5vw, 1.1rem)",
                  color: "#FFF0C2",
                  fontWeight: 600,
                  margin: 0
                }}
              >
                सुपुत्र — {couple.groom.parentsHi}
              </p>
            </div>

            {/* Address */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "8px",
                color: "rgba(255, 240, 230, 0.88)",
                fontSize: "0.95rem",
                fontFamily: "var(--font-hindi-text)",
                marginBottom: "18px"
              }}
            >
              <MapPin size={18} color="#FAD980" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{couple.groom.addressHi}</span>
            </div>

            {/* Quote */}
            <p
              style={{
                marginTop: "auto",
                fontStyle: "italic",
                fontFamily: "var(--font-hindi-text)",
                fontSize: "1.02rem",
                color: "#FAD980",
                borderTop: "1.5px dashed rgba(229, 195, 120, 0.35)",
                paddingTop: "12px",
                margin: "auto 0 0 0"
              }}
            >
              “{couple.groom.quote}”
            </p>
          </div>

          {/* Bride Cloud Card */}
          <div
            className="cloud-scallop-card"
            style={{
              padding: "clamp(24px, 5vw, 40px) clamp(16px, 4vw, 30px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              background: "linear-gradient(155deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
              border: "1.5px solid rgba(229, 195, 120, 0.45)",
              color: "#FFF0E6"
            }}
          >
            {/* Bride Cloud Frame */}
            <div
              className="cloud-photo-frame"
              style={{
                width: "clamp(160px, 45vw, 215px)",
                height: "clamp(195px, 54vw, 260px)",
                margin: "0 auto 20px auto",
                animationDelay: "-3s"
              }}
            >
              <div className="cloud-photo-inner">
                <img
                  src={couple.bride.image}
                  alt="आयु० गरिमा वर्मा"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%"
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            <span
              style={{
                display: "inline-block",
                alignSelf: "center",
                fontFamily: "var(--font-hindi-display)",
                color: "#FAD980",
                fontSize: "1rem",
                letterSpacing: "0.5px",
                background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
                padding: "5px 22px",
                borderRadius: "30px",
                marginBottom: "10px",
                border: "1.5px solid rgba(229, 195, 120, 0.45)",
                fontWeight: 600
              }}
            >
              ॥ दुल्हन (वधू) ॥
            </span>

            <h3
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.7rem, 4vw, 2.2rem)",
                color: "#FFF0C2",
                margin: "4px 0"
              }}
            >
              {couple.bride.nameHi}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-serif-royal)",
                fontSize: "1.05rem",
                color: "#FAD980",
                margin: "0 0 18px 0",
                fontWeight: 600
              }}
            >
              {couple.bride.nameEn}
            </p>

            {/* Lineage / Parents Cloud Box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "22px",
                padding: "14px 18px",
                marginBottom: "16px",
                border: "1px solid rgba(229, 195, 120, 0.25)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  color: "#E8A598",
                  fontSize: "0.92rem",
                  marginBottom: "4px",
                  fontFamily: "var(--font-hindi-display)",
                  fontWeight: 600
                }}
              >
                <Users size={16} />
                <span>मातृ-पितृ चरण</span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "clamp(0.98rem, 2.5vw, 1.1rem)",
                  color: "#FFF0C2",
                  fontWeight: 600,
                  margin: 0
                }}
              >
                सुपुत्री — {couple.bride.parentsHi}
              </p>
            </div>

            {/* Address */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                color: "rgba(255, 240, 230, 0.88)",
                fontSize: "0.92rem",
                fontFamily: "var(--font-hindi-text)",
                marginBottom: "18px",
                textAlign: "left"
              }}
            >
              <div style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                <MapPin size={16} color="#FAD980" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>
                  <strong>वर्तमान:</strong> {couple.bride.currentAddressHi}
                </span>
              </div>
              <div style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                <MapPin size={16} color="#FAD980" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>
                  <strong>स्थायी:</strong> {couple.bride.permanentAddressHi}
                </span>
              </div>
            </div>

            {/* Quote */}
            <p
              style={{
                marginTop: "auto",
                fontStyle: "italic",
                fontFamily: "var(--font-hindi-text)",
                fontSize: "1.02rem",
                color: "#FAD980",
                borderTop: "1.5px dashed rgba(229, 195, 120, 0.35)",
                paddingTop: "12px",
                margin: "auto 0 0 0"
              }}
            >
              “{couple.bride.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
