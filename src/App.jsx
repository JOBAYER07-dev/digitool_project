import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Digitool from './Components/HeroSection/Digitool/Digitool';
import { ToastContainer } from 'react-toastify';


const fetchCards = async () => {
  const response = await fetch('/data.json');
  return response.json();
}

const cardsPromise = fetchCards();

function App() {
 const [selectedCard, setSelectedCard] = useState([]);

  return (
    <>
      <Navbar selectedCard={selectedCard} />

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Digitool
          cardsPromise={cardsPromise}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App
