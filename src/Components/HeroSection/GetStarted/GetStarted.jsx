import React from 'react';
import user from '../../../assets/user.png';
import product from '../../../assets/package.png';
import rocket from '../../../assets/rocket.png';

const GetStarted = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="text-center mb-8 space-y-3">
        <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* 1st card */}
        <div className="relative bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
          {/* Step number badge */}

          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-medium">
            1
          </div>

          {/* Icon circle */}
          <div className="bg-purple-100 w-30 h-30  rounded-full  flex items-center justify-center mx-auto mb-5">
            <img className="" src={user} alt="User" />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-2 text-2xl">
            Create Account
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500">
            Sign up for free in seconds. No credit card <br />
            required to get started.
          </p>
        </div>
        {/* 2nd card */}

        <div className="relative bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
          {/* Step number badge */}

          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-medium">
            2
          </div>

          {/* Icon circle */}
          <div className="bg-purple-100 w-30 h-30  rounded-full  flex items-center justify-center mx-auto mb-5">
            <img className="" src={product} alt="Product" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Choose Products
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500">
            Browse our catalog and select the tools <br /> that fit your needs.
          </p>
        </div>
        {/* 3rd card */}
        <div className="relative bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
          {/* Step number badge */}

          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-medium">
            3
          </div>

          {/* Icon circle */}
          <div className="bg-purple-100 w-30 h-30  rounded-full  flex items-center justify-center mx-auto mb-5">
            <img className="" src={rocket} alt="Rocket" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Start Creating
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500">
            Download and start using your premium <br /> tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;