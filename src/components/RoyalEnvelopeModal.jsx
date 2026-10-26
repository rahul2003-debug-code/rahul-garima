import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Music, MailOpen, Volume2 } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function RoyalEnvelopeModal({ isOpen, onClose, onOpenCard, guestName }) {
  const [isOpening, setIsOpening] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    setHasInteracted(true);

    // Trigger celebration confetti with golden foil & rose colors
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

    // Play wedding song immediately
    if (onOpenCard) {
      onOpenCard();
    }

    // Smooth transition into the main card
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
        backgroundColor: 'rgba(16, 0, 4, 0.94)',
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
      {/* Floating Background Stars & Shimmer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Royal Envelope Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '540px',
          perspective: '1200px'
        }}
      >
        {/* Envelope Outer Shell */}
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
          {/* Ornate Corner Elements */}
          <div className="corner-ornament-tr" style={{ borderColor: 'var(--gold-light)' }} />
          <div className="corner-ornament-bl" style={{ borderColor: 'var(--gold-light)' }} />

          {/* Top Sanskrit Blessing */}
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

          {/* Subtitle */}
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
            गरिमा संग राहुल
          </h2>

          {/* Decorative Divider */}
          <div className="sacred-divider" style={{ margin: '14px auto 22px auto' }}>
            <span style={{ fontSize: '1.2rem', color: 'var(--gold-primary)' }}>🪔</span>
          </div>

          {/* Personalized Recipient Tag (प्रतिष्ठा में) */}
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

          {/* Golden Wax Seal Button in Center */}
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
                width: 'clamp(74px, 16vw, 90px)',
                height: 'clamp(74px, 16vw, 90px)',
                borderRadius: '50%',
                background: 'var(--gold-gradient-radial)',
                border: '3px solid #FFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(212, 175, 55, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
                color: '#2A0108',
                transform: isOpening ? 'scale(1.3) rotate(45deg)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <Heart size={28} fill="#2A0108" color="#2A0108" />
              <span
                style={{
                  fontFamily: 'var(--font-serif-royal)',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  letterSpacing: '1px'
                }}
              >
                G & R
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-modern)',
                fontSize: '0.92rem',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600
              }}
            >
              <MailOpen size={16} />
              <span>कार्ड खोलने के लिए यहाँ टच करें</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                color: '#E0CDA9',
                opacity: 0.85
              }}
            >
              <Music size={13} />
              <span>(शुभ विवाह गीत एवं शहनाई के साथ)</span>
            </div>
          </div>

          {/* Action Open Button */}
          <div style={{ marginTop: '24px' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenEnvelope();
              }}
              className="btn-royal-gold"
              style={{ width: '100%', maxWidth: '320px' }}
            >
              <Volume2 size={18} />
              <span>निमंत्रण पत्र देखें (Open Card)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
