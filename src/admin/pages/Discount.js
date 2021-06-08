import React, {useEffect, useState, useContext} from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { useParams, useHistory } from 'react-router-dom';

import {AuthContext} from '../../shared/context/auth-context';
import {useHttpClient} from '../../shared/hooks/http-hook';

const Discount = (props) => {
    const auth = useContext(AuthContext);
    const [customer, setCustomer] = useState();
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [discount, setDiscount] = useState();

    const customerId = useParams().customerId;
    const history = useHistory();

    console.log(customerId);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await sendRequest(
                    `http://localhost:3001/api/users/${customerId}`
                );

            setCustomer(response);
            } catch(error) {}
        }

      fetchUser();
    }, [sendRequest]);

    const onChangeDiscountHandler = (event) => {
        event.preventDefault();

        setDiscount(event.target.value);
    }

    const onClickDiscountHandler = async (event) => {
        event.preventDefault();
        if(discount > 0) {
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/users/${customerId}`, 
                        'PUT',
                        JSON.stringify({
                            discount: discount
                        }),
                        {
                        'Content-Type': 'application/json',
                        'x-auth-token'            : auth.token
                        }
                    );
                
                history.push('/customers');
            } catch (err) {}
        }
    }

    return (
        <React.Fragment>
            <Header />
           <Navigation />
           <Menu customers={true}/>
           {!isLoading && customer &&
           <div style={{fontSize: '15px'}}>
                <div>Discount: {customer.discount} %</div>
                <form  className="card-item__add-form">
                <span style={{fontSize: 1.5+"rem"}}>Discount</span>  
                                                
                        <input 
                            class="section-cart__left--item-col-qty" 
                            type="text"
                            onChange={onChangeDiscountHandler}
                            />
                        <b>
                            <a href='' 
                                style={{fontSize: 12+'px', textDecoration: "none"}}
                                data-product_id={1}
                                onClick={onClickDiscountHandler}
                                >
                                    Update
                            </a>
                            &nbsp;&nbsp;  
                            
                            <b style={{fontSize:14+'px', color:'#81398a'}}>
                                discount: {customer.discount} %
                            </b> 
                            &nbsp;&nbsp;
                        
                        </b>
                </form>
           </div>}
           <Footer />
        </React.Fragment>
    );
}

export default Discount;