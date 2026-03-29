import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 shadow-sm flex justify-between">
      <div className="">
        <a className="btn btn-ghost bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text text-transparent font-bold text-3xl">
          DIGITOOL
        </a>
      </div>

      <div className="hidden md:flex">
        <ul className="flex gap-9 text-xl ">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="space-x-3 flex">
        <button className="btn text-2xl">
          <CiShoppingCart />
        </button>
        <button className="btn">LOGIN</button>
        <button className="btn btn-primary rounded-4xl">GET STARTED</button>
      </div>
    </div>
  );
};

export default Navbar;