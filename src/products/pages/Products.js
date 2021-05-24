import React, { useContext, useEffect, useState, useRef }  from "react";
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
    const [qty, setQty] = useState(0);
    
    const [orderedProducts, setOrderedProducts] = useState([]);

    const [qtyArray, setQtyArray] = useState([]);
    const currentOrderLoaded = useRef(false);
    const orderedProductsSet = useRef(false);
    const qtyArraySet = useRef(false);

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
               

                if(currentOrderLoaded.current === false) {
                    setCurrentOrder(responseData);
                    currentOrderLoaded.current = true;
                }
               

                //console.log("fetch order", currentOrder.orders[0].qtyArray);

                let orderedProductsTemp = [];
               
                responseData.orders[0].products.forEach(product => {
      
                    let orderedProduct = {
                        productId: product._id
                    };

                   
                    orderedProductsTemp.push(orderedProduct);
                   
                });


                let qtyArrayTemp = [];
                currentOrder.orders[0].qtyArray.forEach(item => {
      
                    let itemQty = {
                        productId: item.productId,
                        qty: item.qty
                    };


                    qtyArrayTemp.push(itemQty);
                   
                });
  

                if(!qtyArraySet.current) {
                    setQtyArray(qtyArrayTemp);
                    qtyArraySet.current = true;
                }
                   
                if(!orderedProductsSet.current) {
                    setOrderedProducts(orderedProductsTemp);
                    orderedProductsSet.current = true;
                }
                
                
                console.log("fetch qtyArray", qtyArray);
                console.log("fetch products", orderedProducts);

              

            } catch (err) {} 
        }

      
        fetchOrder();
        fetchPagination();
        fetchSideMenuItems();
        fetchItems();
  

    }, [sendRequest, auth, currentOrder, qtyArray, orderedProducts]);
      

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

    const onAddToCartClickHandler = async (e) => {
        e.preventDefault();
        console.log("Add to cart click handler");
        
        if(orderedProducts.length !== 0) {
          console.log("onADD", orderedProducts);
        }
        console.log("poduct id", e.target.dataset.product_id);
        console.log("quantity", qty);


        if(currentOrder === undefined) {
            console.log("creating order");
            setCurrentOrder(
                {
                    orders:[{
                        userId: auth.userId,
                        products: [
                            {
                                productId : e.target.dataset.product_id
                            }
                        ],
                        qtyArray: [{
                             productId : e.target.dataset.product_id,
                             qty: qty
                        }],
                        inCart: true
                        }
                    ]
                }
            );
        } else {
            currentOrder.orders[0].products.push({
                    productId : e.target.dataset.product_id
                
            });

            currentOrder.orders[0].qtyArray.push({
                productId : e.target.dataset.product_id,
                qty: qty
            })
        }

        console.log(currentOrder);


        // const modifyOrder = async () => {
            
        //     try {
        //         const responseData = await sendRequest(`http://localhost:3001/api/orders/${currentOrder.orders[0]._id}`, 
        //                 'PUT',
        //                 JSON.stringify({
        //                     userId: auth.userId
        //                 }),
        //                 {
        //                    'Content-Type': 'application/json',
        //                    Authorization: 'Bearer '+auth.token
        //                 }
        //                 )
        //     } catch (err) {}
        // };

        // modifyOrder();
    }

    const onRemoveProductFromCartHandler = async (e) => {
        e.preventDefault();
        if(currentOrder != undefined) {
            console.log("Remove product from cart handler");
            console.log("poduct id", e.target.dataset.product_id);

            if(orderedProducts.length !== 0) {
                console.log("onRemove Products", orderedProducts);
            }

            if(qtyArray.length !== 0) {
                console.log("onRemove qtyArr", qtyArray);
            }
        

            let qtyArrayTemp = qtyArray.filter(item =>{
            
                return item.productId != e.target.dataset.product_id
                });
            
                let  orderedProductsTemp = orderedProducts.filter(product =>  product.productId != e.target.dataset.product_id);
        
            
                
            setQtyArray(qtyArrayTemp);
            setOrderedProducts(orderedProductsTemp);
            console.log("rem item", orderedProductsTemp);  
            console.log("rem item", qtyArrayTemp);

            currentOrder.orders[0].qtyArray = qtyArrayTemp;

            setCurrentOrder(currentOrder);
            console.log("removed item", currentOrder);

            console.log(JSON.stringify({
                userId: auth.userId,
                products: orderedProductsTemp,
                qtyArray: qtyArrayTemp,
                inCart: true
            }))

        
            
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/orders/${currentOrder.orders[0]._id}`, 
                        'PUT',
                        JSON.stringify({
                            userId: auth.userId,
                            products: orderedProductsTemp,
                            qtyArray: qtyArrayTemp,
                            inCart: true
                        }),
                        {
                        'Content-Type': 'application/json'
                        }
                        )
            } catch (err) {}
        }
    }
    
    const qtyInputOnChangeHandler = (e) => {
        
        setQty(e.target.value)
    }


    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            {auth.isLoggedIn &&<ShoppingCart />}
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
                onAddToCartClickHandler={onAddToCartClickHandler}
                onRemoveProductFromCartHandler={onRemoveProductFromCartHandler}
                qtyInputOnChangeHandler={qtyInputOnChangeHandler}
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
    );
};

export default Products;