import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Professional Coder.',
      'Full Stack Developer.',
      'UI Designer',
      'Passionate Learner.',
      'Code Artist.',
      'Frontend Wizard.',
      'Backend Magician.',
      'JavaScript Ninja.',
      'User Experience Guru.',
      'Continuous Learner.',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 items-center justify-center">
      <div className="flex flex-col items-center gap-5 text-center">
        <h4 className="text-lg font-normal text-gray-400">EXPLORING MY UNIVERSE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">BAGENI GILBERT</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="red" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-350">
          As a seasoned full-stack developer, I bring expertise in crafting seamless software solutions from concept to deployment. My skills span both the front-end, where I create engaging user interfaces, and the back-end, where I architect robust and scalable systems. I'm not just passionate about coding; I'm dedicated to delivering impactful and innovative solutions that elevate user experiences.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
