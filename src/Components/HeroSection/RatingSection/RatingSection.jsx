import React from 'react';

const RatingSection = () => {
  return (
    <div className="container mx-auto flex justify-center items-center gap-20 bg-purple-600 p-12">
      <div>
        <h2 className="text-3xl font-bold text-white">50K+</h2>
        <p className="text-white/70">Active Users</p>
      </div>

      
      <div className="w-px h-12 bg-white/30"></div>

      <div>
        <h2 className="text-3xl font-bold text-white">200+</h2>
        <p className="text-white/70">Premium Tools</p>
      </div>

     
      <div className="w-px h-12 bg-white/30"></div>

      <div>
        <h2 className="text-3xl font-bold text-white">4.9</h2>
        <p className="text-white/70">Rating</p>
      </div>
    </div>
  );
};

export default RatingSection;