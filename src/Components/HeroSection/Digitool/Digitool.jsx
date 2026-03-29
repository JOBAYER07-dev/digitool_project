import React, { use, useState } from 'react';
import CreateCards from '../CreateCards/CreateCards';
import Cart from '../Cart/Cart';

const Digitool = ({ cardsPromise, selectedCard, setSelectedCard }) => {
  const cards = use(cardsPromise);
  console.log(cards);

  const [selectedTab, setSelectedTab] = useState('products');
   
  return (
    <div className="container mx-auto mt-4 ">
      <div className="flex justify-center items-center gap-3 ">
        <button
          onClick={() => setSelectedTab('products')}
          className={`btn ${selectedTab === 'products' ? 'btn-primary' : ''}`}
        >
          PRODUCTS
        </button>

        <button
          onClick={() => setSelectedTab('cart')}
          className={`btn ${selectedTab === 'cart' ? 'btn-primary' : ''}`}
        >
          CART({selectedCard.length})
        </button>
      </div>

      <div className="mt-6">
        {selectedTab === 'products' && (
          <CreateCards
            cards={cards}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
        {selectedTab === 'cart' && <Cart
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />}
      </div>
    </div>
  );
};

export default Digitool;