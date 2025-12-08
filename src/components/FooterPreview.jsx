import React from 'react';

const FooterPreview = () => {
  // Sample data for the footer preview
  const footerData = {
    tagline: "Redefining Electric Luxury Trucks",
    linkGroups: [
      {
        title: "Quick Links",
        links: [
          { text: "About Us", path: "#" },
          { text: "Careers", path: "#" },
          { text: "Investors", path: "#" },
          { text: "Press", path: "#" }
        ]
      },
      {
        title: "Support",
        links: [
          { text: "Contact", path: "#" },
          { text: "Find a Dealer", path: "#" },
          { text: "Service Centers", path: "#" },
          { text: "Owner's Portal", path: "#" }
        ]
      }
    ]
  };

  return (
    <footer 
      className="footer-v1"
      style={{
        position: 'relative',
        background: '#1A1A1A', /* primary-color */
        color: 'white',
        padding: '60px 0 40px', /* Reduced top padding */
        fontFamily: 'Inter, system-ui, sans-serif',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div 
          className="footer-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px' /* Reduced gap for better fit */,
            marginBottom: '40px' /* Reduced margin for better fit */
          }}
        >
          <div
            className="footer-top-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}
          >
            <div
              className="footer-brand-and-newsletter"
              style={{
                display: 'flex',
                flexDirection: 'column', /* Stack vertically on small screens */
                gap: '30px',
                width: '100%'
              }}
            >
              <div
                className="footer-brand"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start' /* Left align brand */
                }}
              >
                <h2
                  className="footer-logo"
                  style={{
                    fontSize: '36px', /* Reduced size for better fit */
                    fontWeight: '900',
                    marginBottom: '12px', /* Reduced margin */
                    letterSpacing: '-1px', /* Reduced letter spacing */
                    margin: 0
                  }}
                >
                  <span
                    className="vol"
                    style={{
                      color: '#E4002B' /* accent-color */
                    }}
                  >
                    VOL
                  </span>
                  <span
                    className="trux"
                    style={{
                      color: 'white'
                    }}
                  >
                    TRUX
                  </span>
                </h2>
                <p
                  className="footer-tagline"
                  style={{
                    fontSize: '16px', /* Reduced size for better fit */
                    opacity: '0.8',
                    marginBottom: '20px', /* Reduced margin */
                    maxWidth: '350px', /* Increased for better fit */
                    margin: 0,
                    lineHeight: 1.4 /* Tighter line height */
                  }}
                >
                  {footerData.tagline}
                </p>
              </div>

              <div
                className="footer-newsletter"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  maxWidth: '400px' /* Limit newsletter width for better fit */
                }}
              >
                <h4
                  style={{
                    fontSize: '18px', /* Reduced for better fit */
                    marginBottom: '16px',
                    color: 'white',
                    margin: 0
                  }}
                >
                  Join the Revolution
                </h4>
                <form
                  className="footer-form"
                  style={{
                    display: 'flex',
                    marginBottom: '12px', /* Reduced */
                    width: '100%',
                    maxWidth: '100%' /* Ensure it doesn't overflow */
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    style={{
                      flex: 1,
                      padding: '12px 16px', /* Reduced padding */
                      border: 'none',
                      borderRadius: '50px 0 0 50px',
                      fontSize: '14px', /* Reduced for better fit */
                      outline: 'none',
                      minWidth: 0 /* Allow shrinking */
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: '#E4002B', /* accent-color */
                      color: 'white',
                      border: 'none',
                      padding: '12px 20px', /* Reduced padding */
                      borderRadius: '0 50px 50px 0',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                      fontSize: '14px', /* Reduced for better fit */
                      whiteSpace: 'nowrap' /* Prevent wrapping */
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#B60022'; /* cta-hover */
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#E4002B'; /* accent-color */
                    }}
                  >
                    Subscribe
                  </button>
                </form>
                <small
                  style={{
                    fontSize: '14px', /* font-size-sm */
                    color: '#999',
                    margin: 0
                  }}
                >
                  50,000+ owners • No spam ever
                </small>
              </div>
            </div>
          </div>

          <div 
            className="footer-links-section"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'flex-start'
            }}
          >
            {footerData.linkGroups.map((group, index) => (
              <div 
                key={index}
                className="footer-links"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: '1',
                  minWidth: '200px' /* Minimum width for better organization */
                }}
              >
                <h4 
                  style={{
                    fontSize: '16px', /* Reduced for better fit */
                    fontWeight: '700',
                    marginBottom: '16px', /* Reduced for better fit */
                    color: '#E4002B', /* accent-color */
                    margin: 0
                  }}
                >
                  {group.title}
                </h4>
                <ul 
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}
                >
                  {group.links.map((link, linkIndex) => (
                    <li 
                      key={linkIndex}
                      style={{
                        marginBottom: '10px' /* Reduced for better fit */
                      }}
                    >
                      <a 
                        href={link.path}
                        style={{
                          color: '#ccc',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                          fontSize: '16px', /* font-size-md */
                          display: 'block'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#E4002B'; /* accent-color */
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#ccc';
                        }}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="footer-bottom"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div 
            className="footer-legal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            <p 
              style={{
                margin: 0,
                fontSize: '14px', /* font-size-sm */
                color: '#999'
              }}
            >
              &copy; 2025 Voltrux Motors. All rights reserved.
            </p>
          </div>
          
          <div 
            className="legal-links"
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              justifyContent: 'flex-end'
            }}
          >
            <a 
              href="#"
              style={{
                color: '#999',
                fontSize: '14px', /* font-size-sm */
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#E4002B'; /* accent-color */
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#999';
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              style={{
                color: '#999',
                fontSize: '14px', /* font-size-sm */
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#E4002B'; /* accent-color */
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#999';
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-brand-and-newsletter {
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .footer-newsletter {
            max-width: 300px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            flex-direction: row !important;
          }
          
          .footer-top-section {
            flex: 2 !important;
            margin-right: 30px !important;
          }
          
          .footer-links-section {
            flex: 3 !important;
          }
        }
        
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          .legal-links {
            margin-top: 16px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterPreview;