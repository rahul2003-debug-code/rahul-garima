import { useState } from "react";
import { Share2, Copy, Check, Phone, MessageSquare, MapPin } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";

export default function ShareSection() {
  const { contacts } = WEDDING_DATA;
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    return window.location.href.split("#")[0];
  };

  const getShareText = () => {
    return `🌸 *॥ मंगल आमंत्रण ॥* 🌸\n\nस्नेही स्वजन,\n\nईश्वर की असीम कृपा से चि० राहुल कुमार संग आयु० गरिमा वर्मा के शुभ विवाह (11 नवम्बर 2026, बुधवार) के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं।\n\n📍 बारात प्रस्थान: सायं 3 बजे (निवास स्थान मसोन, गाजीपुर से वाराणसी के लिए)\n\nडिजिटल विवाह पत्रिका देखने एवं वर-वधू को अपना मंगल आशीर्वाद प्रदान करने के लिए नीचे दिए गए लिंक पर क्लिक करें:\n${getShareUrl()}\n\n— विनीत: श्री अशोक कुमार एवं समस्त परिवार, गाजीपुर (मो. 8052797334, 8173087391)`;
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const input = document.createElement("input");
      input.value = getShareUrl();
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "राहुल ❤️ गरिमा — शुभ विवाह डिजिटल आमंत्रण",
          text: getShareText(),
          url: getShareUrl()
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section
      id="share"
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        backgroundColor: "var(--color-maroon-rich)",
        backgroundImage: "radial-gradient(circle at 50% 50%, #4D030C 0%, #250005 100%)",
        color: "var(--color-text-main)",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "920px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 44px)" }}>
          <div className="cloud-pill-badge" style={{ marginBottom: "12px" }}>
            <Share2 size={16} color="#FAD980" />
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                color: "#FAD980",
                fontSize: "clamp(0.88rem, 2.2vw, 0.95rem)",
                fontWeight: 600
              }}
            >
              ॥ आमंत्रण साझा करें एवं संपर्क ॥
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#FFF0C2",
              margin: 0
            }}
          >
            <span className="gold-shimmer-text">॥ आमंत्रण प्रेषण एवं संपर्क सूत्र ॥</span>
          </h2>

          <div className="ornament-divider">
            <div className="divider-line" />
            <span className="divider-center" style={{ color: "#FAD980" }}>☁️ 💌 ☁️</span>
            <div className="divider-line" />
          </div>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              fontFamily: "var(--font-hindi-text)",
              fontSize: "clamp(0.98rem, 2.2vw, 1.15rem)",
              color: "rgba(255, 240, 230, 0.9)"
            }}
          >
            व्हाट्सऐप अथवा अन्य माध्यमों से यह पावन मांगलिक निमंत्रण अपने प्रियजनों और परिवार के साथ साझा करें।
          </p>
        </div>

        {/* Share Action Buttons Card — Stylish Cloud Scallop */}
        <div
          className="cloud-scallop-card"
          style={{
            background: "linear-gradient(155deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
            border: "1.5px solid rgba(229, 195, 120, 0.45)",
            borderRadius: "clamp(28px, 6vw, 48px) clamp(16px, 3.5vw, 26px) clamp(28px, 6vw, 48px) clamp(16px, 3.5vw, 26px)",
            padding: "clamp(20px, 4vw, 34px) clamp(14px, 3.5vw, 26px)",
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.55), 0 0 25px rgba(229, 195, 120, 0.16)",
            textAlign: "center",
            marginBottom: "44px",
            color: "#FFF0E6"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "16px"
            }}
          >
            {/* WhatsApp Share Button */}
            <button
              onClick={handleWhatsAppShare}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px clamp(20px, 4vw, 30px)",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "#FFFFFF",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "var(--font-hindi-display)",
                border: "none",
                borderRadius: "35px",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                transition: "all 0.3s ease"
              }}
            >
              <MessageSquare size={18} />
              व्हाट्सऐप पर शेयर करें
            </button>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="btn-cloud-primary"
              style={{
                padding: "13px clamp(18px, 4vw, 28px)",
                fontSize: "1rem"
              }}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "लिंक कॉपी हो गया!" : "निमंत्रण लिंक कॉपी करें"}
            </button>

            {/* Device Share Button */}
            {typeof navigator !== "undefined" && navigator.share && (
              <button
                onClick={handleNativeShare}
                className="btn-cloud-secondary"
                style={{
                  padding: "12px 24px"
                }}
              >
                <Share2 size={16} />
                अन्य माध्यम
              </button>
            )}
          </div>

          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255, 240, 230, 0.75)",
              fontFamily: "var(--font-hindi-text)",
              margin: 0
            }}
          >
            * व्हाट्सऐप शेयर लिंक में आत्मीय एवं सुंदर हिंदी आमंत्रण संदेश स्वतः सम्मिलित रहता है।
          </p>
        </div>

        {/* Verified Family Contacts Grid */}
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <h3
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1.4rem, 4vw, 1.7rem)",
              color: "#FFF0C2",
              marginBottom: "6px"
            }}
          >
            ॥ आत्मीय संपर्क एवं स्वागत सूत्र ॥
          </h3>
          <p
            style={{
              fontFamily: "var(--font-hindi-text)",
              fontSize: "0.95rem",
              color: "rgba(255, 240, 230, 0.88)",
              margin: 0
            }}
          >
            विवाह उत्सव से संबंधित किसी भी जानकारी के लिए सादर संपर्क करें:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "clamp(14px, 3vw, 22px)"
          }}
        >
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="cloud-scallop-card"
              style={{
                background: "linear-gradient(145deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
                border: "1.5px solid rgba(229, 195, 120, 0.35)",
                borderRadius: "28px 16px 28px 16px",
                padding: "22px 18px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.35)"
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.3rem",
                  color: "#FFF0C2",
                  margin: "0 0 2px 0",
                  fontWeight: "bold"
                }}
              >
                {contact.name}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#FAD980",
                  margin: "0 0 12px 0",
                  fontFamily: "var(--font-hindi-text)",
                  fontWeight: 600
                }}
              >
                {contact.role}
              </p>

              <div
                style={{
                  fontFamily: "var(--font-serif-royal)",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#FFF0C2",
                  marginBottom: "16px",
                  letterSpacing: "1px"
                }}
              >
                {contact.displayNumber}
              </div>

              <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <a
                  href={`tel:${contact.number}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)",
                    border: "1px solid #D4AF37",
                    borderRadius: "30px",
                    color: "#FAD980",
                    fontSize: "0.88rem",
                    fontFamily: "var(--font-hindi-display)",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.25s ease"
                  }}
                >
                  <Phone size={13} />
                  कॉल करें
                </a>

                <a
                  href={`https://api.whatsapp.com/send?phone=91${contact.number}&text=${encodeURIComponent(
                    "सादर प्रणाम, राहुल एवं गरिमा के विवाह आमंत्रण के संबंध में संपर्क करना चाहते हैं।"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    background: "rgba(37, 211, 102, 0.18)",
                    border: "1px solid #25D366",
                    borderRadius: "30px",
                    color: "#A7F3D0",
                    fontSize: "0.88rem",
                    fontFamily: "var(--font-hindi-display)",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.25s ease"
                  }}
                >
                  <MessageSquare size={13} />
                  व्हाट्सऐप
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Venue Notice with मसोन */}
        <div
          className="cloud-scallop-card"
          style={{
            marginTop: "32px",
            background: "linear-gradient(145deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
            border: "1.5px dashed rgba(229, 195, 120, 0.55)",
            borderRadius: "28px",
            padding: "16px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "#FFF0C2",
            fontSize: "clamp(0.92rem, 2.4vw, 1rem)",
            fontFamily: "var(--font-hindi-text)",
            textAlign: "center",
            fontWeight: 600
          }}
        >
          <MapPin size={18} color="#FAD980" style={{ flexShrink: 0 }} />
          <span>
            निवास स्थान: ग्राम व पोस्ट — मसोन, जनपद — गाजीपुर (उ. प्र.) • बारात गंतव्य: वाराणसी (Varanasi)
          </span>
        </div>
      </div>
    </section>
  );
}
