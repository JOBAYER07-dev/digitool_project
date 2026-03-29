import React from 'react';
import pic from '../../../assets/play.png';
import heroPic from '../../../assets/banner.png';
import { FaRegCircleDot } from 'react-icons/fa6';

const FirstHero = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center gap-10 my-10">
      <div className="space-y-10 ">
        <div class="bg-purple-200 text-purple-800 rounded-2xl text-center font-semibold w-full py-1">
          New: AI-Powered Tools Available
        </div>
        <h2 className="text-6xl font-bold text-center md:text-left">
          Supercharge Your <br /> Digital Workflow
        </h2>
        <p className="text-gray-500 text-center md:text-left">
          Access premium AI tools, design assets, templates, and productivity{' '}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className='flex justify-center '>
          <button className="btn btn-primary mr-5">Explore Products</button>
          <button className="btn btn-outline text-purple-600">
            <img src={pic} alt="Play" />
            Watch Demo
          </button>
        </div>
      </div>

      <div>
        <img src={heroPic} alt="Hero" />
      </div>
    </div>
  );
};

export default FirstHero;
