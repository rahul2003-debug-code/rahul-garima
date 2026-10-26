import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, MailOpen } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function RoyalEnvelopeModal({ isOpen, onClose, onOpenCard, guestName }) {
  const [isOpening, setIsOpening] = useState(false);
  const { invitationBody } = WEDDING_DATA;

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFD700', '#FF3366', '#FFFFFF', '#FFA07A']
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ['#D4AF37', '#FFD700', '#FF4D6D']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ['#D4AF37', '#FFD700', '#FF4D6D']
        });
      }, 300);
    } catch (e) {
      console.log('Confetti error:', e);
    }

    if (onOpenCard) {
      onOpenCard();
    }

    setTimeout(() => {
      onClose();
    }, 1100);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(10, 0, 2, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(1.08)' : 'scale(1)',
        transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: isOpening ? 'none' : 'auto'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          perspective: '1200px'
        }}
      >
        <div
          onClick={handleOpenEnvelope}
          style={{
            position: 'relative',
            background: 'linear-gradient(145deg, #38020B 0%, #200005 60%, #150003 100%)',
            border: '2px solid var(--gold-primary)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 45px rgba(212, 175, 55, 0.35)',
            padding: 'clamp(28px, 6vw, 44px) clamp(20px, 5vw, 36px)',
            cursor: 'pointer',
            textAlign: 'center',
            overflow: 'hidden',
            transform: isOpening ? 'rotateX(20deg) translateY(-20px)' : 'rotateX(0deg)',
            transition: 'transform 0.8s ease'
          }}
        >
          <div className="corner-ornament-tr" style={{ borderColor: 'var(--gold-light)' }} />
          <div className="corner-ornament-bl" style={{ borderColor: 'var(--gold-light)' }} />

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              background: 'rgba(212, 175, 55, 0.14)',
              border: '1px solid var(--gold-border)',
              borderRadius: '999px',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={16} color="#FBE5A2" />
            <span
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                color: 'var(--gold-light)',
                letterSpacing: '1px'
              }}
            >
              ॥ श्री गणेशाय नमः ॥
            </span>
            <Sparkles size={16} color="#FBE5A2" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.8rem, 4.5vw, 2.4rem)',
              color: 'var(--gold-light)',
              margin: '0 0 4px 0',
              fontWeight: 400
            }}
          >
            Royal Wedding Invitation
          </h3>

          <h2
            className="gold-text-gradient"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(2.2rem, 6.5vw, 3.2rem)',
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))'
            }}
          >
            {invitationBody.coupleNames}
          </h2>

          <div className="sacred-divider" style={{ margin: '14px auto 22px auto' }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--gold-primary)' }}>🪔</span>
          </div>

          <div
            style={{
              background: 'rgba(255, 251, 242, 0.08)',
              border: '1px dashed var(--gold-primary)',
              borderRadius: '16px',
              padding: '14px 18px',
              margin: '0 auto 28px auto',
              maxWidth: '420px',
              boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                marginBottom: '4px'
              }}
            >
              प्रतिष्ठा में / सस्नेह निमंत्रण :
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: 'clamp(1.15rem, 3.2vw, 1.45rem)',
                color: '#FFF',
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              श्रीयुत् {guestName || 'आदरणीय अतिथि'} सपरिवार
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #D4AF37 0%, #AA771C 65%, #63430A 100%)',
                boxShadow: '0 0 35px rgba(212, 175, 55, 0.7), inset 0 2px 6px rgba(255, 255, 255, 0.6)',
                border: '3px solid #FFF5D6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2A0108',
                transition: 'transform 0.3s ease'
              }}
            >
              <MailOpen size={32} />
            </div>

            <div
              className="gold-glow-text"
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: 'clamp(1.05rem, 2.6vw, 1.25rem)',
                letterSpacing: '1px'
              }}
            >
              ॥ निमंत्रण पत्र खोलने के लिए स्पर्श करें ॥
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
