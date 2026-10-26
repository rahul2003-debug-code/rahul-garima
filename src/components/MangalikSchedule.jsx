import { Calendar, Clock, MapPin, Sparkles, AlertCircle, Compass, Download } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function MangalikSchedule() {
  const { events, venue, invitationBody } = WEDDING_DATA;

  const createCalendarUrl = (ev) => {
    const title = encodeURIComponent(ev.calendarEvent.title);
    const dates = `${ev.calendarEvent.start}/${ev.calendarEvent.end}`;
    const location = encodeURIComponent(ev.calendarEvent.location);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&location=${location}`;
  };

  const downloadIcs = (ev) => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rahul Kumar Wedding//HI',
      'BEGIN:VEVENT',
      `SUMMARY:${ev.calendarEvent.title}`,
      `DESCRIPTION:${ev.description}`,
      `LOCATION:${ev.calendarEvent.location}`,
      `DTSTART:${ev.calendarEvent.start}`,
      `DTEND:${ev.calendarEvent.end}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${ev.id}-rahul-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        {/* 4 Auspicious Schedule Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(20px, 3.5vw, 30px)',
            maxWidth: '1100px',
            margin: '0 auto 36px auto'
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
                  ? 'linear-gradient(145deg, rgba(65, 5, 18, 0.95) 0%, rgba(32, 2, 8, 0.95) 100%)'
                  : 'var(--royal-maroon-card)',
                boxShadow: ev.isHighlight
                  ? '0 15px 40px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.4)'
                  : '0 8px 25px rgba(0,0,0,0.6)'
              }}
            >
              <div className="corner-ornament-tr" />
              <div className="corner-ornament-bl" />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: ev.isHighlight ? 'var(--gold-gradient)' : 'rgba(212, 175, 55, 0.15)',
                    color: ev.isHighlight ? '#2A0108' : 'var(--gold-light)',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  <Sparkles size={12} />
                  <span>{ev.badge}</span>
                </div>
                <span style={{ fontSize: '1.4rem' }}>{ev.symbol}</span>
              </div>

              <h3
                className="gold-glow-text"
                style={{
                  fontFamily: 'var(--font-hindi-display)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 1.9rem)',
                  margin: '0 0 12px 0'
                }}
              >
                {ev.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontFamily: 'var(--font-hindi-body)',
                  fontSize: '0.95rem',
                  color: 'var(--cream-ivory)',
                  marginBottom: '14px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={17} color="var(--gold-primary)" />
                  <span style={{ fontWeight: 600, color: 'var(--gold-light)' }}>
                    {ev.date}, {ev.day}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={17} color="var(--gold-primary)" />
                  <span>{ev.time}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin size={17} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{ev.location}</span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-hindi-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}
              >
                {ev.description}
              </p>

              {ev.specialNotice && (
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px dashed var(--gold-primary)',
                    borderRadius: '12px',
                    padding: '8px 12px',
                    marginBottom: '16px',
                    color: 'var(--gold-light)',
                    fontSize: '0.86rem',
                    fontFamily: 'var(--font-hindi-display)',
                    fontWeight: 600
                  }}
                >
                  🚨 {ev.specialNotice}
                </div>
              )}

              <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                <a
                  href={createCalendarUrl(ev)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-royal-outline"
                  style={{ flex: 1, fontSize: '0.82rem', padding: '8px 10px' }}
                >
                  <Calendar size={14} />
                  <span>Google Calendar</span>
                </a>

                <button
                  onClick={() => downloadIcs(ev)}
                  className="btn-royal-outline"
                  style={{ fontSize: '0.82rem', padding: '8px 10px' }}
                  title="Apple / Outlook (.ICS)"
                >
                  <Download size={14} />
                  <span>.ICS</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Baraat Departure Notice Banner */}
        <div
          className="royal-card animate-pulse-glow"
          style={{
            maxWidth: '820px',
            margin: '0 auto 36px auto',
            textAlign: 'center',
            border: '2px solid var(--gold-primary)',
            background: 'linear-gradient(135deg, rgba(70, 5, 18, 0.95) 0%, rgba(35, 2, 8, 0.95) 100%)',
            padding: '20px 24px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--gold-gradient)',
              color: '#2A0108',
              fontFamily: 'var(--font-hindi-display)',
              fontWeight: 700,
              padding: '4px 18px',
              borderRadius: '999px',
              fontSize: '0.9rem',
              marginBottom: '10px'
            }}
          >
            <AlertCircle size={16} />
            <span>विशेष बारात सूचना</span>
          </div>

          <div
            className="gold-glow-text"
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
              lineHeight: 1.6,
              fontWeight: 700
            }}
          >
            “{invitationBody.specialNote}”
          </div>
        </div>

        {/* Venue Highlight Banner */}
        <div
          className="royal-card"
          style={{
            maxWidth: '820px',
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
              fontSize: 'clamp(0.95rem, 2.4vw, 1.15rem)',
              color: 'var(--cream-ivory)',
              maxWidth: '720px',
              margin: '0 auto 18px auto',
              lineHeight: 1.6
            }}
          >
            {venue.venueNote}
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
