import { Calendar, Clock, MapPin, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function MangalikSchedule() {
  const { events, venue } = WEDDING_DATA;

  const createCalendarUrl = (ev) => {
    const title = encodeURIComponent(ev.calendarEvent.title);
    const dates = `${ev.calendarEvent.start}/${ev.calendarEvent.end}`;
    const location = encodeURIComponent(ev.calendarEvent.location);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&location=${location}`;
  };

  return (
    <section
      id="events"
      style={{
        position: 'relative',
        padding: 'clamp(40px, 6vw, 70px) 0',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="royal-badge" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} color="var(--gold-light)" />
            <span>शुभ मुहूर्त एवं मांगलिक कार्यक्रम</span>
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
            मांगलिक कार्यक्रम
          </h2>

          <div className="sacred-divider">
            <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>🪔</span>
          </div>
        </div>

        {/* Schedule Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(20px, 4vw, 32px)',
            maxWidth: '940px',
            margin: '0 auto 40px auto'
          }}
        >
          {events.map((ev) => (
            <div
              key={ev.id}
              className="royal-card"
              style={{
                border: ev.isHighlight
                  ? '2px solid var(--gold-primary)'
                  : '1px solid var(--gold-border)',
                background: ev.isHighlight
                  ? 'linear-gradient(145deg, rgba(62, 5, 17, 0.9) 0%, rgba(30, 2, 7, 0.9) 100%)'
                  : 'var(--royal-maroon-card)'
              }}
            >
              <div className="corner-ornament-tr" />
              <div className="corner-ornament-bl" />

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: ev.isHighlight ? 'var(--gold-gradient)' : 'rgba(212, 175, 55, 0.15)',
                  color: ev.isHighlight ? '#2A0108' : 'var(--gold-light)',
                  padding: '4px 16px',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}
              >
                <Sparkles size={13} />
                <span>{ev.badge}</span>
              </div>

              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: 'clamp(1.6rem, 3.8vw, 2.1rem)',
                  margin: '0 0 12px 0'
                }}
              >
                {ev.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontFamily: 'var(--font-hindi-body)',
                  fontSize: '1rem',
                  color: 'var(--cream-ivory)',
                  marginBottom: '18px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={18} color="var(--gold-primary)" />
                  <span style={{ fontWeight: 600, color: 'var(--gold-light)' }}>
                    {ev.date}, {ev.day}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} color="var(--gold-primary)" />
                  <span>{ev.time}</span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-hindi-body)',
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '22px'
                }}
              >
                {ev.description}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href={createCalendarUrl(ev)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-outline"
                  style={{ width: '100%', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} />
                  <span>Google Calendar में जोड़ें</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Venue Highlight Banner */}
        <div
          className="royal-card"
          style={{
            maxWidth: '940px',
            margin: '0 auto',
            textAlign: 'center',
            border: '2px solid var(--gold-primary)',
            background: 'linear-gradient(145deg, rgba(50, 4, 13, 0.95) 0%, rgba(20, 1, 4, 0.95) 100%)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif-royal)',
              fontSize: '0.9rem',
              color: 'var(--gold-light)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '6px'
            }}
          >
            वैवाहिक स्थल
          </div>

          <h3
            className="gold-text-gradient"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              margin: '0 0 8px 0'
            }}
          >
            {venue.name}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-hindi-body)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--cream-ivory)',
              maxWidth: '720px',
              margin: '0 auto 20px auto',
              lineHeight: 1.6
            }}
          >
            समस्त वैवाहिक कार्यक्रम <strong>{venue.name}</strong>, {venue.locationDetails} से सम्पन्न होगा।
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-gold"
            >
              <Compass size={18} />
              <span>Google Maps पर लोकेशन देखें (Get Directions)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
