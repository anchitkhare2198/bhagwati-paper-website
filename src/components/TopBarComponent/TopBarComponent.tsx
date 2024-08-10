import { FunctionComponent } from "react";
import "./TopBarComponent.scss";
import Logo2 from "../../assets/images/logo_orange.svg";
// import Logo from "../../assets/images/Logo_topBar.svg";

const TopBarComponent: FunctionComponent = () => {
  return (
    <div className="topBar">
      <div className="logo-container">
        <img className="logo" src={Logo2} alt="Logo" />
        <h6>Bhagwati Paper Trading Company</h6>
      </div>
      <nav className="navigation">
        <ul>
        <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#values">Our Values</a>
          </li>
          <li>
            <a href="#products">Our Products</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopBarComponent;
