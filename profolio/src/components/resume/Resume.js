import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';

const ResumeButton = ({ onClick, isActive, text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
    className={`${
      isActive
        ? 'border-designColor bg-designColor text-white'
        : 'border-transparent text-white font-semibold'
    } resumeButton focus:outline-none focus:ring focus:border-designColor hover:bg-designColor-dark transition-all duration-300 px-4 py-2 rounded-full`}
  >
    {text}
  </motion.button>
);

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const handleButtonClick = (dataSetter) => {
    setEducationData(false);
    setSkillData(false);
    setExperienceData(false);
    setAchievementData(false);
    dataSetter(true);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="flex justify-center items-center mt-4">
        <ResumeButton
          onClick={() => handleButtonClick(setEducationData)}
          isActive={educationData}
          text="Education"
        />
        <ResumeButton
          onClick={() => handleButtonClick(setSkillData)}
          isActive={skillData}
          text="Professional Skills"
        />
        <ResumeButton
          onClick={() => handleButtonClick(setExperienceData)}
          isActive={experienceData}
          text="Experience"
        />
        <ResumeButton
          onClick={() => handleButtonClick(setAchievementData)}
          isActive={achievementData}
          text="Achievements"
        />
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
