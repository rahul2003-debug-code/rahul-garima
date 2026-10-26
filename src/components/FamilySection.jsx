import { Users, Heart, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function FamilySection() {
  const { family } = WEDDING_DATA;

  return (
    <section
      id="family"
      style={{
        position: 'relative',
        padding: 'clamp(40px, 6vw, 70px) 0',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="royal-badge" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} color="var(--gold-light)" />
            <span>पारिवारिक स्नेह एवं शुभाशीर्वाद</span>
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
            दर्शनाभिलाषी एवं विनीत
          </h2>

          <div className="sacred-divider">
            <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>💐</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(24px, 4vw, 36px)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Darshanabhilashi Card */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '999px',
                  padding: '4px 18px',
                  color: 'var(--gold-light)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-hindi-body)',
                  marginBottom: '10px'
                }}
              >
                <Users size={16} />
                <span>{family.darshanabhilashiTitle}</span>
              </div>
              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: '1.6rem',
                  margin: 0
                }}
              >
                {family.darshanabhilashiFamily}
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                margin: '20px 0'
              }}
            >
              {family.darshanabhilashi.map((name, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '12px',
                    padding: '8px 16px',
                    color: 'var(--cream-ivory)',
                    fontFamily: 'var(--font-hindi-body)',
                    fontSize: '0.94rem'
                  }}
                >
                  {name}
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                marginTop: '16px'
              }}
            >
              आप सभी का शुभाशीर्वाद नवदम्पति के लिए अनमोल उपहार है।
            </p>
          </div>

          {/* Vineet & Contacts Card */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '999px',
                  padding: '4px 18px',
                  color: 'var(--gold-light)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-hindi-body)',
                  marginBottom: '10px'
                }}
              >
                <Heart size={16} color="var(--gold-primary)" />
                <span>॥ विनीत ॥</span>
              </div>

              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: '1.8rem',
                  margin: '4px 0'
                }}
              >
                {family.vineet.name}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-hindi-body)',
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)'
                }}
              >
                {family.vineet.address}
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(212, 175, 55, 0.25)',
                paddingTop: '20px',
                marginTop: '16px'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: '1.1rem',
                  color: 'var(--gold-light)',
                  marginBottom: '14px',
                  textAlign: 'center'
                }}
              >
                किसी भी सहयोग / जानकारी हेतु संपर्क करें :
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {family.contacts.map((contact, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: '14px',
                      padding: '10px 16px'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: '#FFF', fontSize: '0.92rem' }}>
                        {contact.name}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>
                        {contact.label} : +91 {contact.number}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        href={`tel:${contact.number}`}
                        style={{
                          background: 'var(--gold-gradient)',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2A0108',
                          textDecoration: 'none'
                        }}
                        title="कॉल करें"
                      >
                        <Phone size={16} />
                      </a>

                      <a
                        href={`https://wa.me/91${contact.number}?text=${encodeURIComponent('नमस्ते! राहुल संग गरिमा के शुभ विवाह निमंत्रण के संबंध में संपर्क कर रहे हैं।')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#25D366',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFF',
                          textDecoration: 'none'
                        }}
                        title="व्हाट्सएप पर चैट करें"
                      >
                        <MessageSquare size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
