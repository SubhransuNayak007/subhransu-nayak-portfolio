import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import blueImage from '../images/blue.png';

const NAV_ITEMS = [
  { to: '/browse',          label: 'Home',      Icon: FaHome },
  { to: '/work-experience', label: 'Experience', Icon: FaBriefcase },
  { to: '/skills',          label: 'Skills',     Icon: FaTools },
  { to: '/projects',        label: 'Projects',   Icon: FaProjectDiagram },
  { to: '/contact-me',      label: 'Hire Me',    Icon: FaEnvelope },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LogoText = () => (
    <div className="navbar-logo-curved" style={{ display: 'flex', alignItems: 'center' }}>
      <svg viewBox="0 0 260 45" width="170" height="30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="navbarCurve" d="M 10,38 Q 130,16 250,38" fill="none" />
          <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF3A3A" />
            <stop offset="100%" stopColor="#E50914" />
          </linearGradient>
          <filter id="navLogoGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <text fill="url(#navLogoGrad)" filter="url(#navLogoGlow)" style={{
          fontFamily: "'Bebas Neue', 'Arial Black', Impact, sans-serif",
          fontSize: '24px',
          fontWeight: 900,
          letterSpacing: '1px',
        }}>
          <textPath href="#navbarCurve" startOffset="50%" textAnchor="middle">
            SUBHRANSU NAYAK
          </textPath>
        </text>
      </svg>
    </div>
  );

  const currentPath = location.pathname;

  return (
    <>
      {/* ── Top Navbar ─────────────────── */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" style={{ textDecoration: 'none', marginRight: '15px' }}>
            <LogoText />
          </Link>
          <ul className="navbar-links">
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="navbar-right">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-icon"
            onClick={() => navigate('/browse')}
          />
        </div>
      </nav>

      {/* ── Mobile Bottom Tab Bar ──────── */}
      <nav className="mobile-bottom-nav" role="navigation" aria-label="Main navigation">
        {NAV_ITEMS.map(({ to, label, Icon }) => {
          const isActive = currentPath === to || currentPath.startsWith(to + '/');
          return (
            <Link
              key={to}
              to={to}
              className={`mobile-nav-item${isActive ? ' active' : ''}`}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="mobile-nav-icon-wrap">
                <Icon className="mobile-nav-icon" />
              </div>
              <span className="mobile-nav-label">{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
