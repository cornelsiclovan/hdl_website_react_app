import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import { useHttpClient } from '../../shared/hooks/http-hook';
import TypeList from '../components/TypeList';
import Footer from '../../shared/components/UIElements/Footer';

const NewType = () => {
    const [types, setTypes] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {

        const fetchTypes = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/types`);
            
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