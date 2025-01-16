import React from "react";

const AboutHeader = () => {
  return (
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        About
      </p>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div className="text-xl mt-6 md:mt-20">
      <p>
      Je suis Merbah Yanis, étudiant de 24 ans en Master 1 MIAGE à l'Université d'Orléans, 
      passionné par le développement informatique. 
      Actuellement, je me concentre sur le développement web, 
      avec l'ambition de bâtir une carrière solide dans ce domaine.
      </p>
    </div>
  );
};

const ProfessionalInfo = () => {
  return (
    <div className="text-xl">
     <p> 
      À la recherche d'une alternance pour ma deuxième année de Master MIAGE à partir de septembre 2025, 
      je souhaite intégrer une entreprise où je pourrai développer mes compétences en développement informatique 
      tout en contribuant activement à des projets innovants. 
      Cette opportunité sera pour moi une étape clé pour allier apprentissage académique et expérience professionnelle. 
      </p>
    </div>
  );
};

const HobbiesInfo = () => {
  return (
    <div className="text-xl">
      <p>
      En dehors de ma vie académique, je suis passionnée par l'arbitrage et le sport. 
      Mon engagement dans ces domaines reflète ma capacité à rester concentrée, 
      à prendre des décisions justes sous pression et à travailler en équipe. *
      Ces passions nourrissent ma détermination à exceller dans tout ce que j’entreprends, 
      que ce soit sur le terrain ou en dehors.
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white p-4"
    >
      <div className="max-w-screen-md mx-auto">
        <AboutHeader />
        <PersonalInfo />
        <ProfessionalInfo />
        <HobbiesInfo />
      </div>
    </div>
  );
};

export default About;

