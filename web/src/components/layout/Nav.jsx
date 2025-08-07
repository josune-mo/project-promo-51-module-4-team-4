import imgPc from "../../images/pc_code.png"
import logoMobile from "../../images/logo_mobile.png";

function Nav() {
  return (
    <div className="logos">
      <div className="logos__p">
      <img src={imgPc} alt="pc_code" className="logos__img" />
      <p>Proyectos Molones</p>
      </div>
      <img src={logoMobile} alt="logo_mobile" className="logos__img"/>
    </div>
  );
}
export default Nav;