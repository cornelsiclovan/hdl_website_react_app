import React, { useEffect, useState} from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import NewProductForm from '../components/NewProductForm';
import { useHttpClient } from '../../shared/hooks/http-hook';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const NewProduct = () => {
    const [categories, setCategories] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/categories`);
            
                setCategories(responseData);
            } catch (error) {}
        }

        fetchCategories();
    }, [sendRequest]);

    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            <Menu products={true} />
            {!isLoading && categories && <NewProductForm categories={categories} />}
            <Footer />
        </React.Fragment>
    );
}

export default NewProduct;