import { useState } from "react";
import { Music, VolumeX, Sparkles, Menu, X, Heart } from "lucide-react";

export default function Navbar({
  isAudioPlaying,
  onToggleAudio,
  petalsEnabled,
  onTogglePetals
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#blessing", label: "शुभ आशीर्वाद" },
    { href: "#couple", label: "वर-वधू परिचय" },
    { href: "#events", label: "मांगलिक कार्यक्रम" },
    { href: "#invitation", label: "शाही विवाह पत्रिका" },
    { href: "#rsvp", label: "उपस्थिति / RSVP" },
    { href: "#share", label: "आमंत्रण प्रेषण" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(34, 2, 7, 0.94)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1.5px solid rgba(229, 195, 120, 0.35)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.45)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "66px"
        }}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "#FFF0C2"
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1.5px solid var(--color-champagne-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #4A030D 0%, #2A0106 100%)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              flexShrink: 0
            }}
          >
            <Heart size={16} fill="#E5C378" color="#D4AF37" />
          </div>
          <div>
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "clamp(1.05rem, 3.2vw, 1.25rem)",
                color: "#FFF0C2",
                letterSpacing: "0.5px",
                display: "block",
                lineHeight: 1.1,
                fontWeight: "bold"
              }}
            >
              राहुल ❤️ गरिमा
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-hindi-display)",
                fontSize: "0.72rem",
                color: "#FAD980"
              }}
            >
              ॥ शुभ विवाह • 11 नवम्बर 2026 ॥
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            gap: "18px",
            alignItems: "center"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#FFF0C2",
                textDecoration: "none",
                fontSize: "0.96rem",
                fontFamily: "var(--font-hindi-display)",
                fontWeight: 600,
                transition: "color 0.2s ease",
                padding: "4px 6px"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#FAD980")}
              onMouseLeave={(e) => (e.target.style.color = "#FFF0C2")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Music, Petals & Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Music Button */}
          <button
            onClick={onToggleAudio}
            title={isAudioPlaying ? "विवाह गीत बंद करें" : "विवाह गीत चालू करें"}
            aria-label="Toggle Wedding Song"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "20px",
              background: isAudioPlaying
                ? "linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)"
                : "rgba(255, 255, 255, 0.08)",
              border: `1.5px solid ${isAudioPlaying ? "#FAD980" : "rgba(229, 195, 120, 0.4)"}`,
              color: isAudioPlaying ? "#240106" : "#FFF0C2",
              cursor: "pointer",
              fontSize: "0.82rem",
              fontFamily: "var(--font-hindi-display)",
              fontWeight: 600,
              boxShadow: isAudioPlaying ? "0 4px 12px rgba(212, 175, 55, 0.4)" : "none",
              transition: "all 0.25s ease"
            }}
          >
            {isAudioPlaying ? (
              <>
                <Music size={14} className="music-pulse-icon" />
                <span className="control-label">गीत On</span>
              </>
            ) : (
              <>
                <VolumeX size={14} />
                <span className="control-label">गीत Off</span>
              </>
            )}
          </button>

          {/* Petal Canvas Toggle */}
          <button
            onClick={onTogglePetals}
            title={petalsEnabled ? "पंखुड़ियों की वृष्टि बंद करें" : "पंखुड़ियों की वृष्टि चालू करें"}
            aria-label="Toggle Petals"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: petalsEnabled
                ? "linear-gradient(135deg, #5C0614 0%, #2A0106 100%)"
                : "rgba(255, 255, 255, 0.08)",
              border: `1.5px solid ${petalsEnabled ? "#FAD980" : "rgba(229, 195, 120, 0.4)"}`,
              color: petalsEnabled ? "#FAD980" : "rgba(255, 240, 230, 0.7)",
              cursor: "pointer",
              boxShadow: petalsEnabled ? "0 2px 8px rgba(212, 175, 55, 0.25)" : "none",
              transition: "all 0.2s ease"
            }}
          >
            <Sparkles size={15} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              padding: "4px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(229, 195, 120, 0.35)",
              borderRadius: "8px",
              color: "#FFF0C2",
              cursor: "pointer"
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#260208",
            borderTop: "1.5px solid rgba(229, 195, 120, 0.35)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.55)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                color: "#FFF0C2",
                textDecoration: "none",
                fontSize: "1.05rem",
                fontFamily: "var(--font-hindi-display)",
                fontWeight: 600,
                padding: "8px 0",
                borderBottom: "1px solid rgba(229, 195, 120, 0.2)"
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Embedded CSS */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .control-label {
            display: inline !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        .music-pulse-icon {
          animation: musicPulse 1.4s ease infinite;
        }
        @keyframes musicPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
      `}</style>
    </header>
  );
}
