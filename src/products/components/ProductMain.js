import React from 'react';
import { Link } from 'react-router-dom';

const ProductMain = () => {

    return (
        <React.Fragment>
              <div className="continue-shopping"> 
                
                <Link className="btn-text" to="/products">
                    <a  style={{paddingTop:"2rem"}}> &larr; &nbsp; continue shopping &nbsp;  </a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default ProductMain;