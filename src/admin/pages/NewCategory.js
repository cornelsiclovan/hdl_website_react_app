import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import { useHttpClient } from '../../shared/hooks/http-hook';
import CategoryList from '../components/CategoryList';
import Footer from '../../shared/components/UIElements/Footer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const NewCategory = () => {
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
            {!isLoading && categories && <CategoryList categories={categories} setCategories={setCategories}/>}
            <br/>
            <Footer />
        </React.Fragment>
    );
}

export default NewCategory;