import React, {useEffect, useContext, useState} from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ReviewMain from '../components/ReviewMain';
import ShoppingList from '../components/ShoppingList';
import ShoppingMain from '../components/ShoppingMain';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from "../../shared/context/auth-context";

const Review = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
    const [currentOrder, setCurrentOrder] = useState();
    
    const [qty, setQty] = useState(0);

    const [orderedProducts, setOrderedProducts] = useState([]);
    const [qtyArray, setQtyArray] = useState([]);

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

    return(
        <React.Fragment>
        <Header />
        <Navigation />
        <ShoppingMain review={true} />
        <ReviewMain />
        {!isLoading && currentOrder && <ShoppingList currentOrder={currentOrder} />}
        <Footer />
    </React.Fragment>
    );
}

export default Review;
