import React, { useEffect, useState } from 'react';
import {Menu, X} from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Our Story', href: '#our-story' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Travel', href: '#travel' },
    { label: 'Gallery', href: '#gallery' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#home" className="header-logo-link" aria-label="Manfred and Berenice home" >
            
            <span className="header-logo-monogram">
                <span>M</span>
                <span className="art">
                ♡
                </span>
                <span>B</span>
                
            </span>
            <span className="header-logo-subtitle">
                EST. 2023
            </span>
        </a>

        <button
          type="button"
          className={
            menuOpen
              ? 'header-menu-toggle header-menu-toggle-open'
              : 'header-menu-toggle'
          }
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((currentState) => !currentState)}
        >

        {/* Mobile Menu Button/Icon  */}
        {menuOpen ? (<X size={18} strokeWidth={1.5} />) : (<Menu size={18} strokeWidth={1.5} />)}

        </button>

        <nav
          id="main-navigation"
          className={
            menuOpen
              ? 'header-nav header-nav-open'
              : 'header-nav'
          }
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="header-nav-link"
              onClick={handleNavigation}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#rsvp"
            className="header-rsvp-button"
            onClick={handleNavigation}
          >
            RSVP
            </a>    
        </nav>

      </div>
    </header>
  );
};

export default Header;