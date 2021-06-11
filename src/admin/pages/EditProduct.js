import React, {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';

import EditProductForm from '../components/EditProductForm';


const EditProduct = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [ loadedProduct, setLoadedProduct ] = useState();
    const [ loadedCategories, setLoadedCategories ] = useState();
  
    const [showSuccessModal, setShowSuccessModal] = useState({});
    
    const productId = useParams().productId;

    useEffect(() => {
        
        const fetchProduct = async () => {
            try {

                const responseData = await sendRequest(`http://localhost:3001/api/products/${productId}`);
               console.log(responseData);
                setLoadedProduct(responseData);
            } catch(error) {}
        }

        const fetchCategories = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/categories`);
            
                setLoadedCategories(responseData);
            } catch (error) {}
        }

    

        fetchProduct();
        fetchCategories()

    }, [sendRequest]);

    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            <Menu products={true} />
             {
                !isLoading && 
                loadedProduct && 
                loadedCategories &&
                <EditProductForm 
                    product={loadedProduct} 
                    isLoading={isLoading}
                    categories={loadedCategories}
                    />}

            <Footer />
        </React.Fragment>
    );
}

export default EditProduct;