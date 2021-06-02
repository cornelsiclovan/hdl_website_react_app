import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/auth-context';

// import {useForm} from '../../shared/hooks/form-hook';

const ProductItem = props => {
    const auth = useContext(AuthContext);

    let qtyInCart = 0;
   

    if(props.qtyArray) {
        //console.log(props.qtyArray); 
        props.qtyArray.forEach(element => {
            if(element.productId === props.id){
                
                qtyInCart = element.qty;
            }
        });
    }

   

    return (
        <React.Fragment>
            <div className="card-item">
                    <h4 className="card-item__heading"> 
                        <span className="card-item__heading-span">{props.name}</span>
                        
                    </h4> 
                    {
                        auth.isLoggedIn &&
                        <div className="card-item__price">
                            <span style={{textTransform: 'uppercase'}}>{props.currency}</span> <b>{props.price}</b>
                    
                        </div>
                    }
                    {
                        auth.isLoggedIn &&
                        <div className="card-item__add">
                            <form  className="card-item__add-form">
                                <span style={{fontSize: 1.5+'rem'}}><b>Qty</b></span> 
                                <input className="card-item__input" onChange={props.qtyInputOnChangeHandler} id={`qtyInCart${props.id}`}/> 
                                <a href="" data-product_id={props.id} style={{fontSize: 1.5+'rem', marginLeft: 15+'px'}} onClick={props.onAddToCartClickHandler}>Add</a>
                            </form>
                        </div>
                    }
                    <img  className="card-item__picture" src={"http:\\\\localhost:3001\\"+props.image} />   
                       
                   
                    <div className="card-item__details">
                        <ul>
                            {
                                 auth.isLoggedIn &&
                                <li className="card-item__details--cart">
                                        IN CART: <b>{qtyInCart}</b>
                                        
                                        <div className="card-item__details--cart-action">
                                            <a href="" data-product_id={props.id} onClick={props.onRemoveProductFromCartHandler}> remove </a>
                                        </div>
                                
                                </li>
                            }
                                <li>{props.description}</li>
                                <li>{props.unitsInStock} units in stock</li>
                            
                        </ul>
                    </div>
                </div>
        </React.Fragment>
    );

};

export default ProductItem;