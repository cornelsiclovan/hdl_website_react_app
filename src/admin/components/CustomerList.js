import React from 'react';
import CustomerItem from './CustomerItem';

const CustomerList = (props) => {

    return (


        <React.Fragment>
            <ul class="section-cart__left--list">
                {props.customers.length === 0 && <div>No customers yet</div>}
                {props.customers.length > 0 && 
                    props.customers.map(customer => {
                        return <CustomerItem customer={customer}/>
                    })
                }
            </ul>
        </React.Fragment>
    );
}

export default CustomerList;