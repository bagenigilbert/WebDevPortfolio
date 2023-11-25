import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Media = () => {
  const iconStyle = 'text-3xl designColor transition duration-300 transform hover:text-designColor hover:scale-110';
  const containerStyle = 'text-center';

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div className={containerStyle}>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className={`bannerIcon ${iconStyle}`}>
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className={containerStyle}>
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
