import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, Heart, Sparkles, MessageCircle, CheckCircle } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function WishesRSVP() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState('yes');
  const [submitted, setSubmitted] = useState(false);

  const initialWishes = [
    {
      id: 1,
      name: 'मामा जी एवं परिवार',
      message: 'राहुल भैया और गरिमा भाभी को शुभ विवाह की अनंत मंगलकामनाएं! भगवान श्री गणेश जी का आशीर्वाद सदैव बना रहे।',
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
      const saved = localStorage.getItem('wedding_wishes_rahul_garima');
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
      localStorage.setItem('wedding_wishes_rahul_garima', JSON.stringify(updated));
    } catch (err) {
      console.log('save wish error:', err);
    }

    setSubmitted(true);

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

    setName('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="rsvp-wishes"
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
            <span>आशीर्वाद एवं उपस्थिति पुष्टि</span>
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
            शुभकामनाएं एवं RSVP
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
          {/* Wish / RSVP Form */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <h3
              className="gold-glow-text"
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: '1.5rem',
                margin: '0 0 16px 0',
                textAlign: 'center'
              }}
            >
              वर-वधू को आशीर्वाद प्रेषित करें
            </h3>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(40, 167, 69, 0.15)',
                  border: '1px solid #28a745',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <CheckCircle size={44} color="#28a745" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ color: '#FFF', margin: '0 0 6px 0', fontFamily: 'var(--font-hindi-display)' }}>
                  आपका आशीर्वाद स्वीकार हुआ!
                </h4>
                <p style={{ color: 'var(--cream-ivory)', margin: 0, fontSize: '0.9rem' }}>
                  नवदम्पति को आपकी स्नेहभरी शुभकामनाएं प्रेषित कर दी गई हैं।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-hindi-body)',
                      color: 'var(--gold-light)',
                      fontSize: '0.9rem',
                      marginBottom: '6px'
                    }}
                  >
                    आपका शुभ नाम * :
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="उदा. श्री सतीश चौबे"
                    className="royal-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-hindi-body)',
                      color: 'var(--gold-light)',
                      fontSize: '0.9rem',
                      marginBottom: '6px'
                    }}
                  >
                    क्या आप विवाह में पधार रहे हैं?
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <label
                      style={{
                        flex: 1,
                        background: attending === 'yes' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: attending === 'yes' ? '1.5px solid var(--gold-primary)' : '1px solid var(--gold-border)',
                        borderRadius: '12px',
                        padding: '10px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        color: attending === 'yes' ? 'var(--gold-light)' : 'var(--cream-ivory)',
                        fontSize: '0.88rem'
                      }}
                    >
                      <input
                        type="radio"
                        name="rsvp"
                        value="yes"
                        checked={attending === 'yes'}
                        onChange={() => setAttending('yes')}
                        style={{ display: 'none' }}
                      />
                      <span>🌸 जी हाँ, अवश्य आएंगे</span>
                    </label>

                    <label
                      style={{
                        flex: 1,
                        background: attending === 'wishes' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: attending === 'wishes' ? '1.5px solid var(--gold-primary)' : '1px solid var(--gold-border)',
                        borderRadius: '12px',
                        padding: '10px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        color: attending === 'wishes' ? 'var(--gold-light)' : 'var(--cream-ivory)',
                        fontSize: '0.88rem'
                      }}
                    >
                      <input
                        type="radio"
                        name="rsvp"
                        value="wishes"
                        checked={attending === 'wishes'}
                        onChange={() => setAttending('wishes')}
                        style={{ display: 'none' }}
                      />
                      <span>💐 केवल शुभाशीर्वाद</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-hindi-body)',
                      color: 'var(--gold-light)',
                      fontSize: '0.9rem',
                      marginBottom: '6px'
                    }}
                  >
                    शुभकामना संदेश :
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="वर-वधू के लिए अपना स्नेह एवं आशीर्वाद लिखें..."
                    className="royal-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-royal-gold" style={{ width: '100%' }}>
                  <Send size={16} />
                  <span>आशीर्वाद संदेश भेजें</span>
                </button>
              </form>
            )}
          </div>

          {/* Live Blessings Wall */}
          <div className="royal-card">
            <div className="corner-ornament-tr" />
            <div className="corner-ornament-bl" />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
                paddingBottom: '10px'
              }}
            >
              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: '1.4rem',
                  margin: 0
                }}
              >
                स्नेह एवं शुभाशीर्वाद स्तम्भ
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                {wishes.length} संदेश
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxHeight: '380px',
                overflowY: 'auto',
                paddingRight: '6px'
              }}
            >
              {wishes.map((w) => (
                <div
                  key={w.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '14px',
                    padding: '12px 14px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px'
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--gold-light)', fontSize: '0.95rem' }}>
                      {w.name}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {w.time}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-hindi-body)',
                      fontSize: '0.9rem',
                      color: 'var(--cream-ivory)',
                      lineHeight: 1.5
                    }}
                  >
                    "{w.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
