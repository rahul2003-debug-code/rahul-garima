import { Heart, Sparkles, MapPin, Award } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function CoupleSection() {
  const { couple, invitationBody } = WEDDING_DATA;

  return (
    <section
      id="couple-details"
      style={{
        position: 'relative',
        padding: 'clamp(40px, 6vw, 70px) 0',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="royal-badge" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} color="var(--gold-light)" />
            <span>वर एवं वधू परिचय</span>
            <Sparkles size={14} color="var(--gold-light)" />
          </div>

          <h2
            className="gold-text-gradient"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              margin: '0 0 10px 0'
            }}
          >
            {invitationBody.bondTitle}
          </h2>

          <div className="sacred-divider">
            <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>🌺</span>
          </div>
        </div>

        {/* Two-Column Side-by-Side Heritage Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(24px, 4vw, 36px)',
            maxWidth: '1000px',
            margin: '0 auto 40px auto'
          }}
        >
          {/* Bride's Details Card */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '999px',
                  padding: '4px 18px',
                  color: 'var(--gold-light)',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-hindi-body)',
                  marginBottom: '10px'
                }}
              >
                {couple.bride.badge}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-hindi-body)',
                  color: 'var(--gold-primary)',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                {couple.bride.title}
              </div>

              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  margin: '4px 0 6px 0'
                }}
              >
                {couple.bride.fullName}
              </h3>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  color: '#FFF',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-modern)'
                }}
              >
                <Award size={15} color="var(--gold-primary)" />
                <span>{couple.bride.designation}</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.95rem',
                color: 'var(--cream-ivory)',
                borderTop: '1px solid rgba(212, 175, 55, 0.25)',
                paddingTop: '18px'
              }}
            >
              <div>
                <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>सुपौत्री : </span>
                <span>{couple.bride.grandParents}</span>
              </div>

              <div>
                <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>सुपुत्री : </span>
                <span>{couple.bride.parents}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>निवास : </span>
                  <span>{couple.bride.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Groom's Details Card */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '999px',
                  padding: '4px 18px',
                  color: 'var(--gold-light)',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-hindi-body)',
                  marginBottom: '10px'
                }}
              >
                {couple.groom.badge}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-hindi-body)',
                  color: 'var(--gold-primary)',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                {couple.groom.title}
              </div>

              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  margin: '4px 0 6px 0'
                }}
              >
                {couple.groom.fullName}
              </h3>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  color: '#FFF',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-modern)'
                }}
              >
                <Award size={15} color="var(--gold-primary)" />
                <span>{couple.groom.designation}</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.95rem',
                color: 'var(--cream-ivory)',
                borderTop: '1px solid rgba(212, 175, 55, 0.25)',
                paddingTop: '18px'
              }}
            >
              <div>
                <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>सुपौत्र : </span>
                <span>{couple.groom.grandParents}</span>
              </div>

              <div>
                <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>सुपुत्र : </span>
                <span>{couple.groom.parents}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>निवास : </span>
                  <span>{couple.groom.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Invitation Message Box */}
        <div
          className="royal-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'linear-gradient(145deg, rgba(50, 3, 11, 0.85) 0%, rgba(24, 0, 4, 0.85) 100%)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-hindi-body)',
              fontSize: 'clamp(1rem, 2.6vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'var(--gold-super-light)',
              letterSpacing: '0.3px'
            }}
          >
            {invitationBody.requestMessage}
          </div>
        </div>
      </div>
    </section>
  );
}
