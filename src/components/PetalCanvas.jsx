import { useEffect, useRef } from "react";

export default function PetalCanvas({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Number of particles: fewer on mobile for optimal performance
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 18 : 36;
    const sparkleCount = isMobile ? 15 : 30;

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 10 + 10; // 10-20px
        this.speedY = Math.random() * 1.2 + 0.8;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 1.8;
        this.swing = Math.random() * 2 * Math.PI;
        this.swingSpeed = Math.random() * 0.02 + 0.01;
        this.opacity = Math.random() * 0.4 + 0.5;

        // Variety of petal colors: Royal Crimson, Deep Ruby, Gentle Rose Pink
        const colors = [
          "rgba(196, 27, 49, ",
          "rgba(142, 14, 34, ",
          "rgba(217, 72, 94, ",
          "rgba(168, 24, 43, "
        ];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.swing += this.swingSpeed;
        this.x += Math.sin(this.swing) * 1.2 + this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;

        if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = `${this.baseColor}${this.opacity})`;
        ctx.beginPath();
        // Delicate curved rose petal shape
        ctx.moveTo(0, -this.size / 2);
        ctx.bezierCurveTo(
          this.size / 2, -this.size / 2,
          this.size / 1.6, this.size / 2,
          0, this.size / 1.5
        );
        ctx.bezierCurveTo(
          -this.size / 1.6, this.size / 2,
          -this.size / 2, -this.size / 2,
          0, -this.size / 2
        );
        ctx.fill();

        // Subtle petal vein highlight
        ctx.strokeStyle = `rgba(255, 230, 200, ${this.opacity * 0.35})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 3);
        ctx.quadraticCurveTo(this.size * 0.1, 0, 0, this.size / 2);
        ctx.stroke();

        ctx.restore();
      }
    }

    class Sparkle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -10;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.7 + 0.3;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.pulse = Math.random() * Math.PI;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        this.pulse += this.pulseSpeed;
        this.y += this.speedY;
        if (this.y > height + 10) {
          this.reset(false);
        }
      }

      draw() {
        const currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
        ctx.save();
        ctx.fillStyle = `rgba(255, 220, 120, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const petals = Array.from({ length: petalCount }, () => new Petal());
    const sparkles = Array.from({ length: sparkleCount }, () => new Sparkle());

    let isDocumentVisible = true;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (isDocumentVisible) {
        ctx.clearRect(0, 0, width, height);
        sparkles.forEach((s) => {
          s.update();
          s.draw();
        });
        petals.forEach((p) => {
          p.update();
          p.draw();
        });
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 5,
        opacity: 0.95
      }}
      aria-hidden="true"
    />
  );
}
