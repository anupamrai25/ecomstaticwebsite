import React from 'react';
import './ContactUs.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactUs = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact us</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Get in Touch</h5>
          <p>We’d love to hear from you. Please feel free to reach out for any queries.</p>
          <ul className="list-unstyled">
            <li><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</li>
            <li><i className="bi bi-envelope"></i> contact@yourcompany.com</li>
            <li><i className="bi bi-telephone"></i> +123 456 7890</li>
          </ul>

          <div className="map-container mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.874121065187!2d144.9559283156591!3d-37.81720974210238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57763b479ecf5dd!2sYour%20Office!5e0!3m2!1sen!2s!4v1630136484785!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        <div className="col-md-6">
          <h5>Send Us a Message</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
