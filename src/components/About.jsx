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
        Je m'appelle Anouar SAFI et je suis actuellement étudiant en 3ème année de Licence Informatique à
l'université d'Orléans. Je vous adresse la présente pour soumettre ma candidature en vue d'un stage
de 3 mois au sein de votre entreprise, à partir d'avril 2024.
Passionné par le développement web, le traitement de données, l'intelligence artificielle et la
cybersécurité, je suis particulièrement enthousiaste à l'idée de rejoindre votre équipe et de
contribuer à vos projets innovants. Mes compétences techniques en Java, Python, HTML, CSS,
JavaScript, SQL, PHP, C/C++, et OCAML, acquises au cours de ma formation et de mes projets
antérieurs, me permettent d'apporter une contribution significative à vos activités. Ma capacité à
travailler aussi bien en autonomie qu'en équipe, ainsi que mon aptitude à m'adapter à divers
environnements, font de moi un candidat polyvalent et motivé.


        </p>

        <br />

        <p className="text-xl">
        Je suis persuadé que ce stage de formation représente une opportunité unique pour mettre en
pratique mes connaissances, explorer de nouvelles technologies et bénéficier de l'expertise de votre
entreprise. Mon enthousiasme, ma curiosité et ma motivation sont autant d'atouts que je suis prêt à
mettre au service de votre équipe.
        </p>
      </div>
    </div>
  );
};

export default About;
