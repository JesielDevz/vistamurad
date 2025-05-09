import React from 'react';
/*import Metamask3DFox from './components/Metamask3DFox'*/
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import VistaUsdtChart from './components/Chart';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './globals.css';

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = 'VISTAMURAD | Decentralized Meme Coin';
  }, []);

  return (
    <div className="min-h-screen bg-purple-950">
      <Navbar />
      <main>
        <Hero />
        <ImageCarousel />
        <Tokenomics />
        <HowToBuy />
        <VistaUsdtChart />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;