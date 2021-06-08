import React from 'react';

const CustomerItem = (props) => {

    return (
        <React.Fragment>
            <div style={{fontSize: '15px',  marginLeft: '10px', marginRight: '10px'}}>
            <div>name: {props.customer.name}</div>
            <div>email: {props.customer.email}</div>
            <div>telephone: {props.customer.phone}</div>
            <div>address: {props.customer.billingAddress}</div>
            <div>city: {props.customer.city}</div>
            <div>country {props.customer.country}</div>
            <div>discount: {props.customer.discount}</div>
            <div>orders: {props.customer.orders.length}</div>
            <br/>

            <div style={{float: 'left'}}>
                <a 
                    href={`/discount/${props.customer._id}`} 
                    style={{
                       padding: 9+'px', 
                        backgroundColor: 'white',
                        color: '#b93200',
                        border: '1px solid #b93200',
                        textDecoration: 'none',
                        marginBottom: 10+'px',
                        float: 'right',
                        borderRadius: '5%',
                        marginRight: 10+'px',
                        marginLeft: 10+'px'
                        }}>
                        Set discount
                </a>
                <a 
                    href='/customer-orders' 
                    style={{
                        padding: 10+'px', 
                        backgroundColor: 'orangered',
                        color: 'white',
                        textDecoration: 'none',
                        marginBottom: 10+'px',
                        float: 'right',
                        borderRadius: '5%'
                    }}
                    >

                        See orders
                    </a>
            </div>
            </div>
            <hr style={{width: '100%'}}/>
        </React.Fragment>
    );
}

export default CustomerItem;