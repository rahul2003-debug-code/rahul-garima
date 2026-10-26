import { useState, useEffect } from 'react';
import RoyalEnvelopeModal from './components/RoyalEnvelopeModal';
import PetalCanvas from './components/PetalCanvas';
import FloatingMusicPlayer from './components/FloatingMusicPlayer';
import RoyalHeader from './components/RoyalHeader';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import MangalikSchedule from './components/MangalikSchedule';
import ShayariCard from './components/ShayariCard';
import VenueLocation from './components/VenueLocation';
import FamilySection from './components/FamilySection';
import InviteGenerator from './components/InviteGenerator';
import WishesRSVP from './components/WishesRSVP';
import Footer from './components/Footer';
import FloatingQuickBar from './components/FloatingQuickBar';
import OriginalCardModal from './components/OriginalCardModal';
import { weddingAudio } from './utils/audio';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [isOriginalCardOpen, setIsOriginalCardOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  // Extract recipient name from URL query parameter (e.g. ?to=अतिथि+का+नाम)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('to');
      if (to) {
        setGuestName(decodeURIComponent(to));
      }
    } catch (e) {
      console.log('Error parsing guest name:', e);
    }
  }, []);

  const handleOpenCard = () => {
    weddingAudio.play();
  };

  const handleTogglePetals = () => {
    setPetalsEnabled((prev) => !prev);
  };

  const handleReplayEnvelope = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 3D Wax-Sealed Opening Envelope Ceremony */}
      <RoyalEnvelopeModal
        isOpen={isEnvelopeOpen}
        onClose={() => setIsEnvelopeOpen(false)}
        onOpenCard={handleOpenCard}
        guestName={guestName}
      />

      {/* Falling Velvet Rose Petals & Golden Sparkle Rain */}
      <PetalCanvas enabled={petalsEnabled} />

      {/* Floating Royal Music Player & Visualizer */}
      <FloatingMusicPlayer />

      {/* Main Wedding Invitation Card Content */}
      <main>
        {/* Sacred Ganesha & Kashi Vishwanath Invocation */}
        <RoyalHeader
          petalsEnabled={petalsEnabled}
          onTogglePetals={handleTogglePetals}
        />

        {/* Hero Section with Couple Portraits, Names & Live Countdown */}
        <HeroSection
          onOpenOriginalCard={() => setIsOriginalCardOpen(true)}
        />

        {/* Couple & Family Heritage Introduction */}
        <CoupleSection />

        {/* Auspicious Wedding Events Schedule (Shubh-Vivah & Vidaai) */}
        <MangalikSchedule />

        {/* Poetic Request Shayari */}
        <ShayariCard />

        {/* Venue, Maps & Direction Guidance */}
        <VenueLocation />

        {/* Family Blessings (Darshanabhilashi & Vineet) */}
        <FamilySection />

        {/* Personalized WhatsApp Invite Maker Tool */}
        <InviteGenerator />

        {/* Guest Blessings Wall & RSVP */}
        <WishesRSVP />

        {/* Closing Royal Footer */}
        <Footer onReplayEnvelope={handleReplayEnvelope} />
      </main>

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingQuickBar
        onOpenOriginalCard={() => setIsOriginalCardOpen(true)}
      />

      {/* Original Scanned Card Lightbox Modal */}
      <OriginalCardModal
        isOpen={isOriginalCardOpen}
        onClose={() => setIsOriginalCardOpen(false)}
      />
    </div>
  );
}
