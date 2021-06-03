import React from 'react';


const Item = (props) => {
    
    let qty = props.qtyObject.qty;
    let image = props.item.image[0];

    return (
        <React.Fragment>
         
            <ul class="section-cart__left--list">
                <li class="section-cart__left--item">
                    <div class="section-cart__left--item-pull-left">
                        <img src={"http:\\\\localhost:3001\\"+image} /> 
                                
                        <div class="section-cart__left--item-col">

                                <b>{props.item.name}</b>
                                <span><b>Out of stock</b></span>

                                <br/>
                                <br/>
                                <div> 
                                   <div>Quantity: {qty}</div>
 
                                   
                                </div>
                        </div> 
                    </div>
                    <div class="section-cart__left--item-col">
                        <b>{qty * props.item.price}&nbsp;Eur</b>
                        
                    </div>
                </li>               
            </ul>
        </React.Fragment>   
    );
};

export default Item;