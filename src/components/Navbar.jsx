import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

export function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setColor(true);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className={color ? "header header-bg" : "header  "}>
      <nav className="navbar">
        <a href="/" className="logo">
          <span className="harrison">Harrison</span>
          <span className="compol">COMPOL</span>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active-link" : "nav-item"
            }
            to="/home"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active-link" : "nav-item"
            }
            to="/servicios"
            onClick={closeMenu}
          >
            Qué hacemos
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active-link" : "nav-item"
            }
            to="/equipo"
            onClick={closeMenu}
          >
            Quienes somos
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active-link" : "nav-item"
            }
            to="/trabajos"
            onClick={closeMenu}
          >
            Trabajos
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active-link" : "nav-item"
            }
            to="/clientes"
            onClick={closeMenu}
          >
            Clientes
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active-link" : "nav-item"
            }
            to="/contacto"
            onClick={closeMenu}
          >
            Contacto
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
