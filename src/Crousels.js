import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Crousels() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '500px' }}>
            <img
              src="https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="First slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="carousel-item" style={{ height: '500px' }}>
            <img
              src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="Second slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="carousel-item" style={{ height: '500px' }}>
            <img
              src="https://yithemes.com/wp-content/uploads/2023/04/80-product-slider.jpg"
              className="d-block w-100"
              alt="Third slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Crousels;
