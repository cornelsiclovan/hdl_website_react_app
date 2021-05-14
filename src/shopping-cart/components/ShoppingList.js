import React from 'react';


import img1 from "../../img/HDL-MD0206_432-05.jpg" ;
import img2 from "../../img/HDL-MC64-DALI_431-05.jpg";
import img3 from "../../img/HDL-MDLED0605_432-08.jpg";
import img4 from "../../img/HDL-MC64-DALI_431-05.jpg";

const ShoppingList = () => {

    return(
        <React.Fragment>
            <div class="continue-shopping"> 
                 <h1 style={{color:"black"}}>Your shopping cart</h1>
            </div>
            <div class="section-cart">
                <div class="section-cart__left">
                    <ul class="section-cart__left--list">
                        <li class="section-cart__left--item">
                            <div class="section-cart__left--item-pull-left">
                            
                                <img src={img1} /> 
                                
                                <div class="section-cart__left--item-col">

                                        <b>HDL-MPLPI.48-A</b>
                                        <span><b>Out of stock</b></span>

                                        <br/>
                                        <br/>
                                        <div> 
                                            <span style={{fontSize: 1.5+"rem"}}>Qty</span>  
                                            <input class="section-cart__left--item-col-qty" value="1">
                                                
                                            </input>
                                            <b>
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Update</a>&nbsp;&nbsp;  
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Remove</a>  
                                            </b>
                                        </div>
                                </div> 
                            </div>
                            <div class="section-cart__left--item-col">
                                <b>10.80&nbsp;Eur</b>
                            </div>
                        </li>
                        <li class="section-cart__left--item">
                            <div class="section-cart__left--item-pull-left">
                            
                                <img src={img3} /> 
                                
                                <div class="section-cart__left--item-col">

                                        <b>HDL-MPLPI.48-A</b>
                                        <span><b>Out of stock</b></span>

                                        <br/>
                                        <br/>
                                        <div> 
                                            <span style={{fontSize: 1.5+"rem"}}>Qty</span>  
                                            <input class="section-cart__left--item-col-qty" value="1">
                                                
                                            </input>
                                            <b>
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Update</a>&nbsp;&nbsp;  
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Remove</a>  
                                            </b>
                                        </div>
                                </div> 
                            </div>
                            <div class="section-cart__left--item-col">
                                <b>10.80&nbsp;Eur</b>
                            </div>
                        </li>
                        <li class="section-cart__left--item">
                            <div class="section-cart__left--item-pull-left">
                            
                                <img src={img2} /> 
                                
                                <div class="section-cart__left--item-col">

                                        <b>HDL-MPLPI.48-A</b>
                                        <span><b>Out of stock</b></span>

                                        <br/>
                                        <br/>
                                        <div> 
                                            <span style={{fontSize: 1.5+"rem"}}>Qty</span>  
                                            <input type="text" class="section-cart__left--item-col-qty" value=""/>
                                            <b>
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Update</a>&nbsp;&nbsp;  
                                                <a href style={{fontSize: 12+'px', textDecoration: "none"}}>Remove</a>  
                                            </b>
                                        </div>
                                </div> 
                            </div>
                            <div class="section-cart__left--item-col">
                                <b>10.80&nbsp;Eur</b>
                            </div>
                        </li>
                       
                    </ul>  
                </div>    
                <div class="section-cart__right">
                    <div class="section-cart__right--card">
                        <ul class="section-cart__right--list">
                            <li class="section-cart__right--item">
                                <span class="section-cart__text">
                                    Subtotal (excl. VAT) 
                                </span>
                                <span class="section-cart__price">
                                    10.80 Eur 
                                </span>
                            </li>
                            <li class="section-cart__right--item">
                                <span class="section-cart__text">
                                    <b>Total with tax</b>
                                </span>
                                <span class="section-cart__price">
                                    <b>10.80 Eur</b>
                                </span>
                            </li>
                        </ul>
                        <span class="section-cart__right--comment">Review your shopping cart and checkout</span>
                    </div>
                    <center>
                        <button style={{marginTop: 1+"rem"}} class="btn btn--mov">
                            Checkout   
                        </button>
                    </center>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShoppingList;