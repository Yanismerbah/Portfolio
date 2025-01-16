import React from "react";
import othello from "../assets/portfolio/othello.jpg";
import donjon from "../assets/portfolio/donjon.jpg";
import clinique from "../assets/portfolio/clinique.jpg";
import soon from "../assets/portfolio/soon.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: othello,
      codeLink: "https://github.com/AnouarSafi/Othello.git",
    },

    {
      id: 2,
      src: clinique,
      codeLink: "https://github.com/AnouarSafi",
    },

    {
      id: 3,
      src: donjon,
      codeLink: "https://github.com/AnouarSafi",
    },

    {
      id: 4,
      src: soon,
      codeLink: "https://github.com/AnouarSafi",
    },

    {
      id: 5,
      src: soon,
      codeLink: "https://github.com/AnouarSafi",
    },

    {
      id: 6,
      src: soon,
      codeLink: "https://github.com/AnouarSafi",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Découvrez certains de mes projets directement ici</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg mb-8">
              <img
                src={src}
                alt=""
                className="rounded-md w-full h-auto duration-200 hover:scale-105"
              />
              <div className="flex justify-center mt-4">
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
