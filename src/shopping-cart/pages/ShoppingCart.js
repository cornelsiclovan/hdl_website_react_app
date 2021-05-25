import React, { useEffect, useState, useContext } from 'react';
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

    useEffect(async () => {

        try{
            
            const responseData = await sendRequest(`http://localhost:3001/api/orders/user/${auth.userId}?inCart=true`);
            
            setCurrentOrder(responseData);
        } catch(error) {}

    }, [sendRequest]);

    return(
        <React.Fragment>
            <Header />
            <Navigation />
            <ShoppingMain />
            {!isLoading && currentOrder && <ShoppingList currentOrder={currentOrder} />}
            <Footer />
        </React.Fragment>
    )
}

export default ShoppingCart;