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

const Processed = () => {
    const auth = useContext(AuthContext);
    const [orders, setOrders] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedOrders, setLoadedOrders] = useState(false);


    useEffect(() => {

        const fetchOrders = async () => {
            try { 
                
            const responseData = await sendRequest(
                `http://localhost:3001/api/orders?status=1&inCart=false`,
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

    return (
        <React.Fragment>
        <Header />
        <Navigation />
        <Menu admin={true}/>
        <OrderMenu processed={true} />
        {!isLoading && orders && 
             <OrderList orders={orders}/>
         }
        <Pagination />
        <Footer />
     </React.Fragment>
    );
       
}

export default Processed;