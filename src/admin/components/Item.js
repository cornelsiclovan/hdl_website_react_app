import React, {useState} from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Item = (props) => {
    // console.log(props.modifyEnabled);

    let image = props.item.image[0];
    // console.log(props.qtyObject);

    let qty = 0;

    props.order && props.order.qtyArray.forEach(item => {
        if(item.productId === props.item._id){
           qty = item.qty;
           
        //    if(props.product.image !== null) {
        //        image = props.product.image[0];
    
        //    }
        }
        
    })


    return (
        <React.Fragment>
         
            <ul class="section-cart__left--list">
                <li class="section-cart__left--item">
                    <div class="section-cart__left--item-pull-left">
                        {/* <img src={"http:\\\\localhost:3001\\"+image} />  */}

                        <img src={`${BASE_URL}/${image}`} />         

                        <div class="section-cart__left--item-col">

                                <b>{props.item.name}</b>
                                <span><b>Out of stock</b></span>

                                <br/>
                                <br/>
                                <div> 
                                   <div>Quantity: {qty}</div>
 
                                    {/* -------------------------------------- */}

                                  {/* {  
                                    
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
                                                data-product_id={props.item._id}
                                                onClick={props.onAddToCartClickHandler}
                                                >
                                                    Update
                                            </a>
                                            &nbsp;&nbsp;  
                                            
                                            <b style={{fontSize:14+'px', color:'#81398a'}}>
                                                in order: {qty}
                                            </b> 
                                            &nbsp;&nbsp;

                                            <a href='' 
                                                style={{fontSize: 12+'px', textDecoration: "none"}} 
                                                data-product_id={props.item._id} 
                                                onClick={props.onRemoveProductFromCartHandler}>
                                                    Remove
                                            </a>  
                                            </b>
                                        </form>
                                    } */}

                                    {/* -------------------------------------- */}
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