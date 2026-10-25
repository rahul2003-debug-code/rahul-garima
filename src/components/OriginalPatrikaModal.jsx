import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";

export default function OriginalPatrikaModal({ isOpen, onClose }) {
  const { printedScans } = WEDDING_DATA;
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const currentScan = printedScans[activeTab];

  return (
    <div
      role="dialog"
      aria-label="Original Printed Wedding Card Scans"
      aria-modal="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1100,
        backgroundColor: "rgba(18, 0, 3, 0.95)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }}
    >
      {/* Top Bar with Title and Close Button */}
      <div
        style={{
          width: "100%",
          maxWidth: "880px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#FFF0C2",
          marginBottom: "16px",
          padding: "0 8px"
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "1.35rem",
              color: "#D4AF37",
              margin: 0
            }}
          >
            ॥ हस्तमुद्रित मूल पत्रिका ॥
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255, 240, 194, 0.8)",
              fontFamily: "var(--font-hindi-text)",
              margin: "2px 0 0 0"
            }}
          >
            {currentScan.title} • {currentScan.description}
          </p>
        </div>

        <button
          onClick={onClose}
          aria-label="बंद करें"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(212, 175, 55, 0.45)",
            color: "#FFF0C2",
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212, 175, 55, 0.35)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)")}
        >
          <X size={22} />
        </button>
      </div>

      {/* Tabs for the 3 Scans */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          overflowX: "auto",
          maxWidth: "880px",
          width: "100%",
          justifyContent: "center"
        }}
      >
        {printedScans.map((scan, idx) => (
          <button
            key={scan.id}
            onClick={() => setActiveTab(idx)}
            style={{
              padding: "9px 20px",
              borderRadius: "30px",
              border: activeTab === idx ? "1.5px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.25)",
              background: activeTab === idx ? "var(--grad-gold-metallic)" : "rgba(255, 255, 255, 0.06)",
              color: activeTab === idx ? "#2A0106" : "#FFF0C2",
              fontFamily: "var(--font-hindi-display)",
              fontSize: "0.95rem",
              fontWeight: activeTab === idx ? "bold" : "normal",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap"
            }}
          >
            {scan.title}
          </button>
        ))}
      </div>

      {/* Card Image Display Area */}
      <div
        style={{
          width: "100%",
          maxWidth: "880px",
          maxHeight: "72vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#160003",
          border: "2px solid #D4AF37",
          borderRadius: "14px",
          padding: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)"
        }}
      >
        {/* Previous Button */}
        <button
          onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : printedScans.length - 1))}
          style={{
            position: "absolute",
            left: "16px",
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.65)",
            border: "1px solid rgba(212, 175, 55, 0.5)",
            color: "#FFF0C2",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
          aria-label="Previous Scan"
        >
          <ChevronLeft size={24} />
        </button>

        {/* The Authentic Scan Image */}
        <img
          src={currentScan.src}
          alt={currentScan.title}
          style={{
            maxWidth: "100%",
            maxHeight: "68vh",
            objectFit: "contain",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)"
          }}
        />

        {/* Next Button */}
        <button
          onClick={() => setActiveTab((prev) => (prev < printedScans.length - 1 ? prev + 1 : 0))}
          style={{
            position: "absolute",
            right: "16px",
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.65)",
            border: "1px solid rgba(212, 175, 55, 0.5)",
            color: "#FFF0C2",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
          aria-label="Next Scan"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
