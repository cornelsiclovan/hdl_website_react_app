import React from 'react';

import img1 from "../../img/HDL-MD0206_432-05.jpg" ;
import img2 from "../../img/HDL-MC64-DALI_431-05.jpg";
import img3 from "../../img/HDL-MDLED0605_432-08.jpg";
import img4 from "../../img/HDL-MC64-DALI_431-05.jpg";


const ShoppingListItem = (props) => {
    let qty = 0;

   props.currentOrder && props.currentOrder.orders[0].qtyArray.forEach(item => {
        if(item.productId === props.product._id)
            qty = item.qty;
    })

    return (
        <React.Fragment>
           <ul class="section-cart__left--list">
                        <li class="section-cart__left--item">
                            <div class="section-cart__left--item-pull-left">
                            
                                <img src={img1} /> 
                                
                                <div class="section-cart__left--item-col">

                                        <b>{props.product.name}</b>
                                        <span><b>Out of stock</b></span>

                                        <br/>
                                        <br/>
                                        <div> 
                                            <span style={{fontSize: 1.5+"rem"}}>Qty</span>  
                                            <input 
                                                class="section-cart__left--item-col-qty" 
                                                type="text" 
                                                value={qty}
                                                />
                                            <b>
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Update</a>&nbsp;&nbsp;  
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Remove</a>  
                                            </b>
                                        </div>
                                </div> 
                            </div>
                            <div class="section-cart__left--item-col">
                                <b>{props.product.price}&nbsp;Eur</b>
                            </div>
                        </li>               
                    </ul>  
        </React.Fragment>
    );
}

export default ShoppingListItem;