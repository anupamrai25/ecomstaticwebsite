import React from 'react';

function Productoffer() {
  return (
    <>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div className="card" style={{ width: '20rem', marginLeft:'30px' }}>
          <img 
            src="https://www.hqts.com/wp-content/uploads/2023/07/Blog-Image-1-1.png" 
            className="card-img-top" 
            alt="Product Image" 
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '20rem' }}>
          <img 
            src="https://media.bazaarvoice.com/Shutterstock_1875797686-1030x541.png" 
            className="card-img-top" 
            alt="Product Image" 
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '20rem' }}>
          <img 
            src="https://5.imimg.com/data5/SELLER/Default/2021/11/JU/IF/CF/11337912/e-commerce-product-image-editing-services.jpg" 
            className="card-img-top" 
            alt="Product Image" 
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: '20rem' }}>
          <img 
            src="https://www.notiontechnologies.com/blog/wp-content/uploads/2020/07/ecommerce-product-photography-1-1024x683.jpg" 
            className="card-img-top" 
            alt="Product Image" 
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productoffer;
