import React, {useEffect, useState, useContext} from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import AdminProductList from '../components/AdminProductList';
import Header from '../components/Header';
import Menu from '../components/Menu';

import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';


const AdminProducts = (props) => {
    const auth = useContext(AuthContext);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const {loadedProducts, setLoadedProducts} = useState();

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const responseData = sendRequest(`http://localhost:3100/api/products`);
            }catch(error) {}
        }
    }, [sendRequest])

    return (
        <React.Fragment>
           <Header />
           <Navigation />
           <Menu products={true}/>
           <AdminProductList />
           <Footer />
        </React.Fragment>
    )
}

export default AdminProducts;