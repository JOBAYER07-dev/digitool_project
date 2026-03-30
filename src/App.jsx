import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Digitool from './Components/HeroSection/Digitool/Digitool';
import { ToastContainer } from 'react-toastify';
import FirstHero from './Components/HeroSection/FirstHero/FirstHero';
import RatingSection from './Components/HeroSection/RatingSection/RatingSection';
import GetStarted from './Components/HeroSection/GetStarted/GetStarted';
import PricingSection from './Components/HeroSection/PricingSection/PricingSection';
import WorkFlow from './Components/HeroSection/WorkFlow/WorkFlow';
import Footer from './Components/Footer/Footer';


const fetchCards = async () => {
  const response = await fetch('/data.json');
  return response.json();
}

const cardsPromise = fetchCards();

const fetchPricing = async () => {
  const res = await fetch('/pricingData.json');
  return res.json();
}
const pricingPromise = fetchPricing();

function App() {
 const [selectedCard, setSelectedCard] = useState([]);

  return (
    <>
      <Navbar selectedCard={selectedCard} />
      <FirstHero />
      <RatingSection />

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Digitool
          cardsPromise={cardsPromise}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </Suspense>
      <GetStarted />

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <PricingSection pricingPromise={pricingPromise} />
      </Suspense>

      <WorkFlow />
      
      <Footer/>

      <ToastContainer />
    </>
  );
}

export default App
