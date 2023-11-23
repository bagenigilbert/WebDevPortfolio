import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-red-600 tracking-[4px]">2010 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Background</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Self-Taught Enthusiast"
            subTitle="Passionate Learner and Independent Thinker"
            result="Continuous Learning"
            des="Embarked on a self-directed educational journey, demonstrating a passion for learning and an unwavering commitment to continuous improvement. Acquired foundational knowledge and skills through independent study and real-world application."
          />
          <ResumeCard
            title="Moringa School of Software Engineering Graduate"
            subTitle="Excellence in Intensive Software Engineering Program"
            result="Distinction"
            des="Proud graduate of Moringa School, a distinguished institution for software engineering. Completed an intensive program that immersed me in the latest industry practices, fostering collaboration and innovation. Achieved distinction through hands-on projects and a comprehensive understanding of cutting-edge technologies."
          />
        </div>
      </div>

      {/* Part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-red-600 tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Journey</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Self-Taught Enthusiast"
            subTitle="Continuous Learning and Skill Enhancement"
            result="Passionate Learner"
            des="Dedicated to continuous learning and skill enhancement. Proactively engaged in self-learning, staying abreast of the latest technologies and industry trends. Passionate about pushing boundaries and embracing new challenges."
          />
          <ResumeCard
            title="Proficient in Various Technologies"
            subTitle="Versatile Developer"
            result="Expertise"
            des="Demonstrate proficiency in a wide range of technologies, including Django, Flask, React, and JavaScript. Adaptable and versatile, with a strong foundation in both back-end and front-end development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
