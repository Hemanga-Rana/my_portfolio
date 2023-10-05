import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a passionate MERN Stack Developer, I excel in crafting immersive 
          web experiences. My expertise spans React, Tailwind, Next.js, Node, 
          MongoDB, and Express.js. With a mastery of HTML, CSS, and JavaScript, 
          I seamlessly blend traditional skills with modern frameworks. 
        </p>

        <br />

        <p className="text-xl">
        A UI design maestro using Tailwind CSS and skilled in version control
          with Git/GitHub, I add magic to websites through GSAP animations. 
          I thrive on transforming design visions into user-centric interfaces. 
          Let's collaborate and create exceptional digital journeys together!
        </p>
      </div>
    </div>
  );
};

export default About;
