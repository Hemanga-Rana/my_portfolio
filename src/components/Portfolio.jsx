import React from "react";
import familyGolf1 from "../assets/portfolio/familyGolf1.png";
import cyberfrictionModern2 from "../assets/portfolio/cyberfrictionModern2.png";
import productDesigner3 from "../assets/portfolio/productDesigner3.png";
import tourWebsite4 from "../assets/portfolio/tourWebsite4.png";
import bubbleGame5 from "../assets/portfolio/bubbleGame5.png";
import cyberfriction6 from "../assets/portfolio/cyberfriction6.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: familyGolf1,
      liink: 'https://hemanga-rana.github.io/FamilyGolfWebsite/',
      codee: 'https://github.com/Hemanga-Rana/FamilyGolfWebsite'
    },
    {
      id: 2,
      src: cyberfrictionModern2,
      liink: 'https://hemanga-rana.github.io/NewCyberfictionWebsite/',
      codee: 'https://github.com/Hemanga-Rana/NewCyberfictionWebsite'
    },
    {
      id: 3,
      src: productDesigner3,
      liink: 'https://hemanga-rana.github.io/Cynthia_Ugwu_Website_Clone/',
      codee: 'https://github.com/Hemanga-Rana/Cynthia_Ugwu_Website_Clone'
    },
    {
      id: 4,
      src: tourWebsite4,
      liink: 'https://hemanga-rana.github.io/Tour_Website/',
      codee: 'https://github.com/Hemanga-Rana/Tour_Website'
    },
    {
      id: 5,
      src: bubbleGame5,
      liink: 'https://hemanga-rana.github.io/bubble_game/',
      codee: 'https://github.com/Hemanga-Rana/bubble_game'
    },
    {
      id: 6,
      src: cyberfriction6,
      liink: 'https://hemanga-rana.github.io/CyberfictionWebsite/',
      codee: 'https://github.com/Hemanga-Rana/CyberfictionWebsite'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liink, codee}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={liink}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={codee}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;