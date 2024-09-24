import React from 'react';

function Product() {
  return (
    <>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        <div className="card" style={{ width: '20rem', marginLeft:'30px' }}>
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
            src="https://clippingpathstudioindia.com/services/images/more_services/ecommerce/e-commerec_image15.jpg" 
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
            src="https://media.licdn.com/dms/image/D4E12AQGaeBCdjfjwSA/article-cover_image-shrink_720_1280/0/1687882195538?e=2147483647&v=beta&t=XprkSZYRQFXBG5eX_fzmEMikeMMgX-N_73SC9-Oka-k" 
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
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/251233841/original/1e652ffe1238e548c0c911a0768113b178c9b631/ecommerce-product-photo-editing-adobe-photoshop-retouching.jpg" 
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

export default Product;
