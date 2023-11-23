import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Media = () => {
  const iconStyle = 'text-2xl text-red-600 transition duration-300 transform hover:text-designColor hover:scale-110';

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div className="text-center">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaInstagram />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4">
          <span className={`bannerIcon ${iconStyle}`}>
            <FaReact />
          </span>
          <span className={`bannerIcon ${iconStyle}`}>
            <DiJavascript1 />
          </span>
          <span className={`bannerIcon ${iconStyle}`}>
            <SiTailwindcss />
          </span>
          <span className={`bannerIcon ${iconStyle}`}>
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
