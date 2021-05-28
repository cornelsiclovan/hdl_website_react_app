import React, {useEffect, useContext, useState} from 'react';
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


const Review = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const history = useHistory();
    const [currentOrder, setCurrentOrder] = useState();
    
    const [qty, setQty] = useState(0);

    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(async () => {

        const fetchOrder = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:3001/api/orders/user/${auth.userId}?inCart=true`);
                
                setCurrentOrder(responseData);
        

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
                
                setQtyArray(qtyArrayTemp);
                
                setOrderedProducts(orderedProductsTemp);

            } catch (err) {} 
        }

      
        fetchOrder();

    }, [sendRequest]);

    const onClickSubmitOrderHandler = async () => {
       
        try {
            const responseData = await sendRequest(`http://localhost:3001/api/orders/${currentOrder.orders[0]._id}`, 
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
