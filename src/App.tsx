import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import ImageCarousel from './components/ImageCarousel';
import Tokenomics from './pages/Tokenomics';
import HowToBuy from './pages/HowToBuy';
import Chart from './pages/Chart';
import Community from './pages/Community';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import './index.css';
import Whitepaper from './pages/Whitepaper';
import Roadmap from './pages/Roadmap';
import { ThemeProvider } from './contexts/ThemeContext'; 

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = 'VISTAMURAD ®';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-purple-950">
        <Navbar />
        <main className="flex-1 px-2 sm:px-4 md:px-8">
          <Hero />
          <Whitepaper />
          <ImageCarousel />
          <Tokenomics />
          <HowToBuy />
          <Chart />
          <Roadmap />
          <Community />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
