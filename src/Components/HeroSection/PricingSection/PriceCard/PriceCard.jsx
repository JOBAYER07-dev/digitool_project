import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const PriceCard = ({ priceData }) => {
  return (
    <div className="px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto
      
      ">
        {priceData.map(price => {
          const isFeatured = price.isPopular === true;

          return (
            <div
              key={price.id}
              className={`rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                isFeatured
                  ? 'bg-purple-600'
                  : 'bg-base-100 border border-base-200'
              }`}
            >
              {/* Badge */}
              <div className="flex justify-center mb-6">
                {isFeatured && (
                  <span className="bg-amber-400 text-amber-900 text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Plan name & desc */}
              <h2
                className={`text-xl font-semibold mb-1 ${isFeatured ? 'text-white' : 'text-base-content'}`}
              >
                {price.name}
              </h2>
              <p
                className={`text-sm mb-5 ${isFeatured ? 'text-white/70' : 'text-gray-500'}`}
              >
                {price.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-0.5 mb-6">
                <span
                  className={`text-5xl font-bold leading-none ${isFeatured ? 'text-white' : 'text-base-content'}`}
                >
                  ${price.price}
                </span>
                <span
                  className={`text-sm ${isFeatured ? 'text-white/70' : 'text-gray-500'}`}
                >
                  /{price.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${isFeatured ? 'bg-white/20' : 'bg-base-200'}`}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {price.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm">
                    <MdOutlineDone
                      className={`text-base ${isFeatured ? 'text-white' : 'text-success'}`}
                    />
                    <span
                      className={isFeatured ? 'text-white/85' : 'text-gray-500'}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85 cursor-pointer border-none ${
                  isFeatured ? 'btn btn-primary' : 'btn  btn-neutral'
                }`}
              >
                {price.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceCard;
