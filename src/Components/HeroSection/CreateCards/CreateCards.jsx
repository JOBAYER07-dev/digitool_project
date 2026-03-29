import React from 'react';
import Card from '../../Ui/Card';

const CreateCards = ({ cards }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map(card => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default CreateCards;