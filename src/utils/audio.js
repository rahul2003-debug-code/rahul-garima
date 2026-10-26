// Robust Audio Controller for Royal Wedding Web Invitation
import { WEDDING_DATA } from '../config/weddingData';

class WeddingAudioManager {
  constructor() {
    this.audio = null;
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.75;
    this.listeners = new Set();
    this.hasUserInteracted = false;
    this.initAudio();
  }

  initAudio() {
    if (typeof window === 'undefined') return;

    const tracks = WEDDING_DATA.musicTracks;
    if (!tracks || tracks.length === 0) return;

    this.audio = new Audio(tracks[this.currentTrackIndex].src);
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.preload = 'auto';

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.notifyListeners();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    this.audio.addEventListener('ended', () => {
      this.nextTrack();
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio playback error (could be source or autoplay restriction):', e);
      this.isPlaying = false;
      this.notifyListeners();
    });
  }

  play() {
    if (!this.audio) this.initAudio();
    if (!this.audio) return Promise.reject();

    this.hasUserInteracted = true;
    return this.audio.play().then(() => {
      this.isPlaying = true;
      this.notifyListeners();
    }).catch(err => {
      console.log('Play blocked or waiting for user interaction:', err);
      this.isPlaying = false;
      this.notifyListeners();
    });
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notifyListeners();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  switchTrack(index) {
    const tracks = WEDDING_DATA.musicTracks;
    if (index < 0 || index >= tracks.length) return;
    this.currentTrackIndex = index;

    const wasPlaying = this.isPlaying;
    if (this.audio) {
      this.audio.pause();
      this.audio.src = tracks[this.currentTrackIndex].src;
      this.audio.load();
    }

    if (wasPlaying || this.hasUserInteracted) {
      this.play();
    } else {
      this.notifyListeners();
    }
  }

  nextTrack() {
    const nextIndex = (this.currentTrackIndex + 1) % WEDDING_DATA.musicTracks.length;
    this.switchTrack(nextIndex);
  }

  toggleMute() {
    if (!this.audio) return;
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    this.notifyListeners();
  }

  getCurrentTrack() {
    return WEDDING_DATA.musicTracks[this.currentTrackIndex];
  }

  getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      currentTrack: this.getCurrentTrack(),
      currentTrackIndex: this.currentTrackIndex,
      tracks: WEDDING_DATA.musicTracks
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }
}

export const weddingAudio = new WeddingAudioManager();
