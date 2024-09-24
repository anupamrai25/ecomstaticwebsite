import React from 'react';
import Card from './Card'
import Crousels from './Crousels';
import Product from './Product'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Productoffer from './Productoffer';

function Nav() {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#a6b1e1' }}>

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{marginLeft:'300px', fontWeight: ''}}>
                            <Link className="nav-link" to="/home">Home</Link>

                            </li>
                            <li className="nav-item" style={{marginLeft:"30px"}}>
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>

                            <li className="nav-item" style={{marginLeft:"30px"}}>
                            <Link className="nav-link" to="">About us</Link>
                            </li>
                        
                        </ul>
                        <form className="d-flex" role="search" style={{marginRight:"200px"}}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <div style={{ height: '440px', width: 'auto' }}>
  <img 
    src="https://themefisher.com/blog/effect.webp" 
    alt="Description of image"
    style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
  />
</div>
<Card/>
<Crousels/>
<Product/>
<Productoffer/>
<Footer/>


        </>
    );
}

export default Nav;
