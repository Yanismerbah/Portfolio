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
      demoLink: "https://github.com/AnouarSafi/Othello.git",
      codeLink: "https://github.com/AnouarSafi/Othello.git",
    },
    {
      id: 2,
      src: clinique,
      demoLink: "LIEN_DEMO_2",
      codeLink: "LIEN_CODE_2",
    },
    {
      id: 3,
      src: donjon,
      demoLink: "LIEN_DEMO_3",
      codeLink: "LIEN_CODE_3",
    },
    {
      id: 4,
      src: soon,
      demoLink: "LIEN_DEMO_4",
      codeLink: "LIEN_CODE_4",
    },
    {
      id: 5,
      src: soon,
      demoLink: "LIEN_DEMO_5",
      codeLink: "LIEN_CODE_5",
    },
    {
      id: 6,
      src: soon,
      demoLink: "LIEN_DEMO_6",
      codeLink: "LIEN_CODE_6",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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

