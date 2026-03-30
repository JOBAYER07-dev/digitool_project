import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ selectedCard, setSelectedCard }) => {
 const calculateTotal = selectedCard.reduce(
   (total, card) => total + card.price,
   0,
  );
  
  const removeAllFromCart = () => {

    setSelectedCard([]);
    toast.info(`All products removed from cart!`);
  }
  
  const deleteFromCart = (id) => {

    setSelectedCard(selectedCard.filter(item => item.id !== id));
    toast.error(`Product removed from cart!`);
  }

  return (
    <div className="container mx-auto mt-10">
      {selectedCard.length === 0 ? (
        <div className="h-[400px] flex items-center justify-center flex-col gap-3">
          <h2 className="font-semibold text-xl text-gray-500">
            Your cart is empty!
          </h2>
          <p className="font-semibold">
            Please add some products to your cart before proceeding to checkout.
          </p>
        </div>
      ) : (
        selectedCard.map((card, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-6 p-5 rounded-2xl border mb-5
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
            "
          >
            <div className="flex items-center gap-8">
              <img
                className="w-auto h-[40px] rounded-lg"
                src={card.icon}
                alt={card.name}
              />
              <div>
                <h2 className="flex items-center gap-2 font-bold text-xl">
                  {card.name}
                </h2>
                <p className="font-semibold">${card.price}</p>
              </div>
            </div>
            <button
              onClick={() => deleteFromCart(card.id)}
              className="btn btn-primary"
            >
              <MdDelete />
            </button>
          </div>
        ))
      )}

      <div className="flex justify-between mx-5 md:mx-0">
        <h2 className="font-bold text-gray-500">TOTAL</h2>
        <h2 className="font-bold text-2xl">${calculateTotal.toFixed(2)}</h2>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={removeAllFromCart}
          className="btn btn-primary w-[800px] mt-5 rounded-3xl"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;