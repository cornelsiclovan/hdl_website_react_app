import React, {useEffect, useState, useContext} from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingCart from '../../shared/components/UIElements/Shopping-cart';
import AccountMenu from '../components/AccountMenu';
import OrderHistoryMain from '../components/OrderHistoryMain';
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';

const OrderHistory = () => {
    const auth = useContext(AuthContext);
    const [orders, setOrders] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    useEffect(async () => {
        const responseData = await sendRequest(
            `http://localhost:3001/api/orders/user/${auth.userId}/completed?inCart=false`,
            'GET',
            null,
            {
                'x-auth-token': auth.token
            }
            );
        setOrders(responseData);
    }, [sendRequest]);

    if(orders)
        console.log(orders);

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            <AccountMenu orderHistory={true}/>
            <ShoppingCart />
            {!isLoading && orders && <OrderHistoryMain orders={orders}/>}
            <Footer />
        </React.Fragment>
    );
}

export default OrderHistory;