import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ card, selectedCard, setSelectedCard }) => {
  const isAdded = selectedCard.some(item => item.id === card.id);

  const handleBuy = () => {
    if (isAdded) {
      setSelectedCard(selectedCard.filter(item => item.id !== card.id));
      toast.error(`${card.name} removed from cart!`);
    } else {
      setSelectedCard([...selectedCard, card]);
      toast.success(`${card.name} added to cart!`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm p-10 mt-10 w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border hover:border-purple-400 cursor-pointer">
      <div className="card-body">
        <div className="flex justify-between">
          <img src={card.icon} alt="" />
          <span className="badge badge-xs badge-warning">{card.tag}</span>
        </div>

        <h2 className="text-3xl font-bold">{card.name}</h2>
        <h4 className="text-gray-500">{card.description}</h4>
        <span className="text-xl">
          {card.price}/{card.period}
        </span>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {card.features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={handleBuy}
            className={`btn w-full ${isAdded ? 'btn-success text-white' : 'btn-primary'} rounded-4xl`}
          >
            {isAdded ? 'ADDED TO CART' : 'BUY NOW'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
