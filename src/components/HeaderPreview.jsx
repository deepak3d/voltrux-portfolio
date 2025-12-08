import React, { useState, useEffect } from 'react';

const HeaderPreview = () => {
  // Sample data for the header preview
  const headerData = {
    brandName: "Voltrux Motors",
    logoAlt: "Voltrux Motors Logo",
    ctaText: "Find a Dealer",
    ctaLink: "/dealers",
    navLinks: [
      { text: "Home", url: "/" },
      { text: "Models", url: "/models" },
      { text: "About", url: "/about" },
      { text: "Contact", url: "/contact" }
    ]
  };

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      style={{
        background: '#fff',
        borderBottom: '1px solid #E0E0E0', /* border-color */
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: isScrolled
          ? '0 4px 10px rgba(0, 0, 0, 0.08)' /* shadow-medium */
          : '0 2px 4px rgba(0, 0, 0, 0.05)', /* shadow-light */
        transition: 'box-shadow 0.3s ease'
      }}
    >
      <div
        className="header__container"
        style={{
          maxWidth: '1200px', /* max-width */
          margin: '0 auto',
          padding: '15px 20px', /* spacing-md spacing-lg */
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div
          className="header__logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px' /* spacing-md */
          }}
        >
          <div
            className="header__logo-image"
            style={{
              width: '60px', /* Smaller logo */
              height: '40px',
              objectFit: 'contain',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px'
            }}
          >
            <span style={{ color: '#666', fontSize: '10px', fontWeight: 'bold' }}>LOGO</span>
          </div>
          <span
            className="header__logo-text"
            style={{
              fontSize: '18px', /* Slightly larger font */
              fontWeight: '700',
              color: '#1A1A1A', /* primary-color */
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
          >
            {headerData.brandName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="header__nav"
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ul
            className="header__nav-list"
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '20px', /* Larger gap for better alignment */
              margin: 0,
              padding: 0
            }}
          >
            {headerData.navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="header__nav-link"
                  style={{
                    textDecoration: 'none',
                    color: '#1A1A1A', /* text-color */
                    fontWeight: '500', /* Lighter font weight */
                    position: 'relative',
                    padding: '8px 0',
                    fontSize: '16px', /* Slightly larger font */
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#E4002B'; /* accent-color */
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#1A1A1A'; /* text-color */
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = '2px solid #E4002B'; /* accent-color */
                    e.target.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = 'none';
                  }}
                >
                  {link.text}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#E4002B', /* accent-color */
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={headerData.ctaLink}
            className="header__cta-button"
            style={{
              backgroundColor: '#E4002B', /* cta-bg */
              color: '#fff',
              padding: '10px 20px', /* Better button sizing */
              borderRadius: '50px',
              fontWeight: '600', /* Slightly bolder */
              fontSize: '16px', /* Slightly larger font */
              textDecoration: 'none',
              display: 'inline-block',
              marginLeft: '25px', /* More space from nav */
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#B60022'; /* cta-hover */
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#E4002B'; /* cta-bg */
              e.target.style.transform = 'translateY(0)';
            }}
            onFocus={(e) => {
              e.target.style.outline = '2px solid #E4002B'; /* accent-color */
              e.target.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.target.style.outline = 'none';
            }}
          >
            {headerData.ctaText}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="header__menu-toggle"
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
            alignItems: 'center'
          }}
          aria-label="Toggle navigation menu"
        >
          <span
            className="header__menu-icon"
            style={{
              width: '24px',
              height: '3px',
              backgroundColor: '#1A1A1A', /* primary-color */
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}
          />
          <span
            className="header__menu-icon"
            style={{
              width: '24px',
              height: '3px',
              backgroundColor: '#1A1A1A', /* primary-color */
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}
          />
          <span
            className="header__menu-icon"
            style={{
              width: '24px',
              height: '3px',
              backgroundColor: '#1A1A1A', /* primary-color */
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--active' : ''}`}
        style={{
          display: isMobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          background: '#fff',
          borderTop: '1px solid #E0E0E0', /* border-color */
          width: '100%',
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: 99,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' /* shadow-medium */
        }}
      >
        <ul
          className="header__mobile-list"
          style={{
            listStyle: 'none',
            padding: '15px', /* spacing-md */
            margin: 0
          }}
        >
          {headerData.navLinks.map((link, index) => (
            <li
              key={index}
              style={{
                borderBottom: '1px solid #E0E0E0', /* border-color */
                padding: '8px 0' /* spacing-sm */
              }}
            >
              <a
                href={link.url}
                className="header__mobile-link"
                style={{
                  display: 'block',
                  padding: '8px 0', /* spacing-sm */
                  color: '#1A1A1A', /* text-color */
                  textDecoration: 'none',
                  fontWeight: '500',
                  borderBottom: '1px solid #E0E0E0', /* border-color */
                  paddingBottom: '10px', /* spacing-md */
                  fontSize: '14px', /* font-size-sm */
                  transition: 'color 0.3s ease'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.color = '#E4002B'; /* accent-color */
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#1A1A1A'; /* text-color */
                }}
                onFocus={(e) => {
                  e.target.style.outline = '2px solid #E4002B'; /* accent-color */
                  e.target.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                }}
              >
                {link.text}
              </a>
            </li>
          ))}
          <li style={{ padding: '8px 0' /* spacing-sm */ }}>
            <a
              href={headerData.ctaLink}
              className="header__cta-button--mobile"
              style={{
                backgroundColor: '#E4002B', /* cta-bg */
                color: '#fff',
                padding: '8px 15px', /* spacing-sm spacing-md */
                borderRadius: '50px',
                fontWeight: '500',
                fontSize: '14px', /* font-size-sm */
                textDecoration: 'none',
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#B60022'; /* cta-hover */
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#E4002B'; /* cta-bg */
              }}
              onFocus={(e) => {
                e.target.style.outline = '2px solid #E4002B'; /* accent-color */
                e.target.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.target.style.outline = 'none';
              }}
            >
              {headerData.ctaText}
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header__nav-link:hover > span {
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          .header__nav {
            display: none !important;
          }

          .header__menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderPreview;