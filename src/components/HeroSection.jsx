import { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function HeroSection({ onOpenOriginalCard }) {
  const { couple, weddingTimestamp, events, venue } = WEDDING_DATA;
  const mainEvent = events.find(e => e.isHighlight) || events[0];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = weddingTimestamp - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [weddingTimestamp]);

  // Google Calendar URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("गरिमा संग राहुल - शुभ विवाह");
    const details = encodeURIComponent("देवाधिदेव बाबा श्री काशी विश्वनाथ जी की असीम अनुकम्पा से गरिमा एवं राहुल के परिणय सूत्र बन्धन समारोह।");
    const location = encodeURIComponent(venue.locationDetails);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261111T133000Z/20261111T213000Z&details=${details}&location=${location}`;
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: 'clamp(20px, 4vw, 40px) 0 clamp(40px, 6vw, 70px) 0',
        textAlign: 'center',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Shubh Vivah Calligraphy Badge */}
        <div style={{ marginBottom: '20px' }}>
          <div className="royal-badge">
            <Sparkles size={14} color="var(--gold-light)" />
            <span>शुभ परिणय उत्सव 2026</span>
            <Sparkles size={14} color="var(--gold-light)" />
          </div>
        </div>

        {/* Grand Hindi Couple Names */}
        <h1
          className="gold-text-gradient"
          style={{
            fontFamily: 'var(--font-hindi-display)',
            fontSize: 'clamp(2.6rem, 8vw, 4.8rem)',
            lineHeight: 1.15,
            margin: '0 0 10px 0',
            filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.8))'
          }}
        >
          गरिमा संग राहुल
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: 'var(--gold-light)',
            margin: '0 0 28px 0',
            fontWeight: 400
          }}
        >
          Together Forever in Love & Harmony
        </p>

        {/* Couple Portraits inside Royal Arched Frames */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(20px, 4vw, 44px)',
            margin: '0 auto 36px auto',
            maxWidth: '840px'
          }}
        >
          {/* Bride Jharokha */}
          <div
            style={{
              flex: '1 1 260px',
              maxWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(220px, 44vw, 270px)',
                height: 'clamp(290px, 58vw, 360px)',
                borderRadius: '135px 135px 24px 24px', // Royal arched dome shape
                border: '3px solid var(--gold-primary)',
                boxShadow: '0 18px 45px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.45)',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #4A030D 0%, #150003 100%)',
                padding: '5px'
              }}
            >
              <img
                src={couple.bride.photo}
                alt={couple.bride.fullName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  borderRadius: '128px 128px 20px 20px',
                  display: 'block'
                }}
              />
            </div>

            {/* Royal Placard Below Bride Photo */}
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <div
                className="royal-badge"
                style={{
                  marginBottom: '8px',
                  background: 'rgba(212, 175, 55, 0.18)',
                  border: '1px solid var(--gold-primary)',
                  color: 'var(--gold-light)'
                }}
              >
                वधू (दुल्हन)
              </div>
              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                  margin: '0 0 4px 0',
                  fontWeight: 700
                }}
              >
                {couple.bride.fullName}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-modern)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)'
                }}
              >
                ({couple.bride.designation})
              </div>
            </div>
          </div>

          {/* Central Hast Melap Heart Flourish */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '0 8px'
            }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--gold-gradient-radial)',
                border: '2px solid #FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)'
              }}
            >
              <Heart size={30} fill="#2A0108" color="#2A0108" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-hindi-display)',
                fontSize: '1.2rem',
                color: 'var(--gold-light)',
                fontWeight: 600
              }}
            >
              संग
            </span>
          </div>

          {/* Groom Jharokha */}
          <div
            style={{
              flex: '1 1 260px',
              maxWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(220px, 44vw, 270px)',
                height: 'clamp(290px, 58vw, 360px)',
                borderRadius: '135px 135px 24px 24px', // Royal arched dome shape
                border: '3px solid var(--gold-primary)',
                boxShadow: '0 18px 45px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.45)',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, #4A030D 0%, #150003 100%)',
                padding: '5px'
              }}
            >
              <img
                src={couple.groom.photo}
                alt={couple.groom.fullName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  borderRadius: '128px 128px 20px 20px',
                  display: 'block'
                }}
              />
            </div>

            {/* Royal Placard Below Groom Photo */}
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <div
                className="royal-badge"
                style={{
                  marginBottom: '8px',
                  background: 'rgba(212, 175, 55, 0.18)',
                  border: '1px solid var(--gold-primary)',
                  color: 'var(--gold-light)'
                }}
              >
                वर (दूल्हा)
              </div>
              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                  margin: '0 0 4px 0',
                  fontWeight: 700
                }}
              >
                {couple.groom.fullName}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-modern)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)'
                }}
              >
                ({couple.groom.designation})
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Date Highlight Card */}
        <div
          className="royal-card"
          style={{
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            padding: '24px 20px'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif-royal)',
              fontSize: '0.88rem',
              color: 'var(--gold-light)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '6px'
            }}
          >
            Auspicious Wedding Ceremony
          </div>
          <div
            className="gold-glow-text"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              margin: '0 0 6px 0',
              fontWeight: 700
            }}
          >
            11 नवम्बर 2026, बुधवार (रात्रि लग्नानुसार)
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'var(--cream-ivory)',
              fontSize: 'clamp(0.92rem, 2.4vw, 1.05rem)',
              fontFamily: 'var(--font-hindi-body)'
            }}
          >
            <MapPin size={16} color="var(--gold-primary)" />
            <span>ओम् मंगलम् लॉन, रमना (पुलिस चौकी के आगे), वाराणसी</span>
          </div>
        </div>

        {/* Countdown Timer to Shubh Vivah */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: '1.15rem',
              color: 'var(--gold-light)',
              marginBottom: '16px'
            }}
          >
            शुभ मुहूर्त की पावन उल्टी गिनती :
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(10px, 3vw, 20px)',
              flexWrap: 'wrap'
            }}
          >
            {[
              { label: 'दिन (Days)', value: timeLeft.days },
              { label: 'घंटे (Hours)', value: timeLeft.hours },
              { label: 'मिनट (Mins)', value: timeLeft.minutes },
              { label: 'सेकंड (Secs)', value: timeLeft.seconds }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(145deg, rgba(58, 4, 13, 0.9) 0%, rgba(28, 1, 5, 0.9) 100%)',
                  border: '1.5px solid var(--gold-border)',
                  borderRadius: '16px',
                  padding: 'clamp(12px, 3vw, 18px) clamp(16px, 4vw, 24px)',
                  minWidth: 'clamp(72px, 18vw, 100px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(212, 175, 55, 0.15)'
                }}
              >
                <div
                  className="gold-text-gradient"
                  style={{
                    fontFamily: 'var(--font-serif-royal)',
                    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                    fontWeight: 800,
                    lineHeight: 1
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-hindi-body)',
                    fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
                    color: 'var(--text-muted)',
                    marginTop: '6px'
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px'
          }}
        >
          <button onClick={onOpenOriginalCard} className="btn-royal-gold">
            <BookOpen size={18} />
            <span>मूल निमंत्रण पत्रिका देखें (View Printed Card)</span>
          </button>

          <a href="#events" className="btn-royal-outline">
            <Calendar size={18} />
            <span>मांगलिक कार्यक्रम (Schedule)</span>
          </a>

          <a href={createGoogleCalendarUrl()} target="_blank" rel="noopener noreferrer" className="btn-royal-outline">
            <span>📅 कैलेंडर में सेव करें</span>
          </a>
        </div>
      </div>
    </section>
  );
}
