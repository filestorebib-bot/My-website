import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">B</span>

          <span className="brand-text">
            Bibash<span> Lamichhane</span>
          </span>
        </NavLink>

        <button
          className={`menu-button ${
            menuOpen ? 'active' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navigation ${
            menuOpen ? 'navigation-open' : ''
          }`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Notes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/notes"
            className="nav-cta"
            onClick={closeMenu}
          >
            Explore Notes
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
