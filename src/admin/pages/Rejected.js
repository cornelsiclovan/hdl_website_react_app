import React, {useEffect, useContext, useState, useRef} from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';
import Pagination from '../../products/components/Pagination';

import OrderList from '../components/OrdersList';
import OrderMenu from '../components/OrdersMenu';

const Rejected = () => {
    const auth = useContext(AuthContext);
    const [orders, setOrders] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedOrders, setLoadedOrders] = useState(false);

    useEffect(() => {

        const fetchOrders = async () => {
            try { 
                
            const responseData = await sendRequest(
                `http://localhost:3001/api/orders?status=3&inCart=false`,
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
    
  
     const onUnrejectClickHandler =async (event) => {
        event.preventDefault();
        console.log(event.target.dataset.order_id);

        try {
            const responseData = await sendRequest(
                `http://localhost:3001/api/orders/${event.target.dataset.order_id}?unreject=true`,
                'PUT',
                JSON.stringify({
                    status: 0
                }),
                {
                    'Content-Type': 'application/json'
                }
                );
              
            
               setLoadedOrders(!loadedOrders);
              
            } catch(error) {}
     }

    return (
        <React.Fragment>
        <Header />
        <Navigation />
        <Menu admin={true}/>
        <OrderMenu rejected={true} />
        {!isLoading && orders && 
             <OrderList orders={orders} 
                        onUnrejectClickHandler={onUnrejectClickHandler}
                       />
         }
        <Pagination />
        <Footer />
     </React.Fragment>
    );
       
}

export default Rejected;