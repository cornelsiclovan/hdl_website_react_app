import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TypeList from '../components/TypeList';
import React, {useState, useEffect, useContext} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";
import EditCategoryForm from '../components/EditCategoryForm';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const EditCategory = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
    const [category, setCategory] = useState();
    const [types, setTypes] = useState([]);

    const categoryId = useParams().categoryId;


    useEffect(() => {

        const fetchCategory = async () => {
            
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/categories/${categoryId}`);
                
                setCategory(responseData);
            }catch(error) {}
        }

        const fetchTypes = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/types/category/${categoryId}`)
                
                setTypes(responseData);
            } catch(error) {}
        }

        fetchCategory();
        fetchTypes();

    }, [sendRequest]);
    
    console.log(category);

    return(
        <React.Fragment>
            <Header />  
            <Navigation />
            <Menu products={true} />
            {!isLoading && category && <EditCategoryForm category={category}/>}
            {!isLoading && types && category &&<TypeList types={types} setTypes={setTypes} category={category}/>}
            <Footer />
        </React.Fragment>
    );
}

export default EditCategory;