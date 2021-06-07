import React, {useEffect, useContext, useState, useRef} from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';
import Pagination from '../../products/components/Pagination'

import OrderList from '../components/OrdersList';
import OrderMenu from '../components/OrdersMenu';

const Admin = () => {
    const auth = useContext(AuthContext);
    const [orders, setOrders] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedOrders, setLoadedOrders] = useState(false);
    const [qtyForUpdate, setQtyForUpdate] = useState();

    // for updating orders as admin
    const [modifyEnabled, setModifyEnabled] = useState(false);
    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);
    const currentOrderLoaded = useRef(false);
    const orderedProductsSet = useRef(false);
    const qtyArraySet = useRef(false);
    

    useEffect(() => {

        const fetchOrders = async () => {
            try { 
                
            const responseData = await sendRequest(
                `http://localhost:3001/api/orders?status=0&inCart=false`,
                'GET',
                null,
                {
                    'x-auth-token': auth.token
                }
                );
             
                setOrders(responseData);


                console.log(responseData);
            } catch(err) {}
        }

       
            fetchOrders();
        
       
     }, [sendRequest, loadedOrders]);

    const onProcessedClickHandler = async (event) => {
        event.preventDefault();
        console.log(event.target.dataset.order_id);
       
        try {
        const responseData = await sendRequest(
            `http://localhost:3001/api/orders/${event.target.dataset.order_id}`,
            'PUT',
            JSON.stringify({
                status: 1
            }),
            {
                'Content-Type': 'application/json'
            }
            );
          
        
           setLoadedOrders(!loadedOrders);
          
        } catch(error) {}
    }

    const onRejectClickHandler = async (event) => {
        event.preventDefault();
        console.log(event.target.dataset.order_id);
       
        try {
        const responseData = await sendRequest(
            `http://localhost:3001/api/orders/${event.target.dataset.order_id}`,
            'PUT',
            JSON.stringify({
                status: 3
            }),
            {
                'Content-Type': 'application/json'
            }
            );
          
        
           setLoadedOrders(!loadedOrders);
          
        } catch(error) {}
    }
     
    // modify order as admi

    const qtyInputOnChangeHandler = (event) => {
        event.preventDefault();

        console.log(event.target.value);
        setQtyForUpdate(event.target.value);
    }

    const onAddToCartClickHandler = (event) => {
        event.preventDefault();

        console.log("add to cart click handler");
    }

    const onRemoveProductFromCartHandler = (event) => {
        event.preventDefault();

        console.log("on remove from cart click handler");
    }


    return (
        <React.Fragment>
           <Header />
           <Navigation />
           <Menu admin={true}/>
           <OrderMenu admin={true} />
           {!isLoading && orders && 
            <OrderList orders={orders} 
                        onProcessedClickHandler={onProcessedClickHandler}
                        onRejectClickHandler={onRejectClickHandler}
                        qtyInputOnChangeHandler={qtyInputOnChangeHandler}
                        onAddToCartClickHandler={onAddToCartClickHandler}
                        onRemoveProductFromCartHandler={onRemoveProductFromCartHandler}
                        />
            }
           <Pagination />
           <Footer />
        </React.Fragment>
    )
}

export default Admin;