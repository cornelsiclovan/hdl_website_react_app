import React, { useEffect, useState }  from "react";
import { useHttpClient } from '../../shared/hooks/http-hook';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import MainMenu from '../components/MainMenu';
import OrderMenu from '../components/OrderMenu';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProducList';
import SideMenu from '../components/SideMenu';


const Products = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedSideMenuItems, setLoadedSideMenuItems] = useState();
    const [sideMenuName, setSideMenuName] = useState('Buspro')
    const [loadedProducts, setLoadedProducts] = useState();
    const [mainMenuSelected, setMainMenuSelected] = useState('607420aa6eba041518483e67');
    const [sideMenuSelected, setSideMenuSelected] = useState();

    useEffect(() => {
        const fetchSideMenuItems = async () => {
        
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/types/category/${mainMenuSelected}`);

                setLoadedSideMenuItems(responseData);
            } catch (err) {}
        };

        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/category/${mainMenuSelected}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        fetchSideMenuItems();
        fetchItems()
    }, [sendRequest]);

    

    const onMainMenuClickHandler = async (e) => {
        e.preventDefault();
        console.log(e.target.innerHTML);
        setSideMenuName(e.target.innerHTML);
        setMainMenuSelected(e.target.dataset.letter); 

        const fetchSideMenuItems = async () => {
        
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/types/category/${e.target.dataset.letter}`);
                setLoadedSideMenuItems(responseData);
                
                
            } catch (err) {}
        };

        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/category/${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        fetchItems();
        fetchSideMenuItems();

    } 

    const onSideMenuClickHandler = async (e) => {
        e.preventDefault();
        console.log(e.target.dataset.letter);

        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/type/${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        fetchItems();

        setSideMenuSelected(e.target.dataset.letter);
    }

    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            <MainMenu onMainMenuClickHandler={onMainMenuClickHandler}/>
            <OrderMenu />
            <SideMenu sideMenuName={sideMenuName} loadedSideMenuItems={loadedSideMenuItems} onSideMenuClickHandler={onSideMenuClickHandler}/>
            <ProductList loadedProducts={loadedProducts} />
            <Pagination /> 
            <Footer />
        </React.Fragment>
    );
};

export default Products;