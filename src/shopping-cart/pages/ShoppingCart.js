import React, { useEffect, useState, useContext, useRef } from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingList from '../components/ShoppingList';
import ShoppingMain from '../components/ShoppingMain';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";



const ShoppingCart = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
    const [currentOrder, setCurrentOrder] = useState();
    
    const [qty, setQty] = useState(0);

    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);

    const currentOrderLoaded = useRef(false);
    const orderedProductsSet = useRef(false);
    const qtyArraySet = useRef(false);

    useEffect(async () => {

        const fetchOrder = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:3001/api/orders/user/${auth.userId}?inCart=true`);
               

                if(currentOrderLoaded.current === false) {
                    setCurrentOrder(responseData);
                    currentOrderLoaded.current = true;
                }
               

                let orderedProductsTemp = [];
               
                responseData.orders[0].products.forEach(product => {
      
                    let orderedProduct = {
                        productId: product._id
                    };

                   
                    orderedProductsTemp.push(orderedProduct);
                   
                });


                let qtyArrayTemp = [];
                currentOrder.orders[0].qtyArray.forEach(item => {
      
                    let itemQty = {
                        productId: item.productId,
                        qty: item.qty
                    };


                    qtyArrayTemp.push(itemQty);
                   
                });
  

                if(!qtyArraySet.current) {
                    setQtyArray(qtyArrayTemp);
                    qtyArraySet.current = true;
                }
                   
                if(!orderedProductsSet.current) {
                    setOrderedProducts(orderedProductsTemp);
                    orderedProductsSet.current = true;
                }

            } catch (err) {} 
        }

      
        fetchOrder();

    }, [sendRequest,  auth, currentOrder, qtyArray, orderedProducts]);

    const onAddToCartClickHandler = async (e) => {
        e.preventDefault();
        // console.log("Add to cart click handler");

        if(qty != 0){
            if(currentOrder === undefined) {
                // console.log("creating order");

                orderedProducts.push(
                    {
                        productId : e.target.dataset.product_id
                    }
                );

                qtyArray.push(
                    {
                        productId : e.target.dataset.product_id,
                        qty: qty
                    }
                );
                
                setCurrentOrder(
                    {
                        orders:[{
                            userId: auth.userId,
                            products: orderedProducts,
                            qtyArray: qtyArray,
                            inCart: true
                            }
                        ]
                    }
                );

                try {
                    const responseData = await sendRequest(`http://localhost:3001/api/orders/`, 
                            'POST',
                            JSON.stringify({
                                userId: auth.userId,
                                products: orderedProducts,
                                qtyArray: qtyArray,
                                inCart: true
                            }),
                            {
                            'Content-Type': 'application/json'
                            }
                        )
            
                } catch (err) {}

            } else {
                currentOrderLoaded.current = false;


                let qtyArrayTemp = qtyArray.filter( item =>
                        item.productId != e.target.dataset.product_id
                    );
                
                let  orderedProductsTemp = orderedProducts.filter( product =>  
                        product.productId != e.target.dataset.product_id
                    );

                orderedProductsTemp.push({
                    productId : e.target.dataset.product_id
                });

                qtyArrayTemp.push({
                    productId : e.target.dataset.product_id,
                    qty: qty
                });

                currentOrder.orders[0].products = orderedProductsTemp;

                currentOrder.orders[0].qtyArray = qtyArrayTemp;

                setQtyArray(qtyArrayTemp);
                setOrderedProducts(orderedProductsTemp);

                setCurrentOrder(currentOrder);

                try {
                    const responseData = await sendRequest(`http://localhost:3001/api/orders/${currentOrder.orders[0]._id}`, 
                            'PUT',
                            JSON.stringify({
                                userId: auth.userId,
                                products: orderedProductsTemp,
                                qtyArray: qtyArrayTemp,
                                inCart: true
                            }),
                            {
                            'Content-Type': 'application/json'
                            }
                        );
                } catch (err) {}
            }
        }
        
        setQty(0);
    }

    const onRemoveProductFromCartHandler = async (e) => {
        e.preventDefault();
        if(currentOrder != undefined) {
            currentOrderLoaded.current = false;
            // console.log("Remove product from cart handler");

            let qtyArrayTemp = qtyArray.filter(item =>{
            
                return item.productId != e.target.dataset.product_id
                });
            
            let  orderedProductsTemp = orderedProducts.filter(product => 
                 product.productId != e.target.dataset.product_id);
        
            
                
            setQtyArray(qtyArrayTemp);
            setOrderedProducts(orderedProductsTemp);

            currentOrder.orders[0].qtyArray = qtyArrayTemp;

            setCurrentOrder(currentOrder);
    
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/orders/${currentOrder.orders[0]._id}`, 
                        'PUT',
                        JSON.stringify({
                            userId: auth.userId,
                            products: orderedProductsTemp,
                            qtyArray: qtyArrayTemp,
                            inCart: true
                        }),
                        {
                        'Content-Type': 'application/json'
                        }
                        )
            } catch (err) {}
        }
    }
    

    const qtyInputOnChangeHandler = (e) => {
        console.log(e.target.value);
        setQty(e.target.value);
    }


    return(
        <React.Fragment>
            <Header />
            <Navigation />
            <ShoppingMain shoppingCart={true}/>
            {
                !isLoading && 
                currentOrder && 
                <ShoppingList 
                    currentOrder={currentOrder} 
                    qtyInputOnChangeHandler={qtyInputOnChangeHandler}
                    onRemoveProductFromCartHandler={onRemoveProductFromCartHandler}
                    onAddToCartClickHandler={onAddToCartClickHandler}
                    />
            }
            <Footer />
        </React.Fragment>
    )
}

export default ShoppingCart;