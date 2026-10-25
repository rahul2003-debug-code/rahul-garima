export function CloudWaveDivider({ flip = false, fill = "#2D030B", bg = "transparent" }) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "rotate(180deg)" : "none",
        backgroundColor: bg,
        position: "relative",
        zIndex: 4
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: "relative",
          display: "block",
          width: "calc(100% + 1.3px)",
          height: "clamp(30px, 4.5vw, 55px)"
        }}
      >
        <path
          d="M0,0 C150,85 320,15 480,60 C640,105 800,20 960,65 C1080,95 1160,40 1200,25 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function CloudSilhouette() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden"
      }}
      aria-hidden="true"
    >
      {/* Royal Luminous Cloud 1 */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "-120px",
          width: "clamp(260px, 45vw, 420px)",
          height: "clamp(130px, 22vw, 210px)",
          background: "radial-gradient(ellipse at center, rgba(148, 19, 37, 0.3) 0%, rgba(212, 175, 55, 0.08) 50%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(28px)",
          animation: "floatCloud1 45s linear infinite"
        }}
      />
      {/* Royal Luminous Cloud 2 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          right: "-140px",
          width: "clamp(300px, 50vw, 500px)",
          height: "clamp(150px, 25vw, 250px)",
          background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, rgba(120, 11, 28, 0.25) 50%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(32px)",
          animation: "floatCloud2 60s linear infinite"
        }}
      />
      {/* Royal Luminous Cloud 3 */}
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "20%",
          width: "clamp(240px, 40vw, 380px)",
          height: "clamp(120px, 20vw, 190px)",
          background: "radial-gradient(ellipse at center, rgba(148, 19, 37, 0.25) 0%, rgba(229, 195, 120, 0.08) 60%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(30px)",
          animation: "floatCloud1 52s linear infinite reverse"
        }}
      />
      <style>{`
        @keyframes floatCloud1 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(75vw) translateY(18px); }
          100% { transform: translateX(105vw) translateY(0); }
        }
        @keyframes floatCloud2 {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-65vw) translateY(-20px); }
          100% { transform: translateX(-105vw) translateY(0); }
        }
      `}</style>
    </div>
  );
}
