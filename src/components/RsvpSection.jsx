import { useState, useEffect } from "react";
import { CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guestCount: "1",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localBlessings, setLocalBlessings] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rg_wedding_blessings");
      if (stored) {
        setLocalBlessings(JSON.parse(stored));
      } else {
        setLocalBlessings([
          {
            name: "रोहित एवं परिवार",
            attending: "yes",
            message: "राहुल भैया और गरिमा भाभी को वैवाहिक जीवन की हार्दिक बधाई एवं अनंत मंगलकामनाएं! सदा खुश रहें।",
            date: "25 Oct 2026"
          }
        ]);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    const newBlessing = {
      name: formData.name.trim(),
      attending: formData.attending,
      guestCount: formData.guestCount,
      message: formData.message.trim() || "सदा सुखी रहें एवं सुख-सौभाग्य से परिपूर्ण रहें।",
      date: new Date().toLocaleDateString("hi-IN", { day: "numeric", month: "short", year: "numeric" })
    };

    const updated = [newBlessing, ...localBlessings];
    setLocalBlessings(updated);
    try {
      localStorage.setItem("rg_wedding_blessings", JSON.stringify(updated));
    } catch {
      // ignore
    }

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#D4AF37", "#8A1122", "#E63946"]
      });
    } catch {
      // ignore
    }

    const attendingText = formData.attending === "yes"
      ? "✅ हाँ, हम सपरिवार अवश्य सम्मिलित होंगे।"
      : "💐 हम सशरीर उपस्थित नहीं हो सकेंगे, पर हमारा हार्दिक शुभाशीर्वाद सदा साथ है।";

    const waText = encodeURIComponent(
      `🙏 *विवाह आमंत्रण उपस्थिति संदेश (RSVP)* 🙏\n\nवर-वधू: राहुल ❤️ गरिमा\n\nअतिथि का नाम: ${formData.name}\nउपस्थिति स्थिति: ${attendingText}\nअतिथियों की संख्या: ${formData.guestCount}\n\nमंगलकामना संदेश:\n"${newBlessing.message}"`
    );

    setSuccessMsg("आपकी मंगलकामना दर्ज हो गई है! व्हाट्सएप पर संदेश खोला जा रहा है...");

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=918052797334&text=${waText}`, "_blank");
      setIsSubmitting(false);
      setFormData({ name: "", attending: "yes", guestCount: "1", message: "" });
    }, 1200);
  };

  return (
    <section
      id="rsvp"
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        backgroundColor: "var(--color-maroon-dark)",
        backgroundImage: "radial-gradient(circle at 50% 50%, #4D0512 0%, #1F0106 100%)",
        color: "var(--color-text-main)",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "820px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 44px)" }}>
          <div className="cloud-pill-badge" style={{ marginBottom: "12px" }}>
            <Sparkles size={16} color="#FAD980" />
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                color: "#FAD980",
                fontSize: "clamp(0.88rem, 2.2vw, 0.95rem)",
                fontWeight: 600
              }}
            >
              ॥ उपस्थिति एवं शुभाशीर्वाद ॥
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
            <span className="gold-shimmer-text">॥ आपकी उपस्थिति सादर प्रार्थनीय ॥</span>
          </h2>

          <div className="ornament-divider">
            <div className="divider-line" />
            <span className="divider-center" style={{ color: "#FAD980" }}>☁️ 🌹 ☁️</span>
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
            हमारे इस पावन मांगलिक प्रसंग पर आप सपरिवार पधारकर वर-वधू को अपना स्नेह एवं शुभाशीर्वाद प्रदान करें।
          </p>
        </div>

        {/* RSVP Form Card — Stylish Cloud Shape */}
        <div
          className="cloud-scallop-card"
          style={{
            background: "linear-gradient(155deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
            border: "1.5px solid rgba(229, 195, 120, 0.45)",
            borderRadius: "clamp(28px, 6vw, 48px) clamp(16px, 3.5vw, 26px) clamp(28px, 6vw, 48px) clamp(16px, 3.5vw, 26px)",
            padding: "clamp(20px, 4vw, 36px) clamp(14px, 3.5vw, 28px)",
            boxShadow: "0 18px 50px rgba(0, 0, 0, 0.55), 0 0 25px rgba(229, 195, 120, 0.16)",
            marginBottom: "44px",
            color: "#FFF0E6"
          }}
        >
          {successMsg && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(45, 106, 79, 0.2)",
                border: "1.5px solid #2D6A4F",
                color: "#A7F3D0",
                padding: "12px 18px",
                borderRadius: "20px",
                marginBottom: "20px",
                fontSize: "0.95rem",
                fontFamily: "var(--font-hindi-text)",
                fontWeight: 600
              }}
            >
              <CheckCircle2 size={20} color="#34D399" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Guest Name */}
            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="guest-name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.05rem",
                  color: "#FFF0C2",
                  fontWeight: 600,
                  marginBottom: "6px"
                }}
              >
                आपका शुभ नाम *
              </label>
              <input
                id="guest-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="उदा. श्री रमेश सिंह / सपरिवार"
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  borderRadius: "22px",
                  background: "rgba(255, 255, 255, 0.07)",
                  border: "1.5px solid rgba(229, 195, 120, 0.35)",
                  color: "#FFF0E6",
                  fontSize: "0.98rem",
                  fontFamily: "var(--font-hindi-text)",
                  outline: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                }}
              />
            </div>

            {/* Attendance Choice */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.05rem",
                  color: "#FFF0C2",
                  fontWeight: 600,
                  marginBottom: "8px"
                }}
              >
                उपस्थिति की स्थिति *
              </label>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-hindi-text)",
                    color: formData.attending === "yes" ? "#FFF0C2" : "rgba(255, 240, 230, 0.7)",
                    fontWeight: formData.attending === "yes" ? "bold" : "normal",
                    background: formData.attending === "yes" ? "rgba(212, 175, 55, 0.18)" : "rgba(255, 255, 255, 0.05)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: formData.attending === "yes" ? "1.5px solid #D4AF37" : "1px solid rgba(229, 195, 120, 0.25)"
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === "yes"}
                    onChange={handleChange}
                    style={{ accentColor: "#D4AF37", width: "16px", height: "16px" }}
                  />
                  हाँ, सपरिवार अवश्य पधारेंगे
                </label>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-hindi-text)",
                    color: formData.attending === "no" ? "#FFF0C2" : "rgba(255, 240, 230, 0.7)",
                    fontWeight: formData.attending === "no" ? "bold" : "normal",
                    background: formData.attending === "no" ? "rgba(212, 175, 55, 0.18)" : "rgba(255, 255, 255, 0.05)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: formData.attending === "no" ? "1.5px solid #D4AF37" : "1px solid rgba(229, 195, 120, 0.25)"
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === "no"}
                    onChange={handleChange}
                    style={{ accentColor: "#D4AF37", width: "16px", height: "16px" }}
                  />
                  शुभकामनाओं सहित अनुपस्थित
                </label>
              </div>
            </div>

            {/* Guest Count */}
            {formData.attending === "yes" && (
              <div style={{ marginBottom: "18px" }}>
                <label
                  htmlFor="guest-count"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-hindi-display)",
                    fontSize: "1.05rem",
                    color: "#FFF0C2",
                    fontWeight: 600,
                    marginBottom: "6px"
                  }}
                >
                  अतिथियों की संभावित संख्या
                </label>
                <select
                  id="guest-count"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 18px",
                    borderRadius: "22px",
                    background: "#36030C",
                    border: "1.5px solid rgba(229, 195, 120, 0.35)",
                    color: "#FFF0C2",
                    fontSize: "0.98rem",
                    fontFamily: "var(--font-hindi-display)",
                    outline: "none"
                  }}
                >
                  <option value="1" style={{ background: "#260106", color: "#FFF0C2" }}>1 व्यक्ति</option>
                  <option value="2" style={{ background: "#260106", color: "#FFF0C2" }}>2 व्यक्ति (दंपति)</option>
                  <option value="3" style={{ background: "#260106", color: "#FFF0C2" }}>3 व्यक्ति</option>
                  <option value="4" style={{ background: "#260106", color: "#FFF0C2" }}>4 व्यक्ति</option>
                  <option value="5+" style={{ background: "#260106", color: "#FFF0C2" }}>5+ सपरिवार</option>
                </select>
              </div>
            )}

            {/* Blessing Message */}
            <div style={{ marginBottom: "24px" }}>
              <label
                htmlFor="guest-message"
                style={{
                  display: "block",
                  fontFamily: "var(--font-hindi-display)",
                  fontSize: "1.05rem",
                  color: "#FFF0C2",
                  fontWeight: 600,
                  marginBottom: "6px"
                }}
              >
                वर-वधू के लिए मंगल शुभाशीर्वाद
              </label>
              <textarea
                id="guest-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="उदा. राहुल और गरिमा को सुखद एवं मंगलमय वैवाहिक जीवन की अशेष शुभकामनाएं..."
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  borderRadius: "22px",
                  background: "rgba(255, 255, 255, 0.07)",
                  border: "1.5px solid rgba(229, 195, 120, 0.35)",
                  color: "#FFF0E6",
                  fontSize: "0.98rem",
                  fontFamily: "var(--font-hindi-text)",
                  outline: "none",
                  resize: "vertical",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-cloud-primary"
                style={{
                  width: "100%",
                  maxWidth: "460px",
                  padding: "15px 32px",
                  fontSize: "1.05rem"
                }}
              >
                <MessageSquare size={18} />
                {isSubmitting
                  ? "संदेश तैयार हो रहा है..."
                  : "व्हाट्सऐप द्वारा उपस्थिति संदेश भेजें"}
              </button>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255, 240, 230, 0.75)",
                  marginTop: "10px",
                  fontFamily: "var(--font-hindi-text)"
                }}
              >
                * कोई व्यक्तिगत डेटा एकत्रित नहीं किया जाता। संदेश सीधे परिवार के मुख्य नंबर (8052797334) पर प्रेषित होता है।
              </p>
            </div>
          </form>
        </div>

        {/* Blessings Wall */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "22px" }}>
            <h3
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.4rem, 4vw, 1.7rem)",
                color: "#FFF0C2",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Sparkles size={18} color="#FAD980" />
              आशीर्वाद एवं मंगलकामनाएं
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gap: "14px",
              maxHeight: "380px",
              overflowY: "auto",
              paddingRight: "6px"
            }}
          >
            {localBlessings.map((b, idx) => (
              <div
                key={idx}
                className="cloud-scallop-card"
                style={{
                  background: "linear-gradient(145deg, rgba(62, 7, 18, 0.94) 0%, rgba(36, 3, 9, 0.98) 100%)",
                  border: "1.5px solid rgba(229, 195, 120, 0.35)",
                  borderRadius: "24px 14px 24px 14px",
                  padding: "16px 20px",
                  boxShadow: "0 3px 12px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "6px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-hindi-display)",
                      fontSize: "1.1rem",
                      color: "#FAD980",
                      fontWeight: 600
                    }}
                  >
                    {b.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255, 240, 230, 0.7)",
                      fontFamily: "var(--font-hindi-text)",
                      fontWeight: 500
                    }}
                  >
                    {b.date}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-hindi-text)",
                    fontSize: "0.98rem",
                    color: "#FFF0E6",
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  “{b.message}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
