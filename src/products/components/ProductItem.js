import React from 'react';

const ProductItem = props => {

    return (
        <React.Fragment>
            <div class="card-item">
                    <h4 class="card-item__heading"> 
                        <span class="card-item__heading-span">{props.name}</span>
                        
                    </h4> 
                    <img  class="card-item__picture" src={"http:\\\\localhost:3001\\"+props.image} />   
                       
                   
                    <div class="card-item__details">
                        <ul>
                            <li>{props.description}</li>
                            <li>{props.unitsInStock} units in stock</li>
                        </ul>
                    </div>
                </div>
        </React.Fragment>
    );

};

export default ProductItem;