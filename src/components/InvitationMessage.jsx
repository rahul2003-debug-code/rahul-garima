import { Eye, Heart, Sparkles, Cloud } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";

export default function InvitationMessage({ onOpenCardModal }) {
  const { couple, invitationBody, familyDetails, events } = WEDDING_DATA;

  return (
    <section
      id="invitation"
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        backgroundColor: "var(--color-maroon-dark)",
        backgroundImage: "radial-gradient(circle at 50% 50%, #52020D 0%, #200105 100%)",
        color: "var(--color-text-main)",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "920px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(36px, 6vw, 48px)" }}>
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
              ॥ पावन मांगलिक निमंत्रण ॥
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#FFF0C2",
              margin: 0
            }}
          >
            <span className="gold-shimmer-text">॥ शाही डिजिटल विवाह पत्रिका ॥</span>
          </h2>

          <div className="ornament-divider">
            <div className="divider-line" />
            <span className="divider-center" style={{ color: "#FAD980" }}>☁️ 卐 ☁️</span>
            <div className="divider-line" />
          </div>
        </div>

        {/* Masterpiece Cloud-Shaped Wedding Card (Fluid Mobile Safe) */}
        <div
          className="cloud-scallop-card"
          style={{
            background: "linear-gradient(165deg, #FFFDF8 0%, #FAF5EA 50%, #F5EDE2 100%)",
            border: "3px solid #D4AF37",
            borderRadius: "clamp(32px, 8vw, 60px) clamp(18px, 4vw, 30px) clamp(32px, 8vw, 60px) clamp(18px, 4vw, 30px)",
            padding: "clamp(22px, 5vw, 56px) clamp(16px, 4vw, 40px)",
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.65), 0 0 35px rgba(212, 175, 55, 0.3)",
            position: "relative",
            textAlign: "center"
          }}
        >
          {/* Inner Dashed Cloud Border */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
              border: "1.5px dashed rgba(212, 175, 55, 0.65)",
              borderRadius: "clamp(24px, 6vw, 48px) clamp(14px, 3vw, 24px) clamp(24px, 6vw, 48px) clamp(14px, 3vw, 24px)",
              pointerEvents: "none"
            }}
          />

          {/* Top Auspicious Invocations */}
          <div style={{ marginBottom: "22px" }}>
            <p
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.15rem, 3vw, 1.35rem)",
                color: "#B84D62",
                margin: "0 0 4px 0",
                fontWeight: "bold"
              }}
            >
              ॥ श्री गणेशाय नमः ॥
            </p>
            <h3
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.5rem, 4.5vw, 2.2rem)",
                color: "#4E0E1B",
                margin: 0
              }}
            >
              ॥ मंगल परिणय आमंत्रण ॥
            </h3>
            <p
              style={{
                fontFamily: "var(--font-hindi-text)",
                fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                color: "#725057",
                marginTop: "6px"
              }}
            >
              {invitationBody.opening}
            </p>
          </div>

          {/* Couple Cloud Portraits in Invitation Card */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(10px, 3vw, 28px)",
              margin: "20px 0 24px 0",
              flexWrap: "wrap"
            }}
          >
            {/* Groom Cloud Frame */}
            <div style={{ textAlign: "center", width: "clamp(130px, 38vw, 210px)" }}>
              <div
                className="cloud-photo-frame"
                style={{
                  width: "clamp(120px, 35vw, 160px)",
                  height: "clamp(145px, 42vw, 195px)",
                  margin: "0 auto 8px auto"
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
                  />
                </div>
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "clamp(1.2rem, 3.2vw, 1.5rem)",
                  color: "#4E0E1B",
                  margin: "4px 0 2px 0"
                }}
              >
                {couple.groom.nameHi}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "clamp(0.85rem, 2vw, 0.98rem)",
                  color: "#725057",
                  margin: 0
                }}
              >
                सुपुत्र — {couple.groom.parentsHi}
              </p>
            </div>

            {/* Sang Pill */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: "clamp(40px, 10vw, 50px)",
                  height: "clamp(40px, 10vw, 50px)",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FFF0E6 0%, #FCE8E6 100%)",
                  border: "1.5px solid #C99B3C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(216, 125, 138, 0.2)"
                }}
              >
                <Heart size={20} fill="#D87D8A" color="#C99B3C" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.1rem",
                  color: "#A6751C",
                  marginTop: "4px",
                  fontWeight: 600
                }}
              >
                एवं
              </span>
            </div>

            {/* Bride Cloud Frame */}
            <div style={{ textAlign: "center", width: "clamp(130px, 38vw, 210px)" }}>
              <div
                className="cloud-photo-frame"
                style={{
                  width: "clamp(120px, 35vw, 160px)",
                  height: "clamp(145px, 42vw, 195px)",
                  margin: "0 auto 8px auto",
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
                  />
                </div>
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "clamp(1.2rem, 3.2vw, 1.5rem)",
                  color: "#4E0E1B",
                  margin: "4px 0 2px 0"
                }}
              >
                {couple.bride.nameHi}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "clamp(0.85rem, 2vw, 0.98rem)",
                  color: "#725057",
                  margin: 0
                }}
              >
                सुपुत्री — {couple.bride.parentsHi}
              </p>
            </div>
          </div>

          {/* Invitation Message Body */}
          <div style={{ margin: "22px 0" }}>
            <p
              style={{
                fontFamily: "var(--font-hindi-text)",
                fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
                lineHeight: 1.8,
                color: "#5C3E45",
                maxWidth: "700px",
                margin: "0 auto 14px auto"
              }}
            >
              {invitationBody.requestMessage}
            </p>
            <p
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.15rem, 2.8vw, 1.35rem)",
                color: "#B84D62",
                fontWeight: "bold",
                margin: 0
              }}
            >
              {invitationBody.invitedBy}
            </p>
          </div>

          {/* Cloud Summary of 4 Events */}
          <div
            style={{
              background: "linear-gradient(135deg, #FFF0E6 0%, #FCE8E6 100%)",
              borderRadius: "24px",
              padding: "18px 14px",
              color: "#4E0E1B",
              margin: "24px 0",
              border: "1.5px solid rgba(201, 155, 60, 0.45)"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 125px), 1fr))",
                gap: "10px",
                textAlign: "center"
              }}
            >
              {events.map((evt) => (
                <div
                  key={evt.id}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "10px 4px",
                    border: evt.isMainWedding ? "1.5px solid #C99B3C" : "1px solid rgba(201, 155, 60, 0.25)",
                    boxShadow: "0 2px 6px rgba(216, 125, 138, 0.08)"
                  }}
                >
                  <div style={{ fontSize: "1.3rem", marginBottom: "2px" }}>{evt.symbol}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-hindi-display)",
                      fontSize: "1rem",
                      color: evt.isMainWedding ? "#B84D62" : "#4E0E1B",
                      fontWeight: "bold"
                    }}
                  >
                    {evt.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#A6751C",
                      fontFamily: "var(--font-hindi-text)",
                      fontWeight: 600
                    }}
                  >
                    {evt.date.split(" ")[0]} {evt.date.split(" ")[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Baraat Note */}
          <div
            style={{
              background: "rgba(254, 235, 230, 0.75)",
              border: "1px dashed #C99B3C",
              borderRadius: "16px",
              padding: "12px 18px",
              margin: "18px auto",
              maxWidth: "600px",
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              color: "#4E0E1B",
              fontWeight: 600
            }}
          >
            🚨 {invitationBody.specialNote}
          </div>

          {/* Family & Vineet Split Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "16px",
              marginTop: "24px",
              textAlign: "center"
            }}
          >
            {/* Darshanabhilashi */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderRadius: "18px",
                padding: "18px",
                border: "1px solid rgba(201, 155, 60, 0.35)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.25rem",
                  color: "#B84D62",
                  margin: "0 0 6px 0"
                }}
              >
                {familyDetails.darshanabhilashiTitle}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "0.95rem",
                  color: "#5C3E45",
                  lineHeight: 1.65,
                  margin: 0
                }}
              >
                {familyDetails.darshanabhilashiList.join(", ")}
              </p>
            </div>

            {/* Vineet */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                borderRadius: "18px",
                padding: "18px",
                border: "1px solid rgba(201, 155, 60, 0.35)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.25rem",
                  color: "#B84D62",
                  margin: "0 0 6px 0"
                }}
              >
                {familyDetails.vineetTitle}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.35rem",
                  color: "#4E0E1B",
                  fontWeight: "bold",
                  margin: "0 0 4px 0"
                }}
              >
                {familyDetails.vineetName}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "0.95rem",
                  color: "#5C3E45",
                  margin: "0 0 4px 0"
                }}
              >
                {familyDetails.vineetAddress}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif-royal)",
                  fontSize: "0.92rem",
                  color: "#A6751C",
                  fontWeight: 600,
                  margin: 0
                }}
              >
                मो. 8052797334, 8173087391
              </p>
            </div>
          </div>

          {/* Action Button: Fullscreen Royal Cloud Card */}
          <div style={{ marginTop: "32px" }}>
            <button
              onClick={onOpenCardModal}
              className="btn-cloud-primary"
              style={{
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                padding: "14px clamp(20px, 5vw, 36px)"
              }}
            >
              <Sparkles size={18} />
              ॥ शाही डिजिटल पत्रिका पूर्ण स्क्रीन दर्शन / प्रिंट ॥
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
