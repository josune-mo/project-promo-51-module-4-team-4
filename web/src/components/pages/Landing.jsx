import BtnNewProject from "../botons/BtnNewProject";
import TeamCard from "../TeamCard/TeamCard";

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

function landing() {
  const team = [
    {
      name: "Josune",
      role: "Full Stack Developer",
      projectTitle: "FitSync",
      description:
        " Front-end lover turned API whisperer. Her React components are smoother than her coffee.",
      technologies: ["React", "HTML", "CSS"],
      photo: getImageByName("Josune.jpg"),
      links: [
        {
          name: "GitHub",
          url: "https://github.com/josune-mo",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/josunemoralesarrieta",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Chiara",
      role: "Full Stack Developer",
      projectTitle: "BugTrackr",
      description:
        "Debugs like a detective and writes clean code that could make linters cry with joy. ",
      technologies: ["React", "HTML", "CSS"],
      photo: getImageByName("Chiara.jpg"),
      links: [
        {
          name: "GitHub",
          url: "https://github.com/cusichia",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/chiara-cusi-493b5a216",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Montse",
      role: "Full Stack Developer",
      projectTitle: "TaskNest",
      description:
        "Strategic thinker and team motivator. If Agile were a person, it would be her.",
      technologies: ["React", "HTML", "CSS"],
      photo: getImageByName("Montse.jpg"),
      links: [
        {
          name: "GitHub",
          url: "https://github.com/montsemoran",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/montse-moran",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Sandra",
      role: "Full Stack Developer",
      projectTitle: "MoodBoard",
      description:
        "UX queen with an eye for detail and a knack for making apps that users actually enjoy",
      technologies: ["React", "HTML", "CSS"],
      photo: getImageByName("Sandra.jpg"),
      links: [
        {
          name: "GitHub",
          url: "https://github.com/SaNdRyXu",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sandra-garcia-39038528b/",
          icon: "/linkedin.svg",
        },
      ],
    },
    {
      name: "Joana",
      role: "Full Stack Developer",
      projectTitle: "EcoCart",
      description:
        "Back-end powerhouse with a passion for performance. Her favorite language? Whichever gets the job done.",
      technologies: ["React", "HTML", "CSS"],
      photo: getImageByName("Joana.jpg"),
      links: [
        {
          name: "GitHub",
          url: "https://github.com/Joana2617",
          icon: "/GitHub.svg",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/joana-nunes-8915b113a/",
          icon: "/linkedin.svg",
        },
      ],
    },
  ];

  return (
    <>
      <BtnNewProject />

      <section className="team-section landingPage">
        <div className="cards-flex">
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>
    </>
  );
}

export default landing;
