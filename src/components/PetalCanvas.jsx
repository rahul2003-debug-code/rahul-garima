import { useEffect, useRef } from 'react';

export default function PetalCanvas({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number of particles suited for both mobile and desktop
    const petalCount = window.innerWidth < 768 ? 24 : 38;
    const sparkleCount = window.innerWidth < 768 ? 20 : 35;

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 9 + 8; // 8 to 17px
        this.speedY = Math.random() * 1.2 + 0.8;
        this.speedX = Math.random() * 1 - 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 1.5 - 0.75;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.01;
        this.colorType = Math.random(); // Rose red vs Marigold gold
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.008) * 0.8 + this.speedX;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.scale(Math.cos(this.flip), 1);

        // Gradient for realistic rose petal
        const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, this.size);
        if (this.colorType > 0.3) {
          // Deep Velvet Rose Petal
          grad.addColorStop(0, '#FF4D6D');
          grad.addColorStop(0.6, '#C9184A');
          grad.addColorStop(1, '#590D22');
        } else {
          // Golden Marigold Petal
          grad.addColorStop(0, '#FFE066');
          grad.addColorStop(0.7, '#F7B731');
          grad.addColorStop(1, '#D48806');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
        ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
        ctx.fill();
        ctx.restore();
      }
    }

    class Sparkle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -10;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedY = Math.random() * 0.6 + 0.4;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.alphaSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.y += this.speedY;
        this.alpha += Math.sin(this.y * 0.05) * 0.02;
        if (this.y > height + 10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, this.alpha));
        ctx.fillStyle = '#FFD700';
        ctx.shadowColor = '#FFEAA7';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const petals = Array.from({ length: petalCount }, () => new Petal());
    const sparkles = Array.from({ length: sparkleCount }, () => new Sparkle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < sparkles.length; i++) {
        sparkles[i].update();
        sparkles[i].draw();
      }

      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50
      }}
    />
  );
}
