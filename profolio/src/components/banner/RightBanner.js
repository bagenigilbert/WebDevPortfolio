import React from 'react';
import { bannerImg } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative overflow-hidden">
      <style>
        {`
          @keyframes hoverAnimation {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-hover img {
            animation: hoverAnimation 4s infinite; 
        `}
      </style>

      <div className="w-[250px] h-[333px] lgl:w-[430px] lgl:h-[533px] z-10 overflow-hidden relative rounded-md shadow-md animate-hover">
        <img
          className="w-full h-full rounded-md transition-transform duration-500 ease-in-out"
          src={bannerImg}
          alt="bannerImg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 hover:opacity-70 transition-all duration-500 ease-in-out rounded-md"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Add any additional content or text here */}
        </div>
      </div>
    </div>
  );
};

export default RightBanner;
