import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage'
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import PortfolioSection from "./components/PortfolioSection"
import SkillsSection from "./components/SkillsSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <Router>
      <main className="bg-terminal-bg">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <PortfolioSection />
              <SkillsSection />
              <ContactSection />
            </>
          } />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  )
} 