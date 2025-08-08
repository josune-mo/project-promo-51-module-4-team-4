import PropTypes from "prop-types";

function TeamCard({
  name,
  role,
  projectTitle,
  description,
  technologies,
  image,
  links,
}) {
  return (
    <>
      <article className="cardStyle">
        <section className="cardStyle__header">
          <img
            src={image}
            alt={`Foto de ${name}`}
            className="cardStyle__profile-pic"
          />

          <div className="cardStyle__body">
            <p className="cardStyle__role">{role}</p>
            <h2 className="cardStyle__name">{name}</h2>
          </div>
        </section>

        <section className="cardStyle__content">
          <p className="cardStyle__personal-project">Personal Project Card</p>
          <h3 className="cardStyle__title">{projectTitle}</h3>
          <h4 className="cardStyle__subtitle">Diseños Exclusivos</h4>

          <p className="cardStyle__description">{description}</p>

          <div className="cardStyle__tech-list">
  {(Array.isArray(technologies) ? technologies : technologies.split(',')).map((tech, i) => (
    <span key={i} className="cardStyle__tech-tag">
      {tech.trim()}
    </span>
  ))}
</div>


          <div className="cardStyle__contact-links">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamCard;
