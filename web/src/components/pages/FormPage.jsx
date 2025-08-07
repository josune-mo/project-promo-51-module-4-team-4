import BtnListProjects from "../botons/BtnListProjects";
import Form from "../functions/Form";
import CardPreview from "../functions/CardPreview";
import PropTypes from 'prop-types';

function FormPage({ formData, setFormData }) {
  
  return (
    <>
      <BtnListProjects />

      <section className="formPageStyle">
        <div className="leftContent">
          <CardPreview 
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="rightContent">
          <Form 
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        
      </section>
    </>
  );
}
FormPage.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};
export default FormPage;
