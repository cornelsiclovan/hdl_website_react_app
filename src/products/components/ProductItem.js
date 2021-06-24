import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                        <a href={`/product/${props.id}`} style={{textDecoration: 'none'}}>
                            <h4 className="card-item__heading"> 
                                <span className="card-item__heading-span">{props.name}</span>
                                
                            </h4> 
                        </a>
                        {
                            auth.isLoggedIn &&
                            <div className="card-item__price">
                                <span style={{textTransform: 'uppercase'}}>{props.currency}</span> <b>{props.price}</b>
                        
                            </div>
                        }
                        {
                            auth.isLoggedIn && !props.admin &&
                            <div className="card-item__add">
                                <form  className="card-item__add-form">
                                    <span style={{fontSize: 1.5+'rem'}}><b>Qty</b></span> 
                                    <input className="card-item__input" onChange={props.qtyInputOnChangeHandler} id={`qtyInCart${props.id}`}/> 
                                    <a href="" data-product_id={props.id} style={{fontSize: 1.5+'rem', marginLeft: 15+'px'}} onClick={props.onAddToCartClickHandler}>Add</a>
                                </form>
                            </div>
                        }

                        {
                            auth.isLoggedIn && props.admin &&
                            <div className="card-item__add">
                                <form  className="card-item__add-form">
                                    <span style={{fontSize: 1.5+'rem'}}><b>In stock</b></span> 
                                    <input className="card-item__input" onChange={props.qtyInputOnChangeHandler} id={`qtyInCart${props.id}`}/> 
                                    <a href="" data-product_id={props.id} style={{fontSize: 1.5+'rem', marginLeft: 15+'px'}} onClick={props.onAddToStockClickHandler}>Add</a>
                                </form>
                            </div>
                        }

                        
                        <img  className="card-item__picture" src={"http:\\\\localhost:3001\\"+props.image} />   
                        
                    
                        <div className="card-item__details">
                            <ul>
                                {
                                    auth.isLoggedIn && !props.admin &&
                                    <li className="card-item__details--cart">
                                            IN CART: <b>{qtyInCart}</b>
                                            
                                            <div className="card-item__details--cart-action">
                                                <a href="" data-product_id={props.id} onClick={props.onRemoveProductFromCartHandler}> remove </a>
                                            </div>
                                    
                                    </li>
                                }

                                {
                                    auth.isLoggedIn && props.admin &&
                                    <li className="card-item__details--cart">
                                            IN STOCK: <b>{props.unitsInStock}</b>
                                            
                                            <div className="card-item__details--cart-action">
                                                <a href="" data-product_id={props.id} onClick={props.onRemoveProductFromStockHandler}> remove </a>
                                            </div>
                                    
                                    </li>
                                }
                                    <li>{props.description}</li>
                                    <li>{props.unitsInStock} units in stock</li>
                                { props.admin &&
                                    <li>
                                        <a  href=""
                                            style={{
                                                width:'50px',
                                                padding: 5+'px', 
                                                backgroundColor: 'orangered',
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginBottom: 10+'px',
                                                float: 'right',
                                                borderRadius: '5%'
                                            }}
                                            >delete</a>
                                        <a  href={`/edit-product/${props.id}`}
                                            style={{
                                                width:'50px',
                                                padding: 5+'px', 
                                                backgroundColor: 'yellowgreen',
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginBottom: 10+'px',
                                                float: 'left',
                                                borderRadius: '5%'
                                            }}>edit</a>
                                    </li>}
                            </ul>
                        </div>
                    </div>

        </React.Fragment>
    );

};

export default ProductItem;