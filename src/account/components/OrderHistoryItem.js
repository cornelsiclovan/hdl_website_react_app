import React from 'react';

const OrderHistoryItem = (props) => {
    let orderTotal = 0;

    let i = 0;

    props.order.products.map( product => {
            orderTotal = orderTotal + parseInt(product.price.split(' ')[0]);
            
            orderTotal = orderTotal * parseInt(props.order.qtyArray[i].qty);
            i = i + 1;
    });

    return (
        <React.Fragment>
            <li class="section-cart__left--item">
                     
                        
                     <div class="section-cart__left--item-col">
                            {props.order._id}  
                     </div>
                     
                     <div class="section-cart__left--item-col">
 
                             {props.order.date}
                     </div> 
                    
                     <div class="section-cart__left--item-col">
                         <b>{orderTotal}&nbsp;Eur</b>
                    </div>
                </li>
        </React.Fragment>
    );
}

export default OrderHistoryItem;