import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-lg">
          Explore more features and services I offer to enhance your digital experience.
        </p>
        <a
          href="#contact" // Replace with the actual link to your contact section
          className="mt-4 inline-block px-6 py-3 text-lg font-medium text-white bg-designColor rounded-md transition-colors duration-300 hover:bg-opacity-80 focus:outline-none focus:ring focus:border-designColor"
        >
          Get in Touch
        </a>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <p className="text-gray-500 text-lg">
          Follow me on social media for updates and more!
        </p>
        <div className="flex gap-4 ml-4">
          <a
            href="#facebook" // Replace with your Facebook profile link
            className="text-xl text-designColor hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#twitter" // Replace with your Twitter profile link
            className="text-xl text-designColor hover:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#linkedin" // Replace with your LinkedIn profile link
            className="text-xl text-designColor hover:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
