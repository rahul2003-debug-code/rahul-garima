import { Heart, ChevronUp, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function Footer({ onReplayEnvelope }) {
  const { family } = WEDDING_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        padding: '60px 0 100px 0',
        textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, #100003 60%, #080002 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Lord Ganesha Shubh Mantra */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{ fontSize: '1.8rem', color: 'var(--gold-primary)' }}>🪔</span>
        </div>

        <div
          className="gold-glow-text"
          style={{
            fontFamily: 'var(--font-hindi-display)',
            fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
            marginBottom: '8px'
          }}
        >
          ॥ सदा मंगलम् ॥
        </div>

        <p
          style={{
            fontFamily: 'var(--font-hindi-body)',
            fontSize: '0.98rem',
            color: 'var(--gold-super-light)',
            maxWidth: '540px',
            margin: '0 auto 16px auto',
            lineHeight: 1.7
          }}
        >
          आपकी गरिमामयी उपस्थिति नवयुगल के जीवन में सुख, समृद्धि एवं आनंद का संचार करेगी।
        </p>

        <div
          style={{
            fontFamily: 'var(--font-hindi-body)',
            fontSize: '0.92rem',
            color: 'var(--text-muted)',
            marginBottom: '24px'
          }}
        >
          विनीत : {family.vineet.name} एवं {family.darshanabhilashi[family.darshanabhilashi.length - 1]}
        </div>

        {/* Replay Envelope and Back to Top Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px'
          }}
        >
          <button onClick={onReplayEnvelope} className="btn-royal-outline" style={{ fontSize: '0.85rem' }}>
            <Sparkles size={15} />
            <span>✉️ लिफाफा दोबारा खोलें (Replay Opening)</span>
          </button>

          <button onClick={scrollToTop} className="btn-royal-outline" style={{ fontSize: '0.85rem' }}>
            <ChevronUp size={16} />
            <span>शीर्ष पर जाएं (Back to Top)</span>
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-modern)'
          }}
        >
          <span>गरिमा संग राहुल</span>
          <Heart size={14} fill="#FF4D6D" color="#FF4D6D" />
          <span>शुभ विवाह • 11 नवम्बर 2026</span>
        </div>
      </div>
    </footer>
  );
}
