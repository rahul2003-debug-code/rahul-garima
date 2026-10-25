import { useState, useEffect } from "react";
import { Heart, ChevronDown, Calendar, Sparkles, Cloud } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";

export default function Hero() {
  const { couple, weddingTimestamp, invitationHeader } = WEDDING_DATA;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingTimestamp]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 70px) 0 clamp(50px, 10vw, 80px) 0",
        textAlign: "center",
        color: "var(--color-text-main)",
        overflow: "hidden",
        backgroundColor: "var(--color-maroon-dark)",
        backgroundImage: "radial-gradient(ellipse at 50% 30%, #5C0614 0%, #2A0106 65%, #180004 100%)"
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 6 }}>
        {/* Floating Cloud Top Pill */}
        <div
          className="cloud-pill-badge"
          style={{
            margin: "0 auto 16px auto"
          }}
        >
          <Sparkles size={15} color="#FAD980" />
          <span
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(0.92rem, 2.4vw, 1.05rem)",
              color: "#FAD980",
              letterSpacing: "1px",
              fontWeight: 600
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </span>
          <Sparkles size={15} color="#FAD980" />
        </div>

        {/* Ethereal Mangal Amantran Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)",
            letterSpacing: "2px",
            color: "#FAD980",
            marginBottom: "4px"
          }}
        >
          {invitationHeader.mangalAmantran}
        </p>

        <p
          style={{
            fontFamily: "var(--font-serif-royal)",
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            letterSpacing: "4px",
            color: "#E8A598",
            textTransform: "uppercase",
            marginBottom: "12px",
            fontWeight: 600
          }}
        >
          SHUBH VIVAH • शुभ विवाह
        </p>

        {/* Couple Names with Radiant Gold Shimmer */}
        <h1
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "clamp(2.5rem, 7.5vw, 4.8rem)",
            lineHeight: 1.15,
            margin: "0 0 10px 0"
          }}
        >
          <span className="gold-shimmer-text">राहुल</span>
          <span
            style={{
              display: "inline-block",
              margin: "0 clamp(8px, 2.5vw, 18px)",
              verticalAlign: "middle"
            }}
          >
            <Heart size={32} fill="#E8A598" color="#D4AF37" />
          </span>
          <span className="gold-shimmer-text">गरिमा</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-serif-royal)",
            fontSize: "clamp(1.05rem, 2.6vw, 1.5rem)",
            letterSpacing: "2px",
            color: "#FAD980",
            margin: "0 0 16px 0",
            fontWeight: 700
          }}
        >
          Rahul Kumar &amp; Garima Verma
        </p>

        {/* Welcome Tagline */}
        <p
          style={{
            maxWidth: "680px",
            margin: "0 auto clamp(24px, 5vw, 36px) auto",
            fontSize: "clamp(0.98rem, 2.2vw, 1.15rem)",
            fontFamily: "var(--font-hindi-text)",
            color: "rgba(255, 240, 230, 0.9)",
            lineHeight: 1.75
          }}
        >
          {invitationHeader.welcomeText}
        </p>

        {/* Couple Cloud-Shaped Photo Showcase (Mobile-Fluid Responsive) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px, 3.5vw, 32px)",
            margin: "10px auto clamp(24px, 5vw, 40px) auto",
            flexWrap: "wrap"
          }}
        >
          {/* Rahul's Cloud Frame */}
          <div style={{ textAlign: "center", width: "clamp(135px, 40vw, 210px)" }}>
            <div
              className="cloud-photo-frame"
              style={{
                width: "clamp(135px, 40vw, 210px)",
                height: "clamp(165px, 48vw, 255px)",
                margin: "0 auto 12px auto"
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
                  loading="eager"
                />
              </div>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.15rem, 3.2vw, 1.45rem)",
                color: "#FFF0C2",
                margin: "0 0 4px 0"
              }}
            >
              चि० राहुल कुमार
            </h3>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-hindi-text)",
                fontSize: "0.82rem",
                color: "#FAD980",
                background: "rgba(45, 4, 12, 0.85)",
                padding: "2px 14px",
                borderRadius: "20px",
                border: "1px solid rgba(229, 195, 120, 0.4)",
                fontWeight: 600
              }}
            >
              वर (दूल्हा)
            </span>
          </div>

          {/* Center Cloud Heart Emblem */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px"
            }}
          >
            <div
              style={{
                width: "clamp(44px, 12vw, 60px)",
                height: "clamp(44px, 12vw, 60px)",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
                border: "2px solid #D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.45)"
              }}
            >
              <Heart size={24} fill="#E8A598" color="#D4AF37" />
            </div>
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                color: "#FAD980",
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                marginTop: "6px",
                fontWeight: 600
              }}
            >
              संग
            </span>
          </div>

          {/* Garima's Cloud Frame */}
          <div style={{ textAlign: "center", width: "clamp(135px, 40vw, 210px)" }}>
            <div
              className="cloud-photo-frame"
              style={{
                width: "clamp(135px, 40vw, 210px)",
                height: "clamp(165px, 48vw, 255px)",
                margin: "0 auto 12px auto",
                animationDelay: "-4.5s"
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
                  loading="eager"
                />
              </div>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.15rem, 3.2vw, 1.45rem)",
                color: "#FFF0C2",
                margin: "0 0 4px 0"
              }}
            >
              आयु० गरिमा वर्मा
            </h3>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-hindi-text)",
                fontSize: "0.82rem",
                color: "#FAD980",
                background: "rgba(45, 4, 12, 0.85)",
                padding: "2px 14px",
                borderRadius: "20px",
                border: "1px solid rgba(229, 195, 120, 0.4)",
                fontWeight: 600
              }}
            >
              वधू (दुल्हन)
            </span>
          </div>
        </div>

        {/* Cloud-Shaped Wedding Date Pill (Fluid Mobile Width) */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            background: "linear-gradient(135deg, #3D040D 0%, #260106 100%)",
            border: "1.5px solid #D4AF37",
            padding: "10px clamp(16px, 4vw, 32px)",
            borderRadius: "50px",
            margin: "0 auto clamp(20px, 4vw, 32px) auto",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
            maxWidth: "96%"
          }}
        >
          <Calendar size={20} color="#FAD980" style={{ flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1rem, 3.2vw, 1.25rem)",
              color: "#FFF0C2",
              letterSpacing: "0.5px",
              fontWeight: 600
            }}
          >
            शुभ विवाह • 11 नवम्बर 2026 • बुधवार
          </span>
        </div>

        {/* Ethereal Cloud Countdown Timer */}
        <div
          className="cloud-scallop-card"
          style={{
            maxWidth: "600px",
            margin: "0 auto clamp(24px, 5vw, 38px) auto",
            padding: "clamp(16px, 4vw, 24px) clamp(10px, 3vw, 20px)",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(0.92rem, 2.5vw, 1.05rem)",
              letterSpacing: "1px",
              color: "#FAD980",
              marginBottom: "14px",
              fontWeight: 600
            }}
          >
            {timeLeft.isCompleted
              ? "॥ शुभ विवाह सम्पन्न • ईश्वर का अनंत आशीष ॥"
              : "☁️ पावन लगन की शुभ उल्टी गिनती (Live Countdown) ☁️"}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(6px, 2vw, 12px)"
            }}
          >
            {[
              { val: timeLeft.days, label: "दिन" },
              { val: timeLeft.hours, label: "घंटे" },
              { val: timeLeft.minutes, label: "मिनट" },
              { val: timeLeft.seconds, label: "सेकंड" }
            ].map((unit, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(229, 195, 120, 0.35)",
                  borderRadius: "18px",
                  padding: "clamp(8px, 2.5vw, 14px) 4px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.25)"
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-serif-royal)",
                    fontSize: "clamp(1.4rem, 4.8vw, 2.3rem)",
                    fontWeight: 700,
                    color: "#FFF0C2",
                    lineHeight: 1
                  }}
                >
                  {String(unit.val).padStart(2, "0")}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(0.78rem, 2vw, 0.9rem)",
                    color: "rgba(255, 240, 230, 0.8)",
                    marginTop: "6px",
                    fontFamily: "var(--font-hindi-text)",
                    fontWeight: 600
                  }}
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Scroll CTA Button */}
        <div>
          <a
            href="#blessing"
            className="btn-cloud-primary"
            style={{
              padding: "14px clamp(24px, 6vw, 42px)"
            }}
          >
            ॥ विवाह आमंत्रण देखें ॥
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
