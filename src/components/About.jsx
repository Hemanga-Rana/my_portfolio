import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a dedicated Front-End Developer with a passion for crafting immersive web experiences. My toolkit includes HTML, CSS, and JavaScript, which I blend seamlessly with modern frameworks like React.js and Next.js. I'm a maestro of UI design with Tailwind CSS, and I navigate version control effortlessly with Git and GitHub. I have a penchant for adding a touch of magic to websites through GSAP animations. As a detail-oriented problem solver, I thrive on transforming design visions into functional, user-centric interfaces. Let's connect and collaborate on creating exceptional digital journeys!
        </p>

        <br />

        <p className="text-xl">
        I'm a dedicated Front-End Developer with a passion for crafting immersive web experiences. My toolkit includes HTML, CSS, and JavaScript, which I blend seamlessly with modern frameworks like React.js and Next.js. I'm a maestro of UI design with Tailwind CSS, and I navigate version control effortlessly with Git and GitHub. I have a penchant for adding a touch of magic to websites through GSAP animations. As a detail-oriented problem solver, I thrive on transforming design visions into functional, user-centric interfaces. Let's connect and collaborate on creating exceptional digital journeys!
        </p>
      </div>
    </div>
  );
};

export default About;