import { X, Printer, Heart, Sparkles, Cloud } from "lucide-react";
import { WEDDING_DATA } from "../config/weddingData";

export default function RoyalCardModal({ isOpen, onClose }) {
  const { couple, invitationBody, familyDetails, events } = WEDDING_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-label="शाही डिजिटल विवाह पत्रिका"
      aria-modal="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1100,
        backgroundColor: "rgba(255, 248, 244, 0.97)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "clamp(12px, 3vh, 20px) 12px",
        overflowY: "auto"
      }}
    >
      {/* Top Floating Controls */}
      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#4E0E1B",
          marginBottom: "16px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "linear-gradient(135deg, #FFFFFF 0%, #FFF8F3 100%)",
          padding: "8px 18px",
          borderRadius: "40px",
          border: "1.5px solid #C99B3C",
          boxShadow: "0 6px 22px rgba(216, 125, 138, 0.15)"
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
            color: "#4E0E1B",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold"
          }}
        >
          <Cloud size={18} color="#C99B3C" />
          ॥ शाही डिजिटल विवाह पत्रिका ॥
        </span>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={handlePrint}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 16px",
              background: "linear-gradient(135deg, #FFF0E6 0%, #FCE8E6 100%)",
              border: "1px solid #C99B3C",
              color: "#4E0E1B",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontFamily: "var(--font-hindi-display)",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(201, 155, 60, 0.15)"
            }}
          >
            <Printer size={15} />
            प्रिंट / सेव करें
          </button>

          <button
            onClick={onClose}
            aria-label="बंद करें"
            style={{
              background: "#FFFFFF",
              border: "1px solid #C99B3C",
              color: "#4E0E1B",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
            }}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* The Masterpiece Cloud Card */}
      <div
        id="printable-royal-card"
        style={{
          width: "100%",
          maxWidth: "760px",
          background: "linear-gradient(165deg, #FFFFFF 0%, #FFF8F2 50%, #FFF0EB 100%)",
          border: "4px solid #E5C378",
          borderRadius: "60px 30px 60px 30px",
          padding: "clamp(24px, 5vw, 50px)",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.7), 0 0 45px rgba(232, 165, 152, 0.4)",
          position: "relative",
          textAlign: "center",
          color: "#2D151B",
          marginBottom: "40px"
        }}
      >
        {/* Inner Dashed Cloud Border */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            right: "14px",
            bottom: "14px",
            border: "1.5px dashed rgba(229, 195, 120, 0.65)",
            borderRadius: "50px 24px 50px 24px",
            pointerEvents: "none"
          }}
        />

        {/* Auspicious Ganesha Emblem */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              margin: "0 auto 10px auto",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FFF0E6 0%, #FCE8E6 100%)",
              border: "2px solid #C99B3C",
              padding: "3px",
              boxShadow: "0 4px 15px rgba(216, 125, 138, 0.2)"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C99B3C",
                fontSize: "1.8rem"
              }}
            >
              卐
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "1.2rem",
              color: "#B84D62",
              margin: "0 0 2px 0",
              fontWeight: "bold"
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "1.65rem",
              color: "#4E0E1B",
              margin: 0
            }}
          >
            ॥ मंगल आमंत्रण ॥
          </p>
        </div>

        {/* Sanskrit Blessing */}
        <div
          style={{
            background: "rgba(229, 195, 120, 0.15)",
            border: "1px solid rgba(229, 195, 120, 0.45)",
            borderRadius: "20px",
            padding: "16px 20px",
            margin: "18px auto",
            maxWidth: "600px"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
              color: "#5C030F",
              lineHeight: 1.6,
              margin: 0
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
          </p>
        </div>

        {/* Opening Salutation */}
        <p
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "1.3rem",
            color: "#8B1D3D",
            margin: "20px 0 12px 0",
            fontWeight: 600
          }}
        >
          {invitationBody.opening}
        </p>

        {/* Couple Cloud Portraits */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "26px",
            margin: "24px 0",
            flexWrap: "wrap"
          }}
        >
          {/* Groom Box */}
          <div style={{ textAlign: "center", maxWidth: "230px" }}>
            <div
              className="cloud-photo-frame"
              style={{
                width: "145px",
                height: "180px",
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
                fontSize: "1.35rem",
                color: "#3D0618",
                margin: "4px 0 2px 0"
              }}
            >
              चि० राहुल कुमार
            </h4>
            <p
              style={{
                fontFamily: "var(--font-hindi-text)",
                fontSize: "0.9rem",
                color: "#6B4E3D",
                margin: 0
              }}
            >
              सुपुत्र — {couple.groom.parentsHi}
            </p>
          </div>

          {/* Sang Pill */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FF758F 0%, #B23A48 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFEAA7",
                boxShadow: "0 4px 12px rgba(178, 58, 72, 0.4)"
              }}
            >
              <Heart size={20} fill="#FFEAA7" color="#FFEAA7" />
            </div>
            <span
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "1.15rem",
                color: "#8B1D3D",
                marginTop: "6px"
              }}
            >
              संग
            </span>
          </div>

          {/* Bride Box */}
          <div style={{ textAlign: "center", maxWidth: "230px" }}>
            <div
              className="cloud-photo-frame"
              style={{
                width: "145px",
                height: "180px",
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
                fontSize: "1.35rem",
                color: "#3D0618",
                margin: "4px 0 2px 0"
              }}
            >
              आयु० गरिमा वर्मा
            </h4>
            <p
              style={{
                fontFamily: "var(--font-hindi-text)",
                fontSize: "0.9rem",
                color: "#6B4E3D",
                margin: 0
              }}
            >
              सुपुत्री — {couple.bride.parentsHi}
            </p>
          </div>
        </div>

        {/* Invitation Message */}
        <p
          style={{
            fontFamily: "var(--font-hindi-text)",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "#3B2028",
            maxWidth: "640px",
            margin: "0 auto 16px auto"
          }}
        >
          {invitationBody.requestMessage}
        </p>

        <p
          style={{
            fontFamily: "var(--font-hindi-display)",
            fontSize: "1.2rem",
            color: "#8B1D3D",
            margin: "0 0 24px 0"
          }}
        >
          {invitationBody.invitedBy}
        </p>

        {/* 4 Mangalik Events Grid Ribbon */}
        <div
          style={{
            background: "linear-gradient(135deg, #FFF0E6 0%, #FCE8E6 100%)",
            borderRadius: "24px",
            padding: "18px 14px",
            color: "#4E0E1B",
            margin: "22px 0",
            border: "1.5px solid rgba(201, 155, 60, 0.45)",
            boxShadow: "0 4px 15px rgba(216, 125, 138, 0.1)"
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-hindi-display)",
              fontSize: "1.25rem",
              color: "#4E0E1B",
              margin: "0 0 12px 0",
              fontWeight: "bold"
            }}
          >
            ॥ मांगलिक कार्यक्रम ॥
          </h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
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
                  padding: "10px 6px",
                  border: evt.isMainWedding ? "1.5px solid #C99B3C" : "1px solid rgba(201, 155, 60, 0.25)",
                  boxShadow: "0 2px 6px rgba(216, 125, 138, 0.08)"
                }}
              >
                <div style={{ fontSize: "1.3rem", marginBottom: "4px" }}>{evt.symbol}</div>
                <div
                  style={{
                    fontFamily: "var(--font-hindi-display)",
                    fontSize: "1.05rem",
                    color: evt.isMainWedding ? "#B84D62" : "#4E0E1B",
                    fontWeight: "bold"
                  }}
                >
                  {evt.title}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#A6751C", marginTop: "2px", fontWeight: 600 }}>
                  {evt.date}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#725057", fontWeight: 500 }}>
                  {evt.day}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-hindi-text)",
              fontSize: "0.95rem",
              color: "#4E0E1B",
              marginTop: "12px",
              marginBottom: 0,
              fontWeight: 600
            }}
          >
            🚩 <strong>विशेष नोट:</strong> बारात हमारे निवास स्थान से वाराणसी के लिए सायं 3 बजे प्रस्थान करेगी।
          </p>
        </div>

        {/* Signatories Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "24px",
            textAlign: "center",
            borderTop: "2px solid rgba(229, 195, 120, 0.45)",
            paddingTop: "18px"
          }}
        >
          <div>
            <h5
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "1.25rem",
                color: "#8B1D3D",
                margin: "0 0 6px 0"
              }}
            >
              {familyDetails.darshanabhilashiTitle}
            </h5>
            <p
              style={{
                fontFamily: "var(--font-hindi-text)",
                fontSize: "0.95rem",
                color: "#4A2830",
                lineHeight: 1.65,
                margin: 0
              }}
            >
              {familyDetails.darshanabhilashiList.join(", ")}
            </p>
          </div>

          <div>
            <h5
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "1.25rem",
                color: "#8B1D3D",
                margin: "0 0 6px 0"
              }}
            >
              {familyDetails.vineetTitle}
            </h5>
            <p
              style={{
                fontFamily: "var(--font-hindi-display)",
                fontSize: "1.35rem",
                color: "#3D0618",
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
                color: "#5C3D2E",
                margin: "0 0 4px 0"
              }}
            >
              {familyDetails.vineetAddress}
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif-royal)",
                fontSize: "0.9rem",
                color: "#8B1D3D",
                fontWeight: 600,
                margin: 0
              }}
            >
              मो. 8052797334, 8173087391
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
