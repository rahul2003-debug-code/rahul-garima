import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function ShayariCard() {
  const { shayariAagrah } = WEDDING_DATA.invitationBody;

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(20px, 4vw, 40px) 0',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          className="royal-card animate-float"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(65, 4, 15, 0.9) 0%, rgba(32, 1, 7, 0.9) 100%)',
            border: '2px dashed var(--gold-primary)',
            boxShadow: '0 15px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.35)',
            padding: 'clamp(28px, 5vw, 42px)'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--gold-light)',
              fontFamily: 'var(--font-hindi-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '16px'
            }}
          >
            <Sparkles size={18} color="var(--gold-primary)" />
            <span>{shayariAagrah.title}</span>
            <Sparkles size={18} color="var(--gold-primary)" />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.2rem, 3.4vw, 1.65rem)',
              color: '#FFF',
              lineHeight: 1.6,
              marginBottom: '10px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            "{shayariAagrah.line1}
          </div>

          <div
            className="gold-glow-text"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.3rem, 3.8vw, 1.85rem)',
              lineHeight: 1.6,
              fontWeight: 700
            }}
          >
            {shayariAagrah.line2}"
          </div>

          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Heart size={20} fill="var(--gold-primary)" color="var(--gold-primary)" />
            <span
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.4rem',
                color: 'var(--gold-light)'
              }}
            >
              With Love & Warm Regards
            </span>
            <Heart size={20} fill="var(--gold-primary)" color="var(--gold-primary)" />
          </div>
        </div>
      </div>
    </section>
  );
}
