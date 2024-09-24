import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div style={{marginTop:'20px'}}>
    <footer className="text-light py-4" style={{background:'#385170'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="small">
              our Company is a leading provider of high-quality services in the industry. We strive to deliver excellence and innovation to our customers.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-decoration-none text-light">About Us</a></li>
              <li><a href="/services" className="text-decoration-none text-light">Our Services</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact Us</a></li>
              <li><a href="/careers" className="text-decoration-none text-light">Careers</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</li>
              <li><i className="bi bi-envelope"></i> support@yourcompany.com</li>
              <li><i className="bi bi-telephone"></i> +123 456 7890</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6">
            <p>Follow us on:</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          <div className="col-md-6 text-md-end">
            <p className="mb-0">© {currentYear} our Company Name. All rights reserved.</p>
            <a href="/privacy-policy" className="text-decoration-none text-light">Privacy Policy</a> | 
            <a href="/terms" className="text-decoration-none text-light ms-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
