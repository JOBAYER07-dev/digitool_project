import React, { use } from 'react';
import CreateCards from '../CreateCards/CreateCards';

const Digitool = ({ cardsPromise }) => {
  const cards = use(cardsPromise);
  console.log(cards);
  return (
    <div className='container mx-auto mt-4 '>

      <div className='flex justify-center items-center gap-3 '>
        <button className="btn ">PRODUCT</button>
        <button className="btn ">CART(0)</button>
      </div>


      <CreateCards cards={cards} />
    </div>
  );
};

export default Digitool;