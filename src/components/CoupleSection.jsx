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

          <p
            style={{
              fontFamily: 'var(--font-hindi-body)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--cream-ivory)',
              maxWidth: '740px',
              margin: '0 auto 16px auto',
              lineHeight: 1.8
            }}
          >
            {invitationBody.opening}
          </p>

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
            margin: '0 auto 30px auto'
          }}
        >
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
                  fontFamily: 'var(--font-serif-royal)',
                  color: 'var(--gold-light)',
                  fontSize: '1rem',
                  marginBottom: '6px'
                }}
              >
                {couple.groom.nameEn}
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '3px 14px',
                  borderRadius: '20px',
                  fontSize: '0.86rem',
                  color: 'var(--cream-ivory)'
                }}
              >
                <Award size={14} color="var(--gold-primary)" />
                <span>{couple.groom.designation}</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.98rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '16px',
                  padding: '14px'
                }}
              >
                <div style={{ color: 'var(--gold-light)', fontSize: '0.84rem', marginBottom: '4px', fontWeight: 600 }}>
                  माता एवं पिता :
                </div>
                <div style={{ color: '#FFF', fontWeight: 600 }}>
                  {couple.groom.parents}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '16px',
                  padding: '14px'
                }}
              >
                <div style={{ color: 'var(--gold-light)', fontSize: '0.84rem', marginBottom: '4px', fontWeight: 600 }}>
                  निवास स्थान :
                </div>
                <div style={{ color: 'var(--cream-ivory)', lineHeight: 1.5 }}>
                  {couple.groom.address}
                </div>
              </div>

              <div
                style={{
                  fontStyle: 'italic',
                  color: 'var(--gold-light)',
                  borderLeft: '2px solid var(--gold-primary)',
                  paddingLeft: '12px',
                  marginTop: '6px'
                }}
              >
                "{couple.groom.quote}"
              </div>
            </div>
          </div>

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
                  fontFamily: 'var(--font-serif-royal)',
                  color: 'var(--gold-light)',
                  fontSize: '1rem',
                  marginBottom: '6px'
                }}
              >
                {couple.bride.nameEn}
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '3px 14px',
                  borderRadius: '20px',
                  fontSize: '0.86rem',
                  color: 'var(--cream-ivory)'
                }}
              >
                <Award size={14} color="var(--gold-primary)" />
                <span>{couple.bride.designation}</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.98rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '16px',
                  padding: '14px'
                }}
              >
                <div style={{ color: 'var(--gold-light)', fontSize: '0.84rem', marginBottom: '4px', fontWeight: 600 }}>
                  माता एवं पिता :
                </div>
                <div style={{ color: '#FFF', fontWeight: 600 }}>
                  {couple.bride.parents}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '16px',
                  padding: '14px'
                }}
              >
                <div style={{ color: 'var(--gold-light)', fontSize: '0.84rem', marginBottom: '4px', fontWeight: 600 }}>
                  पते का विवरण :
                </div>
                <div style={{ color: 'var(--cream-ivory)', lineHeight: 1.5, fontSize: '0.92rem' }}>
                  <strong>वर्तमान:</strong> {couple.bride.currentAddress}<br />
                  <strong>स्थाई:</strong> {couple.bride.permanentAddress}
                </div>
              </div>

              <div
                style={{
                  fontStyle: 'italic',
                  color: 'var(--gold-light)',
                  borderLeft: '2px solid var(--gold-primary)',
                  paddingLeft: '12px',
                  marginTop: '6px'
                }}
              >
                "{couple.bride.quote}"
              </div>
            </div>
          </div>
        </div>

        {/* Formal Invitation Message Box */}
        <div
          className="royal-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '24px 28px'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-hindi-body)',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'var(--cream-ivory)',
              lineHeight: 1.8,
              margin: '0 0 14px 0'
            }}
          >
            {invitationBody.requestMessage}
          </p>
          <div
            className="gold-glow-text"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
              fontWeight: 700
            }}
          >
            {invitationBody.invitedBy}
          </div>
        </div>
      </div>
    </section>
  );
}
