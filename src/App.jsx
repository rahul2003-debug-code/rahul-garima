import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlessingSection from "./components/BlessingSection";
import CoupleSection from "./components/CoupleSection";
import MangalikKaryakram from "./components/MangalikKaryakram";
import InvitationMessage from "./components/InvitationMessage";
import ShareSection from "./components/ShareSection";
import RsvpSection from "./components/RsvpSection";
import Footer from "./components/Footer";
import PetalCanvas from "./components/PetalCanvas";
import EnvelopeModal from "./components/EnvelopeModal";
import RoyalCardModal from "./components/RoyalCardModal";
import FloatingMusicPlayer from "./components/FloatingMusicPlayer";
import { CloudWaveDivider, CloudSilhouette } from "./components/CloudDividers";
import { weddingAudio } from "./utils/audio";

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  // Sync with audio manager state
  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((state) => {
      setIsAudioPlaying(state.isPlaying);
    });
    return () => unsubscribe();
  }, []);

  // Global user interaction handler to guarantee wedding song plays smoothly
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!weddingAudio.isPlaying) {
        weddingAudio.play();
      }
      // Remove after first interaction
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // Audio Toggle
  const handleToggleAudio = () => {
    weddingAudio.toggle();
  };

  const handleStartAudio = () => {
    weddingAudio.play();
  };

  const handleTogglePetals = () => {
    setPetalsEnabled((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Dreamy Drifting Cloud Silhouettes in Background */}
      <CloudSilhouette />

      {/* 3D Cinematic Opening Envelope Modal */}
      <EnvelopeModal
        isOpen={isEnvelopeOpen}
        onOpenComplete={() => setIsEnvelopeOpen(false)}
        onStartAudio={handleStartAudio}
      />

      {/* Falling Rose Petals & Golden Sparkles Canvas */}
      <PetalCanvas enabled={petalsEnabled} />

      {/* Royal Navbar */}
      <Navbar
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        petalsEnabled={petalsEnabled}
        onTogglePetals={handleTogglePetals}
      />

      <main>
        {/* Hero Section with Rahul & Garima Real Photographs */}
        <Hero />

        {/* Soft Cloud Wave Transition */}
        <CloudWaveDivider fill="#38040E" bg="transparent" />

        {/* Sacred Sanskrit Blessing (Ganesha Shloka) */}
        <BlessingSection />

        {/* Soft Cloud Wave Transition */}
        <CloudWaveDivider flip={true} fill="#2A0106" bg="transparent" />

        {/* Couple Lineage & Story (Rahul & Garima) */}
        <CoupleSection />

        {/* Soft Cloud Wave Transition */}
        <CloudWaveDivider fill="#36030C" bg="transparent" />

        {/* Mangalik Karyakram — 4 Auspicious Events with Varanasi Baraat Note */}
        <MangalikKaryakram />

        {/* Soft Cloud Wave Transition */}
        <CloudWaveDivider flip={true} fill="#2A0106" bg="transparent" />

        {/* Masterpiece Royal Digital Wedding Patrika (No scanned images) */}
        <InvitationMessage onOpenCardModal={() => setIsCardModalOpen(true)} />

        {/* Soft Cloud Wave Transition */}
        <CloudWaveDivider fill="#38040E" bg="transparent" />

        {/* Guest RSVP & Blessings Wall */}
        <RsvpSection />

        {/* Soft Cloud Wave Transition */}
        <CloudWaveDivider flip={true} fill="#260106" bg="transparent" />

        {/* WhatsApp Sharing & Family Contacts (8052797334, 8173087391) */}
        <ShareSection />
      </main>

      {/* Soft Cloud Wave Transition to Footer */}
      <CloudWaveDivider fill="#210005" bg="transparent" />

      {/* Closing Royal Blessing & Footer */}
      <Footer />

      {/* Floating Royal Wedding Song Music Widget */}
      <FloatingMusicPlayer />

      {/* Fullscreen Masterpiece Royal Card Modal */}
      <RoyalCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
