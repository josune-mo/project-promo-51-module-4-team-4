import CardPreview from "../functions/CardPreview";
import PropTypes from "prop-types";

function CardPreviewPage({ projectData }) {
  return (
    <div className="cardPreviewLayout">
      <main className="cardPreviewMain">
        <CardPreview formData={projectData} />
      </main>
    </div>
  );
}
CardPreviewPage.propTypes = {
  projectData: PropTypes.object.isRequired,
};
export default CardPreviewPage;
