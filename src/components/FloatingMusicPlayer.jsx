import { useState, useEffect } from 'react';
import { Play, Pause, Disc3, Volume2, VolumeX, SkipForward, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

export default function FloatingMusicPlayer() {
  const [audioState, setAudioState] = useState(weddingAudio.getState());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((state) => {
      setAudioState(state);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    weddingAudio.toggle();
  };

  const handleNextTrack = () => {
    weddingAudio.nextTrack();
  };

  const handleToggleMute = () => {
    weddingAudio.toggleMute();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'clamp(20px, 4vw, 30px)',
        right: 'clamp(16px, 4vw, 30px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {/* Expanded Track Controller Card */}
      {isExpanded && (
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(56, 4, 14, 0.95) 0%, rgba(30, 1, 6, 0.95) 100%)',
            border: '1.5px solid var(--gold-primary)',
            borderRadius: '20px',
            padding: '12px 18px',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.3)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            minWidth: '220px',
            animation: 'floatGentle 4s ease infinite'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-modern)',
                fontSize: '0.78rem',
                color: 'var(--gold-light)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              विवाह संगीत
            </span>
            <div style={{ display: 'flex', gap: '3px', height: '14px', alignItems: 'flex-end' }}>
              {audioState.isPlaying && (
                <>
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                  <div className="eq-bar" />
                </>
              )}
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-hindi-display)',
              fontSize: '0.96rem',
              color: '#FFF',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {audioState.currentTrack?.title}
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <button
              onClick={handleToggle}
              style={{
                background: 'var(--gold-gradient)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#2A0108'
              }}
              title={audioState.isPlaying ? 'Pause' : 'Play'}
            >
              {audioState.isPlaying ? <Pause size={15} /> : <Play size={15} fill="#2A0108" />}
            </button>

            <button
              onClick={handleNextTrack}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--gold-border)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--gold-light)'
              }}
              title="Next Track"
            >
              <SkipForward size={14} />
            </button>

            <button
              onClick={handleToggleMute}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--gold-border)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--gold-light)'
              }}
              title={audioState.isMuted ? 'Unmute' : 'Mute'}
            >
              {audioState.isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>
        </div>
      )}

      {/* Main Circular Floating Disc Button */}
      <div
        onClick={() => {
          if (!audioState.isPlaying) {
            handleToggle();
          } else {
            setIsExpanded(!isExpanded);
          }
        }}
        className={audioState.isPlaying ? 'animate-pulse-glow' : ''}
        style={{
          width: 'clamp(52px, 12vw, 60px)',
          height: 'clamp(52px, 12vw, 60px)',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4A030D 0%, #200004 100%)',
          border: '2px solid var(--gold-primary)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          transition: 'transform 0.3s ease'
        }}
        title="शादी का गीत (Music Player)"
      >
        {/* Spinning Vinyl Visual */}
        <div
          className={audioState.isPlaying ? 'animate-spin-slow' : ''}
          style={{
            position: 'absolute',
            inset: '3px',
            borderRadius: '50%',
            border: '1px dashed rgba(212, 175, 55, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Disc3 size={32} color="var(--gold-light)" />
        </div>

        {/* Center Indicator */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            background: 'var(--gold-gradient)',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2A0108'
          }}
        >
          {audioState.isPlaying ? <Music size={11} /> : <Play size={10} fill="#2A0108" />}
        </div>
      </div>
    </div>
  );
}
