import React, {useEffect, useState} from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ProductMain from '../components/ProductMain';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useParams, useHistory } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const productId = useParams().productId;
    const [product, setProduct] = useState();

    useEffect(() => {

        const fetchProduct = async () => {
            const responseData = await sendRequest(`${BASE_URL}/api/products/${productId}`);
            
            setProduct(responseData);

            console.log(responseData);
        }

        fetchProduct();

    },  [sendRequest]);

    return(
        <React.Fragment>
            <Header />
            <Navigation />
            {!isLoading && product && <ProductMain product={product}/>}
            <Footer />
        </React.Fragment>
    );
}

export default Product;
