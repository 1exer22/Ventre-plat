import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ContentPreview from './components/ContentPreview';
import Testimonials from './components/Testimonials';
import AuthorSection from './components/AuthorSection';
import OfferSection from './components/OfferSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import CGV from './pages/CGV';
import SuccessPage from './pages/SuccessPage';

const HomePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ContentPreview />
    <Testimonials />
    <OfferSection />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;