import BtnNewProject from "../botons/BtnNewProject";
import TeamCard from "../TeamCard/TeamCard";
import { useState, useEffect } from "react";

const imageMap = import.meta.glob("../../images/*.{jpg,png,svg}", {
  eager: true,
  import: "default",
});

const getImageByName = (filename) => {
  const match = Object.entries(imageMap).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return match?.[1] || null;
};

function Landing() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://project-promo-51-module-4-team-4.onrender.com/projects')
    //fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error al cargar los proyectos", error);
      });
  }, []);

  return (
    <>
      <BtnNewProject />

      <section className="team-section landingPage">
        <div className="cards-flex">
          {projects.map((member, index) => {
  const links = [];

  if (member.repo) {
    links.push({
      name: "Repositorio",
      url: member.repo,
      icon: "/project-promo-51-module-3-team-4/GitHub.svg"
    });
  }

  if (member.demo) {
    links.push({
      name: "Demo",
      url: member.demo,
      icon: "/project-promo-51-module-3-team-4/linkedin.svg"
    });
  }
console.log("PHOTO:", member.photo);
console.log ("member", member)
  return (
    <TeamCard
      key={index}
      name={member.autor}
      role={member.job}
      projectTitle={member.name}
      description={member.description}
      technologies={member.technologies.split(",")}
      photo={member.image}
      links={links}
    />
  );
})}

        </div>
      </section>
    </>
  );
}

export default Landing;
