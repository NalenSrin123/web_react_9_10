import "../assets/CSS/header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Get current URL

  return (
    <div className="head">
      <header>
        <div className="header">
          <img
            width={80}
            height={80}
            src="https://png.pngtree.com/template/20191203/ourmid/pngtree-coffee-logo-design-vector-image_337940.jpg"
            alt="Logo"
          />
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <Link id="link" className={location.pathname === "/" ? "active" : ""} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link id="link" className={location.pathname === "/about" ? "active" : ""} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link id="link" className={location.pathname === "/contact" ? "active" : ""} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link id="link" className={location.pathname === "/location" ? "active" : ""} to="/location">
              Location
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
