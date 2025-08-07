import GetAvatar from "../refactorcomponent/GetAvatar";
import PropTypes from "prop-types";
import Select from "react-select";
import { Link } from "react-router-dom";

function Form({ formData, setFormData }) {
  const handleInput = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataAEnviar = {
    ...formData,
    technology: formData.technology.map((tech) => tech.value),
  };

  fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    body: JSON.stringify(dataAEnviar),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      // Mirar que devuelve esa petición y que podemos hacer con ella
      console.log(dataResponse);
    });
};

  const techOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "php", label: "PHP" },
    { value: "typescript", label: "TypeScript" },
  ];

  return (
    <>
      <div className="form__wrapper">
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="form__title">
            <h2>Información</h2>
            <p>Cuéntanos mas sobre tu proyecto</p>
          </div>
          <div className="form__divider"></div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Nombre del proyecto"
              id="projectName"
              name="projectName"
              required
              className="form__input"
              value={formData.projectName}
              onChange={handleInput}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Slogan"
              id="projectSlogan"
              name="projectSlogan"
              required
              className="form__input"
              value={formData.projectSlogan}
              onChange={handleInput}
            />
          </div>
          <div className="form__group2">
            <input
              type="text"
              placeholder="Repo ejemplo: https: //github.com/tuusuario/tu-repo"
              id="projectRepository"
              name="projectRepository"
              required
              className="form__input"
              value={formData.projectRepository}
              onChange={handleInput}
            />

            <input
              type="text"
              placeholder="Demo"
              id="projectDemo"
              name="projectDemo"
              required
              className="form__input"
              value={formData.projectDemo}
              onChange={handleInput}
            />
          </div>

          <Select
            placeholder="Tecnologías"
            options={techOptions}
            isMulti
            closeMenuOnSelect={false}
            isSearchable={false}
            name="technology"
            className="form__select"
            classNamePrefix="select"
            value={formData.technology}
            onChange={(selectedOptions) =>
              setFormData({
                ...formData,
                technology: selectedOptions,
              })
            }
          />

          <div className="form__group">
            <textarea
              id="description"
              name="description"
              placeholder="Descripción"
              required
              className="form__textarea"
              value={formData.description}
              onChange={handleInput}
              rows="5"
            ></textarea>
          </div>

          <div className="form__group">
            <h3 className="form__author">Cuéntanos sobre la autora</h3>

            <input
              type="text"
              placeholder="Nombre"
              id="authorName"
              name="authorName"
              required
              className="form__input"
              value={formData.authorName}
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Trabajo"
              id="authorJob"
              name="authorJob"
              required
              className="form__input"
              value={formData.authorJob}
              onChange={handleInput}
            />

            <div className="btnContainer">
              {/* Foto de perfil */}
              <GetAvatar
                avatar={formData.profileAvatar}
                updateAvatar={(img) =>
                  setFormData({ ...formData, profileAvatar: img })
                }
                text="Sube tu foto de perfil"
                hidePreview={true}
              />
            </div>
            {/* Foto del proyecto */}
            <div className="btnContainer">
              <GetAvatar
                avatar={formData.projectAvatar}
                updateAvatar={(img) =>
                  setFormData({ ...formData, projectAvatar: img })
                }
                text="Sube la imagen de tu proyecto"
                hidePreview={true}
              />
            </div>
            <div className="btnContainer">
            <Link to="/cardpreview">
              <button className="genericBtn">Subir proyecto</button>
            </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    projectName: PropTypes.string,
    projectSlogan: PropTypes.string,
    projectRepository: PropTypes.string,
    projectDemo: PropTypes.string,
    technology: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    description: PropTypes.string,
    authorName: PropTypes.string,
    authorJob: PropTypes.string,
    profileAvatar: PropTypes.string,
    projectAvatar: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Form;
