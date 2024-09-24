import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={{background:'gray'}}>
    <div className="container text-center mt-0">
      <h1 style={{}}>Welcome to Our Website!</h1>
      <p>This is the homepage of our awesome website. Explore our content and get in touch with us!</p>
      
      <img 
        src="https://thumbs.dreamstime.com/b/friendship-girls-unsplash-generate-ai-290623910.jpg" 
        alt="Placeholder" 
        className="img-fluid my-4"
        style={{ width: '100%', height: 'auto' }}
      />
      
      <Link to="/contactus" className="btn btn-primary">Contact Us</Link>
    </div>
    </div>
  );
}

export default Home;
