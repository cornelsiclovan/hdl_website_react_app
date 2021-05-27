import React, {useState} from 'react';

import img1 from "../../img/HDL-MD0206_432-05.jpg" ;
import img2 from "../../img/HDL-MC64-DALI_431-05.jpg";
import img3 from "../../img/HDL-MDLED0605_432-08.jpg";
import img4 from "../../img/HDL-MC64-DALI_431-05.jpg";


const ShoppingListItem = (props) => {
    let qty = 0;
    let image = "";

   props.currentOrder && props.currentOrder.orders[0].qtyArray.forEach(item => {
        if(item.productId === props.product._id){
           qty = item.qty;
           
           if(props.product.image !== null) {
               image = props.product.image[0];
    
           }
        }
        
    })

    return (
        <React.Fragment>
            
            { image != "" &&

           <ul class="section-cart__left--list">
                        <li class="section-cart__left--item">
                            <div class="section-cart__left--item-pull-left">
                            
                                <img src={"http:\\\\localhost:3001\\"+image} /> 
                                
                                <div class="section-cart__left--item-col">

                                        <b>{props.product.name}</b>
                                        <span><b>Out of stock</b></span>

                                        <br/>
                                        <br/>
                                        <div> 
                                        <form  className="card-item__add-form">
                                            <span style={{fontSize: 1.5+"rem"}}>Qty</span>  
                                           
                                            <input 
                                                class="section-cart__left--item-col-qty" 
                                                type="text"
                                                onChange={props.qtyInputOnChangeHandler}
                                                />
                                            <b>
                                                <a href='' 
                                                   style={{fontSize: 12+'px', textDecoration: "none"}}
                                                   data-product_id={props.product._id}
                                                   onClick={props.onAddToCartClickHandler}
                                                   >
                                                       Update
                                                </a>
                                                &nbsp;&nbsp;  
                                                
                                                <b style={{fontSize:14+'px', color:'#81398a'}}>
                                                    in cart: {qty}
                                                </b> 
                                                &nbsp;&nbsp;

                                                <a href='' 
                                                   style={{fontSize: 12+'px', textDecoration: "none"}} 
                                                   data-product_id={props.product._id} 
                                                   onClick={props.onRemoveProductFromCartHandler}>
                                                       Remove
                                                </a>  
                                             
                                            </b>
                                        </form>
                                     
                                        </div>
                                </div> 
                            </div>
                            <div class="section-cart__left--item-col">
                                <b>{qty * props.product.price}&nbsp;Eur</b>
                                
                            </div>
                        </li>               
                    </ul>
                    }
        </React.Fragment>
    );
}

export default ShoppingListItem;