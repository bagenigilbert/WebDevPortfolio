import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
        title="SHOPPING CART RECOMMENDATION"
        des="Explore a seamless shopping experience! Recommend items to your friends and family effortlessly.Get started and make the shopping journey delightful!"
        src={projectOne}
        websiteLink="https://addcartapp.netlify.app"
        githubLink="https://github.com/gilbert2003-beep/my-mobile-phone-app"
      />

        <ProjectsCard
          title="PEOPLE COUNTER SYSTEM"
          des="Effortlessly count the number of people entering a space and keep track of the data.Accurate, efficient, and easy to use!"
          src={projectTwo}
          websiteLink="https://people-counter-entrance.netlify.app"
          githubLink="https://github.com/gilbert2003-beep/peoples-entrance-counter-"       
        />

        <ProjectsCard
          title="Bot Battlr"
          des="Challenge other bots in epic battles! Join the ultimate bot battle platform and test your bot's skills in strategic combat."
          src={projectThree}
          websiteLink="https://ip-02-code-challenge-bot-battlr-lfmb.vercel.app/"
          githubLink="https://github.com/gilbert2003-beep/IP02-Code-Challenge-Bot-Battlr"        />
        {/* Add more projects with their respective links */}
      </div>
    </section>
  );
};

export default Projects;
