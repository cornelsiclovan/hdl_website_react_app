import React, { useContext, useEffect, useState, useRef }  from "react";
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';

import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';
import SideMenu from "../../products/components/SideMenu";
import ProductList from "../../products/components/ProducList";
import MainMenu from "../../products/components/MainMenu";
import OrderMenu from "../../products/components/OrderMenu";
import Pagination from "../../products/components/Pagination";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const AdminProducts = (props) => {

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
    const [qty, setQty] = useState(0);
    
    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);

    const currentOrderLoaded = useRef(false);
    const orderedProductsSet = useRef(false);
    const qtyArraySet = useRef(false);
    const productsFetched = useRef(false);

    useEffect(() => {

        const fetchSideMenuItems = async () => {
        
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/types/category/${mainMenuSelected}`);

                setLoadedSideMenuItems(responseData);
            } catch (err) {}
        };

        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/products/category/${mainMenuSelected}`)
           
                setLoadedProducts(responseData);

                productsFetched.current = true;
            } catch (err) {}
        };
  
        const fetchPagination = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/pagination/category/${mainMenuSelected}`)

                setPageNumber(Math.ceil(responseData.count/4));
            } catch (err) {}
        }

        
        fetchPagination();
        
        fetchSideMenuItems();

        console.log("products fetched:", productsFetched.current)
        if(!productsFetched.current) {
            productsFetched.current = true;
            fetchItems();
        }
          

    }, [sendRequest, auth, currentOrder, qtyArray, orderedProducts, productsFetched.current]);
      

    const onMainMenuClickHandler = async (e) => {
        e.preventDefault();
       
        setSideMenuName(e.target.innerHTML);
        setMainMenuSelected(e.target.dataset.letter); 

        setCurrentPage(1);

        const fetchSideMenuItems = async () => {
        
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/types/category/${e.target.dataset.letter}`);
                setLoadedSideMenuItems(responseData);
                
                
            } catch (err) {}
        };

        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/products/category/${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        const fetchPagination = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/pagination/category/${e.target.dataset.letter}`)

                setPageNumber(Math.ceil(responseData.count/4));
            } catch (err) {}
        }

        fetchPagination();
        fetchItems();
        fetchSideMenuItems();

    } 

    const onSideMenuClickHandler = async (e) => {
        e.preventDefault();
        
        setCurrentPage(1);

        const fetchItems = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/products/type/${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        const fetchPagination = async () => {

            try {
                const responseData = await sendRequest(`${BASE_URL}/api/pagination/type/${e.target.dataset.letter}`)

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
                const responseData = await sendRequest(`${BASE_URL}/api/products/category/${mainMenuSelected}?page=${myPage}`)
           
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
                const responseData = await sendRequest(`${BASE_URL}/api/products/category/${mainMenuSelected}?page=${myPage}`)
           
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
                const responseData = await sendRequest(`${BASE_URL}/api/products/category/${mainMenuSelected}?page=${e.target.dataset.letter}`)
           
                setLoadedProducts(responseData);
            } catch (err) {}
        };

        fetchItems();
        
    }

    const onAddToStockClickHandler = async (e) => {
        e.preventDefault();
        
        console.log("add to stock");
        productsFetched.current = false;
      

        try {
            const responseData = await sendRequest(`${BASE_URL}/api/products/unitsInStock/${e.target.dataset.product_id}`, 
                    'PUT',
                    JSON.stringify({
                       unitsInStock: qty
                    }),
                    {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                    }
                    )
            
           
        } catch (err) {}
        
        if(document.getElementById("qtyInCart" + e.target.dataset.product_id) !== null)
        document.getElementById("qtyInCart" + e.target.dataset.product_id).value = '';

        setQty(0);
    }

    
    const onRemoveProductFromStockHandler = async (e) => {
        e.preventDefault();
        console.log("remove from stock");
        productsFetched.current = false;
        try {
            const responseData = await sendRequest(`${BASE_URL}/api/products/unitsInStock/${e.target.dataset.product_id}`, 
                    'PUT',
                    JSON.stringify({
                       unitsInStock: 0
                    }),
                    {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                    }
                    )

           
        } catch (err) {}
       
    }
    
    const qtyInputOnChangeHandler = (e) => {
        console.log(e.target.value);

        setQty(e.target.value);
    }

    const onClickDeleteHandler = async (event) => {
        event.preventDefault();

        const productsTemp = [...loadedProducts];

        try { 
            const responseData = sendRequest(
                `${BASE_URL}/api/products/${event.target.dataset.product_id}`,
                'DELETE',
                null,
                {
                    'x-auth-token': auth.token
                }
            )

            const temp = productsTemp.filter(product => product._id !== event.target.dataset.product_id);
            setLoadedProducts(temp);
        } catch (err){}


        console.log(event.target.dataset.product_id);
    }

    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            <Menu products={true} />
            <MainMenu onMainMenuClickHandler={onMainMenuClickHandler}/>
            <OrderMenu />
            <SideMenu 
                sideMenuName={sideMenuName} 
                loadedSideMenuItems={loadedSideMenuItems} 
                onSideMenuClickHandler={onSideMenuClickHandler}
                />
            <ProductList 
                loadedProducts={loadedProducts} 
                currentOrder={currentOrder} 
                onAddToStockClickHandler={onAddToStockClickHandler}
                onRemoveProductFromStockHandler={onRemoveProductFromStockHandler}
                qtyInputOnChangeHandler={qtyInputOnChangeHandler}
                admin={true}
                onClickDeleteHandler={onClickDeleteHandler}
                />
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
    )
}

export default AdminProducts;