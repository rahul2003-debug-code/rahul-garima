import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function RoyalHeader({ petalsEnabled, onTogglePetals }) {
  const { invitationHeader } = WEDDING_DATA;

  return (
    <header
      style={{
        padding: 'clamp(28px, 5vw, 48px) 0 16px 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Lord Ganesha Divine Motif */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}
        >
          {/* Ganesha SVG Icon with Gold Foil Luster */}
          <div
            className="animate-pulse-glow"
            style={{
              width: 'clamp(70px, 14vw, 86px)',
              height: 'clamp(70px, 14vw, 86px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #550614 0%, #290108 80%)',
              border: '2px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(212, 175, 55, 0.45)',
              marginBottom: '14px'
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="54"
              height="54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 8C43 8 38 13 38 20C38 25 41 29 45 31C35 34 26 43 26 55C26 68 36 78 48 80V87C48 88.6 49.3 90 51 90C52.7 90 54 88.6 54 87V80C66 78 76 68 76 55C76 43 67 34 57 31C61 29 64 25 64 20C64 13 59 8 50 8Z"
                fill="url(#goldGrad)"
                opacity="0.9"
              />
              <path
                d="M48 24C48 22 50 20 52 20C54 20 56 22 56 24V40H48V24Z"
                fill="#FFF4D0"
              />
              <circle cx="50" cy="18" r="3" fill="#D4AF37" />
              <path
                d="M50 42C44 42 36 46 36 55C36 63 43 69 50 71C57 69 64 63 64 55C64 46 56 42 50 42Z"
                stroke="url(#goldGrad)"
                strokeWidth="2.5"
              />
              <path
                d="M50 48V64"
                stroke="#FFE5A2"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF5D6" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8A6318" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ganesh Mantra */}
          <h1
            className="gold-glow-text"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
              letterSpacing: '1px',
              margin: '0 0 8px 0',
              fontWeight: 700
            }}
          >
            {invitationHeader.ganeshMantra}
          </h1>

          {/* Ganesh Doha */}
          <p
            style={{
              fontFamily: 'var(--font-hindi-body)',
              fontSize: 'clamp(0.95rem, 2.4vw, 1.2rem)',
              color: 'var(--gold-light)',
              maxWidth: '680px',
              margin: '0 auto 12px auto',
              lineHeight: 1.7,
              textShadow: '0 1px 4px rgba(0,0,0,0.8)',
              whiteSpace: 'pre-line'
            }}
          >
            {invitationHeader.ganeshDoha}
          </p>

          {/* Doha Meaning */}
          <p
            style={{
              fontFamily: 'var(--font-hindi-body)',
              fontSize: 'clamp(0.85rem, 2vw, 0.98rem)',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              maxWidth: '640px',
              margin: '0 auto 14px auto',
              lineHeight: 1.6
            }}
          >
            {invitationHeader.ganeshDohaMeaning}
          </p>

          {/* Welcome Text Pill */}
          <div
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid var(--gold-border)',
              borderRadius: '999px',
              padding: '6px 20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 auto'
            }}
          >
            <Sparkles size={14} color="#D4AF37" />
            <span
              style={{
                fontFamily: 'var(--font-hindi-body)',
                fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
                color: 'var(--cream-ivory)',
                fontWeight: 500
              }}
            >
              {invitationHeader.welcomeText}
            </span>
            <Sparkles size={14} color="#D4AF37" />
          </div>
        </div>

        {/* Petal Control */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
          <button
            onClick={onTogglePetals}
            style={{
              background: 'rgba(42, 1, 8, 0.6)',
              border: '1px solid var(--gold-border)',
              borderRadius: '999px',
              padding: '4px 14px',
              color: 'var(--gold-light)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span>{petalsEnabled ? '🌸 पुष्प वर्षा चालू' : '🌸 पुष्प वर्षा बंद'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
