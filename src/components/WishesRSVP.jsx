import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, Heart, Sparkles, MessageCircle, CheckCircle } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function WishesRSVP() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState('yes');
  const [submitted, setSubmitted] = useState(false);

  // Default sample warm blessings to populate the wall
  const initialWishes = [
    {
      id: 1,
      name: 'मामा जी एवं परिवार',
      message: 'गरिमा बिटिया और राहुल दामाद जी को शुभ विवाह की अनंत मंगलकामनाएं! देवाधिदेव महादेव का आशीर्वाद सदैव बना रहे।',
      attending: 'yes',
      time: 'हाल ही में'
    },
    {
      id: 2,
      name: 'अमित एवं मित्रगण',
      message: 'राहुल भाई और गरिमा भाभी को शादी की ढेर सारी बधाई! जीवन का यह नया सफर खुशियों से भरा रहे।',
      attending: 'yes',
      time: 'हाल ही में'
    }
  ];

  const [wishes, setWishes] = useState(initialWishes);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes_garima_rahul');
      if (saved) {
        setWishes(JSON.parse(saved));
      }
    } catch (e) {
      console.log('localStorage error:', e);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim() || 'शुभ विवाह की हार्दिक शुभकामनाएं! नवदम्पति का जीवन सदा खुशियों से महके।',
      attending,
      time: 'अभी-अभी'
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('wedding_wishes_garima_rahul', JSON.stringify(updated));
    } catch (err) {
      console.log('save wish error:', err);
    }

    setSubmitted(true);

    // Confetti celebration
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FF3366', '#FFD700', '#FFF']
      });
    } catch (err) {
      console.log('confetti error:', err);
    }

    // Reset fields
    setName('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="rsvp"
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
            <span>वर-वधू को शुभ आशीष</span>
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
            शुभकामनाएं एवं उपस्थिति (RSVP)
          </h2>

          <div className="sacred-divider">
            <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>💌</span>
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
          {/* Form Box */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <h3
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: '1.45rem',
                color: 'var(--gold-light)',
                marginBottom: '16px'
              }}
            >
              अपनी मंगलकामनाएं प्रेषित करें :
            </h3>

            {submitted && (
              <div
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid #25D366',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#4ade80',
                  fontSize: '0.9rem',
                  marginBottom: '18px'
                }}
              >
                <CheckCircle size={18} />
                <span>आपका शुभाशीर्वाद सफलतापूर्वक दर्ज हो गया है! धन्यवाद।</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-hindi-body)',
                    fontSize: '0.88rem',
                    color: 'var(--gold-light)',
                    marginBottom: '6px'
                  }}
                >
                  आपका नाम (Your Name) *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="उदा. राजेश कुमार वर्मा"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '12px',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-hindi-body)',
                    fontSize: '0.88rem',
                    color: 'var(--gold-light)',
                    marginBottom: '6px'
                  }}
                >
                  उपस्थिति की स्थिति (RSVP Status)
                </label>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: 'var(--cream-ivory)'
                    }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={attending === 'yes'}
                      onChange={() => setAttending('yes')}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <span>सपरिवार अवश्य पधारेंगे 🎉</span>
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: 'var(--cream-ivory)'
                    }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="wishes"
                      checked={attending === 'wishes'}
                      onChange={() => setAttending('wishes')}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <span>दूर से शुभ आशीष भेजते हैं ❤️</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-hindi-body)',
                    fontSize: '0.88rem',
                    color: 'var(--gold-light)',
                    marginBottom: '6px'
                  }}
                >
                  वर-वधू के लिए शुभकामना संदेश (Blessings)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="नवदम्पति को अपना मंगल आशीर्वाद एवं बधाई संदेश लिखें..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '12px',
                    color: '#FFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-royal-gold" style={{ marginTop: '4px' }}>
                <Send size={16} />
                <span>शुभकामनाएं भेजें (Submit Blessing)</span>
              </button>
            </form>
          </div>

          {/* Real-time Wishes Wall */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <Heart size={20} fill="var(--gold-primary)" color="var(--gold-primary)" />
              <h3
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: '1.45rem',
                  color: 'var(--gold-light)',
                  margin: 0
                }}
              >
                आशीर्वाद दीवार (Blessings Wall)
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxHeight: '360px',
                overflowY: 'auto',
                paddingRight: '6px'
              }}
            >
              {wishes.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '14px',
                    padding: '14px 16px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-hindi-display)',
                        fontSize: '1.05rem',
                        color: 'var(--gold-light)'
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {item.time}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-hindi-body)',
                      fontSize: '0.9rem',
                      color: 'var(--cream-ivory)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    "{item.message}"
                  </p>

                  <div
                    style={{
                      marginTop: '8px',
                      fontSize: '0.78rem',
                      color: item.attending === 'yes' ? '#4ade80' : 'var(--gold-light)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>{item.attending === 'yes' ? '🎉 अवश्य पधारेंगे' : '❤️ सादर शुभाशीर्वाद'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
