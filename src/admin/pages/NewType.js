import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import { useHttpClient } from '../../shared/hooks/http-hook';
import TypeList from '../components/TypeList';
import Footer from '../../shared/components/UIElements/Footer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const NewType = () => {
    const [types, setTypes] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {

        const fetchTypes = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/types`);
            
                setTypes(responseData);
            } catch (error) {}
        }

        fetchTypes();
    }, [sendRequest]);


    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            <Menu products={true} />
            {!isLoading && types && <TypeList types={types}/>}
            <Footer />
        </React.Fragment> 
    );
} 

export default NewType;