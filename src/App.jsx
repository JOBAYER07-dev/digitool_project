import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Digitool from './Components/HeroSection/Digitool/Digitool';
import { ToastContainer } from 'react-toastify';


const fetchCards = async () => {
  const response = await fetch('/data.json');
  return response.json();
}

function App() {
  const cardsPromise = fetchCards();

  return (
    <>
      <Navbar />

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Digitool cardsPromise={cardsPromise} />
      </Suspense>

      <ToastContainer/>
    </>
  );
}

export default App
