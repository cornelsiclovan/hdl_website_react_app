import React, {useState, useEffect} from 'react';
import Item from './Item';
import {useHttpClient} from '../../shared/hooks/http-hook';

const OrderListItem = (props) => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [customer, setCustomer] = useState(); 
    const [modifyEnabled, setModifyEnabled] = useState(false);

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


    const onModifyOrderClickHandler = (event) => {
        event.preventDefault();
        setModifyEnabled(!modifyEnabled);
    }

    return (
        <React.Fragment>
            <div class="section-cart" style={{marginLeft: 10+'px', marginRight: 10+'px'}}>
            
            <h3>Order {props.order._id} </h3>  
            <h4>{props.order.date}</h4>
            
            {
                props.order.products.map(product => {

                    i = i + 1;
                    return <Item 
                            item={product} 
                            qtyObject={props.order.qtyArray[i-1]}
                            modifyEnabled={modifyEnabled}/>
                    
                })
            }
            
           <div>
                <h3>Customer data</h3>
                <h4>Name: {customer && customer.name}</h4>
            </div>
            <br/>
            <div>
             {
             props.order.status === '0' &&  
              <div>
                <a href="" data-order_id={props.order._id} onClick={props.onProcessedClickHandler} style={{
                            padding: 10+'px', 
                            backgroundColor: 'orangered',
                            color: 'white',
                            textDecoration: 'none',
                            marginBottom: 10+'px',
                            float: 'right',
                            borderRadius: '5%'
                            }}> Send order </a>
                
                <a href="" data-order_id={props.order._id} onClick={props.onRejectClickHandler} style={{
                    padding: 9+'px', 
                    backgroundColor: 'white',
                    color: 'orangered',
                    border: '1px solid orangered',
                    textDecoration: 'none',
                    marginBottom: 10+'px',
                    float: 'right',
                    borderRadius: '5%',
                    marginRight: 10+'px'
                    }}> Reject order </a>
                 <a href="" data-order_id={props.order._id} onClick={onModifyOrderClickHandler} style={{
                    padding: 9+'px', 
                    backgroundColor: 'white',
                    color: '#b93200',
                    border: '1px solid #b93200',
                    textDecoration: 'none',
                    marginBottom: 10+'px',
                    float: 'right',
                    borderRadius: '5%',
                    marginRight: 10+'px'
                    }}>  {!modifyEnabled ? 'Enable Modify' : 'Disable Modify'} </a>
                </div>
            } 

            {
                 props.order.status === '1' &&  
                 <a href="" data-order_id={props.order._id} onClick={props.onProcessedClickHandler} style={{
                             padding: 10+'px', 
                             backgroundColor: 'greenyellow',
                             color: 'black',
                             textDecoration: 'none',
                             marginBottom: 10+'px',
                             float: 'right',
                             borderRadius: '5%'
                             }}> Order sent &#10004;</a>
            }

            {
                 props.order.status === '3' &&  
                 <a href="" data-order_id={props.order._id} onClick={props.onUnrejectClickHandler} style={{
                             padding: 10+'px', 
                             backgroundColor: 'white',
                             color: 'orangered',
                             border: '2px solid orangered',
                             textDecoration: 'none',
                             marginBottom: 10+'px',
                             float: 'right',
                             borderRadius: '5%'
                             }}>Unreject order</a>
            }
            </div>
            <hr style={{width: '100%'}}/>
            
            </div>
        </React.Fragment>
    );
}

export default OrderListItem;
