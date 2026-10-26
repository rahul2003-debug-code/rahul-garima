import { useState, useEffect } from 'react';
import { Music, MapPin, Phone, BookOpen, Share2 } from 'lucide-react';
import { weddingAudio } from '../utils/audio';
import { WEDDING_DATA } from '../config/weddingData';

export default function FloatingQuickBar({ onOpenOriginalCard }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsub = weddingAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });
    return () => unsub();
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'राहुल संग गरिमा - शुभ विवाह निमंत्रण',
        text: '11 नवम्बर 2026, बुधवार को ओम् मंगलम् लॉन, रमना, वाराणसी में आयोजित राहुल एवं गरिमा के शुभ विवाह में आप सपरिवार सादर आमंत्रित हैं।',
        url: window.location.href
      }).catch(() => {});
    } else {
      const el = document.getElementById('invite-generator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="mobile-quick-nav"
      style={{
        position: 'fixed',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9990,
        background: 'rgba(30, 2, 7, 0.92)',
        border: '1.5px solid var(--gold-border)',
        borderRadius: '999px',
        padding: '6px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(8px, 2.5vw, 16px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.3)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        maxWidth: '92vw'
      }}
    >
      <button
        onClick={() => weddingAudio.toggle()}
        style={{
          background: isPlaying ? 'var(--gold-gradient)' : 'rgba(255, 255, 255, 0.08)',
          color: isPlaying ? '#2A0108' : 'var(--gold-light)',
          border: 'none',
          borderRadius: '999px',
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'var(--font-modern)'
        }}
        title="संगीत चालू / बंद"
      >
        <Music size={14} />
        <span>{isPlaying ? 'गीत' : 'म्यूट'}</span>
      </button>

      <a
        href="#venue"
        style={{
          color: 'var(--cream-ivory)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.8rem',
          textDecoration: 'none',
          padding: '6px 8px',
          fontWeight: 500
        }}
      >
        <MapPin size={14} color="var(--gold-primary)" />
        <span>स्थान</span>
      </a>

      <button
        onClick={onOpenOriginalCard}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--gold-light)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.8rem',
          cursor: 'pointer',
          padding: '6px 8px',
          fontWeight: 600
        }}
      >
        <BookOpen size={14} color="var(--gold-primary)" />
        <span>पत्रिका</span>
      </button>

      <a
        href="#family"
        style={{
          color: 'var(--cream-ivory)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.8rem',
          textDecoration: 'none',
          padding: '6px 8px',
          fontWeight: 500
        }}
      >
        <Phone size={14} color="var(--gold-primary)" />
        <span>संपर्क</span>
      </a>

      <button
        onClick={handleShare}
        style={{
          background: '#25D366',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF',
          cursor: 'pointer'
        }}
        title="शेयर करें"
      >
        <Share2 size={15} />
      </button>
    </nav>
  );
}
