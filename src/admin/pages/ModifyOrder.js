import React, { useEffect, useState, useContext, useRef } from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import OrderMenu from '../components/OrdersMenu';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";
import ShoppingList from "../../shopping-cart/components/ShoppingList";
import { useParams } from 'react-router-dom';
import ModifyOrderList from '../components/ModifyOrderList';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ModifyOrder = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [currentOrder, setCurrentOrder] = useState();
    
    const [qty, setQty] = useState(0);

    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);

    const currentOrderLoaded = useRef(false);
    const orderedProductsSet = useRef(false);
    const qtyArraySet = useRef(false);
    const orderId = useParams().orderId;

    useEffect(async () => {

        const fetchOrder = async () => {
            try{
                const responseData = await sendRequest(`${BASE_URL}/api/orders/${orderId}`);
               

                //console.log(responseData);

                if(currentOrderLoaded.current === false) {
                    setCurrentOrder(responseData);
                    currentOrderLoaded.current = true;
                }
               
                //console.log(responseData);

                let orderedProductsTemp = [];
               
                responseData.products.forEach(product => {
      
                    let orderedProduct = {
                        productId: product._id
                    };

                   
                    orderedProductsTemp.push(orderedProduct);
                   
                });


                let qtyArrayTemp = [];
                currentOrder.qtyArray.forEach(item => {
      
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
                    const responseData = await sendRequest(`${BASE_URL}/api/orders/`, 
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

                currentOrder.products = orderedProductsTemp;

                currentOrder.qtyArray = qtyArrayTemp;

                setQtyArray(qtyArrayTemp);
                setOrderedProducts(orderedProductsTemp);

                setCurrentOrder(currentOrder);

                

                try {
                    const responseData = await sendRequest(`${BASE_URL}/api/orders/${currentOrder._id}`, 
                            'PUT',
                            JSON.stringify({
                                userId: auth.userId,
                                products: orderedProductsTemp,
                                qtyArray: qtyArrayTemp,
                                inCart: false
                            }),
                            {
                            'Content-Type': 'application/json'
                            }
                        );
                        currentOrderLoaded.current = false;
                   
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

            currentOrder.qtyArray = qtyArrayTemp;

            console.log(qtyArrayTemp);
            console.log(orderedProductsTemp);

            if(qtyArrayTemp.length === 0) {
                console.log(true);
            }

            setCurrentOrder(currentOrder);

            
            if(qtyArrayTemp.length === 0) {
                try {
                    const responseData = await sendRequest(`${BASE_URL}/api/orders/${currentOrder._id}`, 
                        'DELETE'
                        )
                        currentOrderLoaded.current = false;
                }catch (error) {
                    console.log(error);
                }
            } else {
    
                try {
                    const responseData = await sendRequest(`${BASE_URL}/api/orders/${currentOrder._id}`, 
                            'PUT',
                            JSON.stringify({
                                userId: auth.userId,
                                products: orderedProductsTemp,
                                qtyArray: qtyArrayTemp,
                                inCart: false
                            }),
                            {
                            'Content-Type': 'application/json'
                            }
                            )
                            currentOrderLoaded.current = false;
                } catch (err) {} 
                }
        }
    }
    

    const qtyInputOnChangeHandler = (e) => {
      
        setQty(e.target.value);
    }


    return (
        <React.Fragment>
            <Header />
           <Navigation/>
           <Menu admin={true}/>
           <OrderMenu admin={true} />
           {
                !isLoading && 
                currentOrder && 
                <ModifyOrderList 
                    modify={true}
                    currentOrder={currentOrder} 
                    qtyInputOnChangeHandler={qtyInputOnChangeHandler}
                    onRemoveProductFromCartHandler={onRemoveProductFromCartHandler}
                    onAddToCartClickHandler={onAddToCartClickHandler}
                    />
            }
           <Footer/>
        </React.Fragment>
    );
}

export default ModifyOrder;