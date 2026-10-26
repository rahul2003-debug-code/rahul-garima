import { useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function OriginalCardModal({ isOpen, onClose }) {
  const { scannedCards } = WEDDING_DATA;
  const [activeTab, setActiveTab] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  const currentCard = scannedCards[activeTab];

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % scannedCards.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + scannedCards.length) % scannedCards.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(10, 0, 2, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      {/* Modal Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '740px',
          maxHeight: '92vh',
          background: 'linear-gradient(145deg, #2D0108 0%, #150003 100%)',
          border: '2px solid var(--gold-primary)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid var(--gold-border)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: '1.25rem',
                color: 'var(--gold-light)'
              }}
            >
              {currentCard.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)'
              }}
            >
              {currentCard.description}
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid var(--gold-border)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: 'var(--gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            padding: '10px 16px',
            background: 'rgba(0, 0, 0, 0.2)',
            overflowX: 'auto',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
          }}
        >
          {scannedCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => {
                setActiveTab(idx);
                setZoomLevel(1);
              }}
              style={{
                background:
                  activeTab === idx ? 'var(--gold-gradient)' : 'rgba(255, 255, 255, 0.06)',
                color: activeTab === idx ? '#2A0108' : 'var(--cream-ivory)',
                border: 'none',
                borderRadius: '999px',
                padding: '6px 16px',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-hindi-body)',
                fontWeight: activeTab === idx ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              पृष्ठ {idx + 1}: {card.id === 'cover' ? 'आवरण' : card.id === 'schedule' ? 'कार्यक्रम' : 'परिणय'}
            </button>
          ))}
        </div>

        {/* Card Image Display Area */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            minHeight: '360px',
            backgroundColor: '#0a0002'
          }}
        >
          <img
            src={currentCard.src}
            alt={currentCard.name}
            style={{
              maxWidth: '100%',
              maxHeight: '62vh',
              objectFit: 'contain',
              borderRadius: '12px',
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.25s ease',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.9)'
            }}
          />

          {/* Left / Right Nav Arrows */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(42, 1, 8, 0.75)',
              border: '1px solid var(--gold-border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-light)',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(42, 1, 8, 0.75)',
              border: '1px solid var(--gold-border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-light)',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Modal Footer Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            borderTop: '1px solid var(--gold-border)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleZoomIn}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--gold-border)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <ZoomIn size={15} />
              <span>बड़ा करें</span>
            </button>

            <button
              onClick={handleZoomOut}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--gold-border)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <ZoomOut size={15} />
              <span>छोटा करें</span>
            </button>
          </div>

          <div
            style={{
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-modern)'
            }}
          >
            {activeTab + 1} of {scannedCards.length}
          </div>
        </div>
      </div>
    </div>
  );
}
