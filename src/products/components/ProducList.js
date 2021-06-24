import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    let qtyArray = [];


    if(props.currentOrder){ 
       // console.log("product list current order", props.currentOrder);
        qtyArray = props.currentOrder.orders[0].qtyArray;
    }

    return (

        <React.Fragment>
            <div className="section-products"> 
                {
                    
                    props.loadedProducts && props.loadedProducts.map(product => {

                        return <ProductItem 
                            key = {product._id}
                            id = {product._id}
                            name = {product.name}
                            price = {product.price}
                            currency = {product.currency}
                            description = {product.description.split(',')[0]}
                            unitsInStock = {product.unitsInStock}
                            image = {product.image[0]}
                            qtyArray = {qtyArray}
                            onAddToCartClickHandler = {props.onAddToCartClickHandler}
                            onRemoveProductFromCartHandler = {props.onRemoveProductFromCartHandler}
                            onRemoveProductFromStockHandler = {props.onRemoveProductFromStockHandler}
                            qtyInputOnChangeHandler = {props.qtyInputOnChangeHandler}
                            onAddToStockClickHandler = {props.onAddToStockClickHandler}
                            admin = {props.admin}
                            />
                    
                    
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default ProductList;