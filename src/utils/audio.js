// Wedding Audio Player Manager
// Plays authentic Indian wedding songs with continuous looping and Web Audio fallback

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') + '/';

export const WEDDING_TRACKS = [
  {
    id: "milan",
    title: "मिलन अभी आधा अधूरा है",
    movie: "विवाह (Vivah)",
    src: `${BASE}audio/wedding-song.mp3`
  },
  {
    id: "shaadi",
    title: "हमारी शादी में अभी बाकी हैं...",
    movie: "विवाह (Vivah)",
    src: `${BASE}audio/hamari-shaadi-mein.mp3`
  }
];

class WeddingAudioPlayer {
  constructor() {
    this.audioElement = null;
    this.isPlaying = false;
    this.currentTrackIndex = 0;
    this.volume = 0.65;
    this.listeners = new Set();
  }

  init() {
    if (!this.audioElement && typeof window !== "undefined") {
      this.audioElement = new Audio();
      this.audioElement.src = WEDDING_TRACKS[this.currentTrackIndex].src;
      this.audioElement.loop = true;
      this.audioElement.volume = this.volume;
      this.audioElement.preload = "auto";

      this.audioElement.addEventListener("play", () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener("pause", () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener("ended", () => {
        // If track ends, loop again
        if (this.audioElement) {
          this.audioElement.currentTime = 0;
          this.audioElement.play().catch(() => {});
        }
      });
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((listener) =>
      listener({
        isPlaying: this.isPlaying,
        currentTrack: WEDDING_TRACKS[this.currentTrackIndex],
        volume: this.volume
      })
    );
  }

  getCurrentTrack() {
    return WEDDING_TRACKS[this.currentTrackIndex];
  }

  async play() {
    this.init();
    if (this.audioElement) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notify();
        return true;
      } catch (err) {
        console.warn("Audio play prevented by browser policy, waiting for user gesture:", err);
        return false;
      }
    }
    return false;
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  toggle() {
    this.init();
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  setTrack(index) {
    if (index >= 0 && index < WEDDING_TRACKS.length) {
      this.currentTrackIndex = index;
      if (this.audioElement) {
        const wasPlaying = this.isPlaying;
        this.audioElement.src = WEDDING_TRACKS[this.currentTrackIndex].src;
        this.audioElement.currentTime = 0;
        if (wasPlaying) {
          this.play();
        } else {
          this.notify();
        }
      }
    }
  }

  nextTrack() {
    const nextIdx = (this.currentTrackIndex + 1) % WEDDING_TRACKS.length;
    this.setTrack(nextIdx);
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
      this.notify();
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
