import { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Car, Train, Plane, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function VenueLocation() {
  const { venue } = WEDDING_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venue.name}, ${venue.locationDetails}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="venue"
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
            <span>स्थान एवं मार्ग निर्देश</span>
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
            वैवाहिक स्थल (Venue)
          </h2>

          <div className="sacred-divider">
            <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>📍</span>
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
          {/* Venue Details & Direction Box */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  background: 'var(--gold-gradient)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2A0108'
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <h3
                  className="gold-glow-text"
                  style={{
                    fontFamily: 'var(--font-hindi-display)',
                    fontSize: '1.5rem',
                    margin: 0
                  }}
                >
                  {venue.name}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-modern)',
                    fontSize: '0.85rem',
                    color: 'var(--gold-light)'
                  }}
                >
                  वाराणसी (काशी)
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '1.05rem',
                color: 'var(--cream-ivory)',
                lineHeight: 1.7,
                marginBottom: '16px'
              }}
            >
              <strong>पूर्ण पता :</strong> {venue.name}, {venue.locationDetails}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-hindi-body)',
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}
            >
              💡 <strong>पहचान/लैंडमार्क :</strong> {venue.directionsNote}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: 'auto' }}>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-gold"
                style={{ flex: '1 1 180px' }}
              >
                <Navigation size={18} />
                <span>GPS नेविगेशन शुरू करें</span>
              </a>

              <button
                onClick={handleCopyAddress}
                className="btn-royal-outline"
                style={{ flex: '1 1 140px' }}
              >
                {copied ? <Check size={18} color="#4ade80" /> : <Copy size={18} />}
                <span>{copied ? 'पता कॉपी हो गया!' : 'पता कॉपी करें'}</span>
              </button>
            </div>
          </div>

          {/* Transit & Travel Assistance */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <h4
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: '1.35rem',
                color: 'var(--gold-light)',
                marginBottom: '18px'
              }}
            >
              आवागमन एवं निकटतम स्टेशन :
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Train size={18} color="var(--gold-primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '0.95rem' }}>
                    वाराणसी कैंट (Varanasi Cantt / BSB)
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    लगभग 12-14 किमी (ऑटो, टैक्सी एवं कैब सीधे उपलब्ध)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Train size={18} color="var(--gold-primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '0.95rem' }}>
                    पं. दीनदयाल उपाध्याय जंक्शन (DDU / मुगलसराय)
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    लगभग 15-18 किमी की दूरी पर
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Plane size={18} color="var(--gold-primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '0.95rem' }}>
                    बाबतपुर हवाई अड्डा (Lal Bahadur Shastri Airport)
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    लगभग 35 किमी (रिंग रोड से सुगम मार्ग)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Car size={18} color="var(--gold-primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '0.95rem' }}>
                    पार्किंग एवं वाहन सुविधा
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    लॉन परिसर में पर्याप्त कार एवं बाइक पार्किंग उपलब्ध है।
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
