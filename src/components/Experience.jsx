import React from "react";

import htmlcssjs from "../assets/htmlcssjs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/node.png";
import expressjs from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmlcssjs,
      title: "HTML/CSS/JS",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: react,
      title: "React JS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-300",
    },
    {
      id: 4,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: expressjs,
      title: "Express JS",
      style: "shadow-green-200",
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className=" mt-16 ">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;