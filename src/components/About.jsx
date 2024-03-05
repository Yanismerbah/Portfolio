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
        Je suis Anouar Safi, un étudiant de 20 ans en troisième année de licence
        informatique, spécialisé en ingénierie, à l'Université d'Orléans.
        Actuellement en pleine réflexion sur ma spécialité future, oscillant
        entre le développement web et le domaine de la data, je suis déterminé à
        orienter ma carrière vers l'informatique.
      </p>
    </div>
  );
};

const ProfessionalInfo = () => {
  return (
    <div className="text-xl">
      <p>
        À la recherche d'une opportunité de stage de trois mois dans n'importe
        quel domaine informatique, je suis prêt à débuter dès avril 2024. La
        possibilité de prolonger ce stage jusqu'au 31 juillet 2024 constitue une
        chance d'approfondir mes connaissances et d'explorer davantage le monde
        professionnel.
      </p>
      <p>
        Parallèlement, mes projets incluent la recherche d'une alternance pour
        mon master, prévu pour la rentrée de septembre 2025. Je suis convaincu
        que cette expérience contribuera grandement à l'enrichissement de mes
        compétences et à ma croissance professionnelle.
      </p>
    </div>
  );
};

const HobbiesInfo = () => {
  return (
    <div className="text-xl">
      <p>
        En dehors de ma vie académique, je suis un passionné de jeux vidéo,
        ardent gamer et compétiteur, particulièrement doué à FIFA et Call of
        Duty. Mon amour pour le football s'exprime également sur le terrain en
        tant que joueur de l'équipe universitaire de futsal de l'Université
        d'Orléans. Ces passions nourrissent mon esprit compétitif et ma
        détermination à exceller dans tous les aspects de ma vie.
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

