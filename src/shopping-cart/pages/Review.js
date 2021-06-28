import React, {useEffect, useContext, useState, useRef} from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ReviewMain from '../components/ReviewMain';
import ShoppingList from '../components/ShoppingList';
import ShoppingMain from '../components/ShoppingMain';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";
import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/UIElements/Button';
import { useParams, useHistory } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Review = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const history = useHistory();
    const [currentOrder, setCurrentOrder] = useState();
    
    const [qty, setQty] = useState(0);

    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    
   
    const useOnceCall = (cb, condition = true) => {
        const isCaledRef = useRef(false);

       


        useEffect(async () => { 

            console.log("fetch order");

            const fetchOrder = async () => {
                try{
                    const responseData = await sendRequest(`${BASE_URL}/api/orders/user/${auth.userId}?inCart=true`);
                   
                    setCurrentOrder(responseData);

                    let orderedProductsTemp = [];
                
                    responseData.orders[0].products.forEach(product => {
                        

                        let orderedProduct = {
                            productId: product._id
                        };

                    
                        orderedProductsTemp.push(orderedProduct);
                    
                    });


                    let qtyArrayTemp = [];
                    responseData.orders[0].qtyArray.forEach(item => {
        
                        let itemQty = {
                            productId: item.productId,
                            qty: item.qty
                        };


                        qtyArrayTemp.push(itemQty);
                    
                    });
                    
                    
                    console.log(qtyArrayTemp);
                    console.log(orderedProductsTemp);
                    setQtyArray(qtyArrayTemp);
                    setOrderedProducts(orderedProductsTemp);
                  
                     
                   
                } catch (err) {} 
            }

            console.log(isCaledRef.current);
          

            if(!isCaledRef.current) {
                fetchOrder();
                isCaledRef.current = true;
            }
              
        }, [cb, condition]);
    }

    useOnceCall(() => {
        console.log('called');
    });

    const onClickSubmitOrderHandler = async () => {
       

        console.log(orderedProducts);
        console.log(qtyArray);

        try {
            const responseData = await sendRequest(`${BASE_URL}/api/orders/${currentOrder.orders[0]._id}`, 
                    'PUT',
                    JSON.stringify({
                        userId: auth.userId,
                        products: orderedProducts,
                        qtyArray: qtyArray,
                        inCart: false
                    }),
                    {
                    'Content-Type': 'application/json'
                    }
                );
                setShowSuccessModal(true);
        } catch (err) {}

    }

    const hideSuccessModal = async (event) => {
        event.preventDefault();

        setShowSuccessModal(false);
        history.push('/proucts');
    }

    
    const hideSuccessModal2 = async (event) => {
        event.preventDefault();

        setShowSuccessModal(false);
        history.push('/order-history');
    }

    return(
        <React.Fragment>
         <Modal
                show={showSuccessModal}
                onCancel={hideSuccessModal}
                header="Your command was sent"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={hideSuccessModal}>SHOPPING</Button>
                        <Button inverse onClick={hideSuccessModal2}>ORDERS</Button>
                    </React.Fragment>
                }
                >

            </Modal>
        <Header />
        <Navigation />
        <ShoppingMain review={true}/>
        <ReviewMain />
        {!isLoading && currentOrder && 
            <ShoppingList 
                modify={false} 
                currentOrder={currentOrder} 
                onClickSubmitOrderHandler={onClickSubmitOrderHandler}
                review={true} 
                />
        }
        <Footer />
    </React.Fragment>
    );
}

export default Review;
