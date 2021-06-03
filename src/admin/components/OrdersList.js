import React from 'react';
import OrderListItem from './OrderListItem';

const OrderList = (props) => {

    return (
        <React.Fragment>
           {props.orders.map(order => {
               return < OrderListItem order={order}/>;
           })}
            
        </React.Fragment>
    );
}

export default OrderList;