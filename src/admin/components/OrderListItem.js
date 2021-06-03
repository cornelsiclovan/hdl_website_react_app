import React, {useState, useEffect} from 'react';
import Item from './Item';
import {useHttpClient} from '../../shared/hooks/http-hook';

const OrderListItem = (props) => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [customer, setCustomer] = useState(); 

   //console.log(props.order.creator);

    useEffect(() => {
        
        const getOrderCustomer = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:3001/api/users/${props.order.creator}`);

                setCustomer(responseData);

            } catch (err) {

            }
        }

        getOrderCustomer();
    }, [sendRequest]);
   
    let i = 0;

    return (
        <React.Fragment>
            <div class="section-cart">
            <div class="section-cart__left">
            <h3>Order {props.order._id} </h3>  
            <h4>{props.order.date}</h4>
            
            {
                props.order.products.map(product => {

                    i = i + 1;
                    return <Item item={product} qtyObject={props.order.qtyArray[i-1]}/>
                    
                })
            }
           
            <h3>Customer data</h3>
            <h4>Name: {customer && customer.name}</h4>
            <hr/>
            </div>
            </div>
        </React.Fragment>
    );
}

export default OrderListItem;
