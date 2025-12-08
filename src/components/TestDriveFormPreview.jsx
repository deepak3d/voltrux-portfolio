import React, { useState } from 'react';

const TestDriveFormPreview = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    model: '',
    time: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Sample data for dropdowns
  const locations = [
    { text: 'Downtown Showroom', value: 'downtown' },
    { text: 'Northside Dealership', value: 'northside' },
    { text: 'Eastside Gallery', value: 'eastside' }
  ];

  const models = [
    { text: 'Voltrux V-8', value: 'v8' },
    { text: 'Voltrux Executive', value: 'executive' },
    { text: 'Voltrux Sport', value: 'sport' },
    { text: 'Voltrux Luxury', value: 'luxury' }
  ];

  const times = [
    { text: '10:00 AM', value: '10:00' },
    { text: '11:00 AM', value: '11:00' },
    { text: '12:00 PM', value: '12:00' },
    { text: '1:00 PM', value: '13:00' },
    { text: '2:00 PM', value: '14:00' },
    { text: '3:00 PM', value: '15:00' },
    { text: '4:00 PM', value: '16:00' }
  ];

  const whyItems = [
    'Experience our cutting-edge technology firsthand',
    'Feel the power of our premium electric engines',
    'Explore luxury features designed for comfort',
    'Discover our revolutionary safety systems',
    'Test our autonomous driving capabilities'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.location || !formData.model || !formData.time) {
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    // Simulate form submission
    setShowSuccess(true);
    setShowError(false);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        model: '',
        time: ''
      });
    }, 5000);
  };

  return (
    <div 
      className="test-drive-container"
      style={{
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        backgroundColor: '#fff',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
      }}
    >
      <div 
        className="test-drive-form-col"
        style={{
          flex: '2',
          minWidth: 0
        }}
      >
        <div 
          className="form-header"
          style={{
            marginBottom: '2rem'
          }}
        >
          <h2 
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1A1A1A',
              marginBottom: '0.5rem'
            }}
          >
            Book Your Test Drive
          </h2>
          <p 
            style={{
              fontSize: '18px',
              color: '#666',
              margin: 0
            }}
          >
            Select your preferred model and time slot
          </p>
        </div>

        <div 
          className="form-wrapper"
          style={{
            marginBottom: '1rem'
          }}
        >
          {/* Success Message */}
          {showSuccess && (
            <div 
              className="form-message success"
              style={{
                padding: '1rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                borderRadius: '4px',
                marginBottom: '1rem',
                border: '1px solid #c3e6cb'
              }}
            >
              Thank you! Your test drive request has been submitted successfully.
            </div>
          )}

          {/* Error Message */}
          {showError && (
            <div 
              className="form-message error"
              style={{
                padding: '1rem',
                backgroundColor: '#f8d7da',
                color: '#721c24',
                borderRadius: '4px',
                marginBottom: '1rem',
                border: '1px solid #f5c6cb'
              }}
            >
              Please fill in all required fields.
            </div>
          )}

          {/* The Form */}
          <form 
            id="form-testdrive"
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {/* Standard Form Fields */}
            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="firstName"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff'
                }}
              />
            </div>

            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="lastName"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff'
                }}
              />
            </div>

            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="email"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff'
                }}
              />
            </div>

            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="phone"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff'
                }}
              />
            </div>

            {/* Dynamic Dropdown: Locations */}
            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="location"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                Preferred Location*
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%231A1A1A\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" disabled>Select a location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location.value}>
                    {location.text}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic Dropdown: Models */}
            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="model"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                Preferred Model*
              </label>
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%231A1A1A\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" disabled>Select a model</option>
                {models.map((model, index) => (
                  <option key={index} value={model.value}>
                    {model.text}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic Dropdown: Times */}
            <div 
              className="form-group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <label 
                htmlFor="time"
                style={{
                  fontWeight: '600',
                  color: '#1A1A1A'
                }}
              >
                Preferred Time*
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: '#fff',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%231A1A1A\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="" disabled>Select a time</option>
                {times.map((time, index) => (
                  <option key={index} value={time.value}>
                    {time.text}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div 
              className="form-group button-group"
              style={{
                marginTop: '1rem'
              }}
            >
              <button 
                type="submit"
                className="cta-button"
                style={{
                  backgroundColor: '#E4002B',
                  color: 'white',
                  padding: '12px 24px',
                  fontWeight: '700',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  width: 'auto'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B60022';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#E4002B';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Info Column */}
      <div 
        className="test-drive-info-col"
        style={{
          flex: '1',
          minWidth: '300px',
          padding: '1.5rem',
          backgroundColor: '#F2F2F2',
          borderRadius: '8px'
        }}
      >
        {/* Why Test Drive Section */}
        <div 
          className="info-box why-voltrux"
          style={{
            marginBottom: '2rem'
          }}
        >
          <h3 
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1A1A1A',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid #E4002B'
            }}
          >
            Why Test Drive a Voltrux?
          </h3>
          <ul 
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
          >
            {whyItems.map((item, index) => (
              <li 
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#1A1A1A',
                  fontSize: '16px'
                }}
              >
                <span 
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0.25rem',
                    content: '"✓"',
                    color: '#E4002B',
                    fontWeight: 'bold'
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Info Section */}
        <div 
          className="info-box other-info"
          style={{
            fontSize: '14px',
            color: '#1A1A1A'
          }}
        >
          <h3 
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '0.5rem'
            }}
          >
            Contact & Location Info
          </h3>
          <p>For any questions, please contact us at <a href="tel:+15551234567">(555) 123-4567</a> or visit any of our locations during business hours (9 AM - 8 PM, Mon-Sat).</p>
          <p>After submitting your request, a representative will contact you within 24 hours to confirm your appointment.</p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .test-drive-container {
            flex-direction: column;
          }
          
          .test-drive-info-col {
            order: -1; /* Move info column to top on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default TestDriveFormPreview;