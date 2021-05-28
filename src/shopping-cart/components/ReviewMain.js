import React, {useEffect, useState, useContext} from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const ReviewMain = (props) => {
    const [user, setUser] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);

    useEffect(() => {
       
        const fetchUser = async () => {
            try {
                const response = await sendRequest(`http://localhost:3001/api/users/me`,
                'GET',
                null,
                {
                    'x-auth-token': auth.token
                });

                setUser(response);
            } catch (error) {}
            
          
        }

        fetchUser();

    }, [sendRequest]);

    return (
        <React.Fragment>
             <div class="continue-shopping"> 

                <h1 style={{color: "black"}}>Billing details</h1>
            </div>
            { !isLoading && user &&
            <div class="section-cart">
                <div class="section-cart__left">
                {user.name}
                <br/>
                {user.email}
                <br/>
                {user.phone}
                <br/>
                <br/>
                {user.companyName}
                <br/>
                Org. ID: {user.organizationID}
                <br/>
                DIC: {user.taxRegistrationID}
                <br/>
                <br/>
                {user.billingAddress}
                <br/>
                {user.postalCode} {user.city}
                <br/>
                {user.country}
                <div class="continue-shopping" style={{marginLeft: -15+"px"}}>  

                    <h1 style={{color: "black"}}>Orderd items</h1>
                </div>
                </div>
            </div>}
        </React.Fragment>
    );
}

export default ReviewMain;