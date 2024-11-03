import { useState } from 'react'
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import PortfolioSection from "./components/PortfolioSection"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-terminal-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer/>
    </main>
  )
} 