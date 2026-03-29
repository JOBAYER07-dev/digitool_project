import React from 'react';
import { MdDelete } from 'react-icons/md';

const Cart = ({ selectedCard }) => {
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
            className="flex justify-between items-center gap-6 p-5 rounded-2xl border mb-5"
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
                <p className="font-semibold">{card.price}</p>
              </div>
            </div>
            <button className="btn btn-primary">

              <MdDelete />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;