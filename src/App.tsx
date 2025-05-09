import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Chart from './components/Chart';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './globals.css';
import Whitepaper from './components/Whitepaper';
import Roadmap from './components/Roadmap';

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = 'VISTAMURAD ®';
  }, []);

  return (
    <div className="min-h-screen bg-purple-950">
      <Navbar />
      <main>
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
  );
}

export default App;