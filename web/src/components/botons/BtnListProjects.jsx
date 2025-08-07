import { Link } from "react-router";

function BtnListProjects() {
  return (

    <div className="btnContainer">
      <Link to="/">
      <button className="genericBtn">VER PROYECTOS</button>
      </Link>
    </div>
  );
}
export default BtnListProjects;