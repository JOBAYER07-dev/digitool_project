import React, { use } from 'react';
import PriceCard from './PriceCard/PriceCard';

const PricingSection = ({ pricingPromise }) => {
  const priceData = use(pricingPromise);
  console.log(priceData);
  return (
    <div>
      <div className='text-center mb-12 space-y-3'>
        <h2 className='text-3xl font-bold'>Simple, Transparent Pricing</h2>
        <p className='text-gray-500'>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <PriceCard priceData={priceData} />
    </div>
  );
};

export default PricingSection;