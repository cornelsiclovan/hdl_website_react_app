import React, { useContext, useEffect, useState }  from "react";
import { useHttpClient } from '../../shared/hooks/http-hook';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import MainMenu from '../components/MainMenu';
import OrderMenu from '../components/OrderMenu';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProducList';
import SideMenu from '../components/SideMenu';
import ShoppingCart from "../../shared/components/UIElements/Shopping-cart";
import { AuthContext } from "../../shared/context/auth-context";


const Products = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedSideMenuItems, setLoadedSideMenuItems] = useState();
    const [sideMenuName, setSideMenuName] = useState('Buspro')
    const [loadedProducts, setLoadedProducts] = useState();
    // Sets the state for intial page of products
    const [mainMenuSelected, setMainMenuSelected] = useState('607420aa6eba041518483e67');
    const [sideMenuSelected, setSideMenuSelected] = useState();
    const [pageNumber, setPageNumber] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentOrder, setCurrentOrder] = useState();

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

        const fetchPagination = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/pagination/category/${mainMenuSelected}`)

                setPageNumber(Math.ceil(responseData.count/4));
            } catch (err) {}
        }

        const fetchOrder = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:3001/api/orders/user/${auth.userId}?inCart=true`);
                
                setCurrentOrder(responseData);
            } catch (err) {}
        }

            
        if(auth.isLoggedIn) {
         
            fetchOrder();
        }
        
        fetchPagination();
        fetchSideMenuItems();
        fetchItems();


    }, [sendRequest]);
     

    const onMainMenuClickHandler = async (e) => {
        e.preventDefault();
       
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

        const fetchPagination = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/pagination/category/${e.target.dataset.letter}`)

                setPageNumber(Math.ceil(responseData.count/4));
            } catch (err) {}
        }

        fetchPagination();
        fetchItems();
        fetchSideMenuItems();

    } 

    const onSideMenuClickHandler = async (e) => {
        e.preventDefault();
        
        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/type/${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        const fetchPagination = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:3001/api/pagination/type/${e.target.dataset.letter}`)

                setPageNumber(Math.ceil(responseData.count/4));
            } catch (err) {}
        }

        fetchPagination();
        fetchItems();

        setSideMenuSelected(e.target.dataset.letter);
    }

    const incrementCurrentPageClickHandler = async (e) => {
        e.preventDefault();
 
        let myPage = currentPage + 1;
        if(myPage > pageNumber)
            myPage=pageNumber;

        setCurrentPage(myPage);



        const fetchItems = async () => {
          
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/category/${mainMenuSelected}?page=${myPage}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };
        
        fetchItems();
    }

    const decrementCurrentPageClickHandler = async (e) => {
        e.preventDefault();
        
        let myPage = currentPage - 1;
        if(myPage < 1) 
            myPage = 1;
        setCurrentPage(myPage);

        
        const fetchItems = async () => {
          
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/category/${mainMenuSelected}?page=${myPage}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };
        
        fetchItems();
    }

    const setCurrentPageClickHandler = async (e) => {
        e.preventDefault();

        setCurrentPage(parseInt(e.target.dataset.letter));

        const fetchItems = async () => {
          
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/products/category/${mainMenuSelected}?page=${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        fetchItems();
        
    }

    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            {auth.isLoggedIn &&<ShoppingCart />}
            <MainMenu onMainMenuClickHandler={onMainMenuClickHandler}/>
            <OrderMenu />
            <SideMenu sideMenuName={sideMenuName} loadedSideMenuItems={loadedSideMenuItems} onSideMenuClickHandler={onSideMenuClickHandler}/>
            <ProductList loadedProducts={loadedProducts} currentOrder={currentOrder}/>
            {
                pageNumber &&
                <Pagination 
                    pageNumber={pageNumber} 
                    currentPage={currentPage}
                    incrementCurrentPageClickHandler={incrementCurrentPageClickHandler}
                    decrementCurrentPageClickHandler={decrementCurrentPageClickHandler}    
                    setCurrentPageClickHandler={setCurrentPageClickHandler}
                /> 
            }
            <Footer />
        </React.Fragment>
    );
};

export default Products;