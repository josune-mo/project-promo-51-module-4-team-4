import { Link } from "react-router";

function BtnNewProject() {

  return (
    <div className="btnContainer">
      <Link to="/newproject">
      <button className="genericBtn">NUEVO PROYECTO</button>
      </Link>
    </div>
  );
}
export default BtnNewProject;