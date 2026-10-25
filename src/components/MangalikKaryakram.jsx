import { Calendar, Download, Cloud, Sparkles } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";
import { generateGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";

export default function MangalikKaryakram() {
  const { events } = WEDDING_DATA;

  return (
    <section
      id="events"
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        backgroundColor: "var(--color-maroon-dark)",
        backgroundImage: "radial-gradient(ellipse at 50% 50%, #4D0512 0%, #1F0106 100%)",
        color: "var(--color-text-main)",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Section Title Header */}
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
              ॥ पावन मांगलिक अनुष्ठान ॥
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
            <span className="gold-shimmer-text">॥ मांगलिक कार्यक्रम ॥</span>
          </h2>

          <div className="ornament-divider">
            <div className="divider-line" />
            <span className="divider-center" style={{ color: "#FAD980" }}>☁️ 🪔 ☁️</span>
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
            विवाह उत्सव के शुभ एवं पावन अवसर पर आयोजित सभी मांगलिक अनुष्ठानों का विवरण:
          </p>
        </div>

        {/* 4 Cloud-Shaped Event Cards Grid (Responsive 100% Mobile Safe) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: "clamp(16px, 3vw, 26px)",
            marginBottom: "clamp(32px, 5vw, 44px)"
          }}
        >
          {events.map((evt, idx) => (
            <div
              key={evt.id}
              className="cloud-card"
              style={{
                background: evt.isMainWedding
                  ? "linear-gradient(155deg, rgba(82, 10, 26, 0.96) 0%, rgba(42, 4, 12, 0.98) 100%)"
                  : "linear-gradient(155deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
                border: evt.isMainWedding
                  ? "2px solid #D4AF37"
                  : "1.5px solid rgba(229, 195, 120, 0.45)",
                borderRadius: idx % 2 === 0 ? "40px 18px 40px 18px" : "18px 40px 18px 40px",
                padding: "clamp(20px, 4vw, 30px) clamp(14px, 3vw, 22px)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                color: "#FFF0E6"
              }}
            >
              {/* Highlight Pill for Vivah */}
              {evt.isMainWedding && (
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)",
                    color: "#240106",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    fontFamily: "var(--font-hindi-display)",
                    padding: "3px 12px",
                    borderRadius: "20px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)"
                  }}
                >
                  शुभ लग्न
                </div>
              )}

              {/* Event Header with Floating Icon */}
              <div
                style={{
                  textAlign: "center",
                  borderBottom: "1.5px dashed rgba(229, 195, 120, 0.35)",
                  paddingBottom: "14px",
                  marginBottom: "14px"
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    margin: "0 auto 10px auto",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
                    border: "2px solid #D4AF37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)"
                  }}
                >
                  {evt.symbol}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-hindi-display)",
                    fontSize: "0.9rem",
                    color: "#FAD980",
                    margin: "0 0 2px 0",
                    fontWeight: 600
                  }}
                >
                  {evt.number}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-hindi-display)",
                    fontSize: "clamp(1.5rem, 3.5vw, 1.85rem)",
                    color: "#FFF0C2",
                    margin: 0
                  }}
                >
                  {evt.title}
                </h3>
              </div>

              {/* Cloud-Shaped Date Badge */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  borderRadius: "20px",
                  padding: "10px",
                  textAlign: "center",
                  marginBottom: "14px",
                  border: "1.5px solid rgba(229, 195, 120, 0.4)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)"
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-hindi-display)",
                    fontSize: "clamp(1.15rem, 2.8vw, 1.35rem)",
                    color: "#FFF0C2",
                    letterSpacing: "0.5px",
                    fontWeight: "bold"
                  }}
                >
                  {evt.date}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-hindi-display)",
                    fontSize: "0.95rem",
                    color: "#FAD980",
                    fontWeight: 600
                  }}
                >
                  {evt.day}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-hindi-text)",
                  fontSize: "0.95rem",
                  color: "rgba(255, 240, 230, 0.88)",
                  lineHeight: 1.65,
                  marginBottom: "14px",
                  textAlign: "center"
                }}
              >
                {evt.description}
              </p>

              {/* Time & Venue Note */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "14px",
                  padding: "10px",
                  marginBottom: "14px",
                  fontSize: "0.88rem",
                  color: "#FFF0C2",
                  fontFamily: "var(--font-hindi-text)",
                  textAlign: "center",
                  border: "1px solid rgba(229, 195, 120, 0.25)"
                }}
              >
                <div><strong>समय:</strong> {evt.timeNote}</div>
                <div>{evt.venueNote}</div>
              </div>

              {/* Special Baraat Notice for Vivah */}
              {evt.specialNotice && (
                <div
                  style={{
                    background: "rgba(212, 175, 55, 0.15)",
                    border: "1px solid rgba(229, 195, 120, 0.5)",
                    borderRadius: "14px",
                    padding: "10px",
                    marginBottom: "16px",
                    color: "#FAD980",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textAlign: "center",
                    fontFamily: "var(--font-hindi-display)"
                  }}
                >
                  🚨 {evt.specialNotice}
                </div>
              )}

              {/* Calendar Sync Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginTop: "auto"
                }}
              >
                <a
                  href={generateGoogleCalendarUrl(evt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
                    border: "1px solid #D4AF37",
                    borderRadius: "30px",
                    color: "#FAD980",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-hindi-display)",
                    fontWeight: "bold",
                    textDecoration: "none",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Calendar size={14} />
                  कैलेंडर में जोड़ें
                </a>

                <button
                  onClick={() => downloadIcsFile(evt)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "9px 12px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(229, 195, 120, 0.4)",
                    borderRadius: "30px",
                    color: "#FFF0C2",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  title="Apple / Outlook Calendar (.ICS)"
                >
                  <Download size={14} />
                  .ICS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note in Floating Cloud Banner */}
        <div
          className="cloud-scallop-card"
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            background: "linear-gradient(145deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
            border: "2px solid #D4AF37",
            padding: "clamp(18px, 4vw, 26px) clamp(16px, 4vw, 30px)",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)",
              color: "#240106",
              fontWeight: "bold",
              fontFamily: "var(--font-hindi-display)",
              padding: "4px 18px",
              borderRadius: "20px",
              marginBottom: "10px",
              fontSize: "0.95rem"
            }}
          >
            <Cloud size={15} />
            विशेष नोट
          </div>
          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1.1rem, 2.8vw, 1.35rem)",
              color: "#FFF0C2",
              margin: 0,
              lineHeight: 1.6,
              fontWeight: 600
            }}
          >
            “बारात हमारे निवास स्थान से वाराणसी के लिए सायं 3 बजे प्रस्थान करेगी।”
          </p>
        </div>
      </div>
    </section>
  );
}
