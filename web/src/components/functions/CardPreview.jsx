import defaultAvatar from "../../images/default-avatar.svg";
import defaultProject from "../../images/project-default.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function CardPreview({ formData }) {
  const navigate = useNavigate();
  const {
    projectName,
    projectSlogan,
    profileAvatar,
    projectAvatar,
    authorName,
    authorJob,
    description,
    technology,
    projectRepository,
    projectDemo,
  } = formData;

  return (
    <div className="styleCardPreview">
      <article className="cardStyle">
        <section className="cardStyle__header">
          <div className="cardStyle__avatar">
            <img
              src={profileAvatar || defaultAvatar}
              alt="Foto de perfil"
              className="cardStyle__avatar-img"
            />
          </div>
          <div className="cardStyle__body">
            <p className="cardStyle__role">
              {authorJob || "Full Stack Developer"}
            </p>
            <h2 className="cardStyle__name">
              {authorName || "Emmelie Björklund"}
            </h2>
          </div>
        </section>

        <section className="cardStyle__content">
          <p className="cardStyle__personal-project">Personal Project Card</p>
          <h3 className="cardStyle__title">
            {projectName || "Elegant Workspace"}
          </h3>
          <h4 className="cardStyle__subtitle">
            {projectSlogan || "Diseños exclusivos"}
          </h4>
          <p className="cardStyle__description">
            {description ||
              "Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis."}
          </p>

          <div className="cardStyle__project-img-container">
            <img
              src={projectAvatar || defaultProject}
              alt="Imagen del proyecto"
              className="cardStyle__project-img"
            />
          </div>

          <div className="cardStyle__tech-list">
            <p className="cardStyle__tech-tag">
              {technology && technology.length > 0
                ? technology.map((tech) => tech.label).join(", ")
                : "HTML, CSS, JavaScript"}
            </p>
            <div className="cardStyle__contact-links">
              {projectRepository && (
                <a href={projectRepository} target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
              {projectDemo && (
                <a href={projectDemo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        </section>
      </article>
      <button
        className="genericBtn"
        style={{ margin: "2rem auto 0", display: "block" }}
        onClick={() => navigate(-1)}
        type="button"
      >
        Volver atrás
      </button>
    </div>
  );
}

CardPreview.propTypes = {
  formData: PropTypes.shape({
    projectName: PropTypes.string,
    projectSlogan: PropTypes.string,
    profileAvatar: PropTypes.string,
    projectAvatar: PropTypes.string,
    authorName: PropTypes.string,
    authorJob: PropTypes.string,
    description: PropTypes.string,
    technology: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    projectRepository: PropTypes.string,
    projectDemo: PropTypes.string,
  }).isRequired,
};
export default CardPreview;
