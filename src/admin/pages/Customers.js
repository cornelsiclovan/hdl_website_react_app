import React, {useEffect, useState, useContext} from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';

import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';
import Pagination from '../../products/components/Pagination'
import CustomerList from '../components/CustomerList';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Customers = (props) => {
    const auth = useContext(AuthContext);
    const [customers, setCustomers] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    useEffect(() => {

        const fetchCustomers = async () => {
            try { 
                
            const responseData = await sendRequest(
                `${BASE_URL}/api/users/admin/${auth.userId}`,
                'GET',
                null,
                {
                    'x-auth-token': auth.token
                }
                );
             
                console.log(responseData);
                setCustomers(responseData);
            } catch(err) {}
        }

       
            fetchCustomers();
        
       
     }, [sendRequest]);

    return (
        <React.Fragment>
           <Header />
           <Navigation />
           <Menu customers={true}/>
           {!isLoading && customers && <CustomerList customers={customers}/>}
           <Footer />
        </React.Fragment>
    )
}

export default Customers;