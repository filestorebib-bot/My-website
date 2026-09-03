import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    color: '#ffffff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: '500',
    backgroundColor: location.pathname === path ? '#2563eb' : 'transparent',
    transition: 'background-color 0.2s ease'
  });

  return (
    <nav style={{ backgroundColor: '#0f172a', padding: '1rem 2rem', display: 'flex', gap: '12px' }}>
      <Link to="/" style={getLinkStyle('/')}>Home</Link>
      <Link to="/notes" style={getLinkStyle('/notes')}>Notes</Link>
      <Link to="/about" style={getLinkStyle('/about')}>About Me</Link>
      <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
    </nav>
  );
}