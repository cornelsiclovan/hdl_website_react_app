import React, {useEffect, useContext, useRef, useState} from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import Input from '../../shared/components/FormElements/Input';

import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/UIElements/Button';

const BillingForm = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUser, setLoadedUser] = useState();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formState, inputHandler, setFormData] = useForm(
        {
            name: 
            {
                value: '',
                isValid: 'true'
            },
            email: 
            {
                value: '',
                isValid: 'true'
            },
            phone: 
            {   
                value: '',
                isValid: 'true'
            },
            companyName:
            {
                value: '',
                isValid: 'true'
            },
            organizationID:
            {
                value: '',
                isValid: 'true'
            },
            taxRegistrationID:
            {
                value: '',
                isValid: 'true'
            },
            billingAddress: 
            {
                value: '',
                isValid: 'true'
            },
            billingAddressLine1: {
                value: '',
                isValid: 'true'
            },
            billingAddressLine2: {
                value: '',
                isValid: 'true'
            },
            postalCode: 
            {
                value: '',
                isValid: 'true'
            },
            city: {
                value: '',
                isValid: 'true'
            },
            country: {
                value: '',
                isValid: 'true'
            }
        }, false
    );


    useEffect(() => { 
        const fetchBillingData = async () => {
          
            const response = await sendRequest(`http://localhost:3001/api/users/me`,
                                                'GET',
                                                null,
                                                {
                                                    'x-auth-token': auth.token
                                                });
      
           
            setLoadedUser(response);
            setFormData({
                name: 
                {
                    value: response.name,
                    isValid: 'true'
                },
                email: 
                {
                    value: response.email,
                    isValid: 'true'
                },
                phone: 
                {   
                    value: response.phone,
                    isValid: 'true'
                },
                companyName:
                {
                    value: response.companyName,
                    isValid: 'true'
                },
                organizationID:
                {
                    value: response.organizationID,
                    isValid: 'true'
                },
                taxRegistrationID:
                {
                    value: response.taxRegistrationID,
                    isValid: 'true'
                },
                billingAddress: 
                {
                    value: response.billingAddress,
                    isValid: 'true'
                },
                billingAddressLine1: {
                    value: response.billingAddressLine1,
                    isValid: 'true'
                },
                billingAddressLine2: {
                    value: response.billingAddressLine2,
                    isValid: 'true'
                },
                postalCode: 
                {
                    value: response.postalCode,
                    isValid: 'true'
                },
                city: {
                    value: response.city,
                    isValid: 'true'
                },
                country: {
                    value: response.country,
                    isValid: 'true'
                }
            });
        }

      
        fetchBillingData();
        
    }, [sendRequest]);
    

    

    const onSubmitHandler = async (event) => {
        event.preventDefault();
       
      
        setLoadedUser(null);
        try {
            const response = await sendRequest(
                `http://localhost:3001/api/users/${auth.userId}`,
                'PUT',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    email: formState.inputs.email.value,
                    phone: formState.inputs.phone.value,
                    companyName: formState.inputs.companyName.value,
                    organizationID: formState.inputs.organizationID.value,
                    taxRegistrationID: formState.inputs.taxRegistrationID.value,
                    billingAddress: formState.inputs.billingAddress.value,
                    billingAddressLine1: formState.inputs.billingAddressLine1.value,
                    billingAddressLine2: formState.inputs.billingAddressLine2.value,
                    postalCode: formState.inputs.postalCode.value,
                    city: formState.inputs.city.value,
                    country: formState.inputs.country.value,
                }),
                {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                }
            );
          
           
            setFormData({
                name: 
                {
                    value: response.user.name,
                    isValid: 'true'
                },
                email: 
                {
                    value: response.user.email,
                    isValid: 'true'
                },
                phone: 
                {   
                    value: response.user.phone,
                    isValid: 'true'
                },
                companyName:
                {
                    value: response.user.companyName,
                    isValid: 'true'
                },
                organizationID:
                {
                    value: response.user.organizationID,
                    isValid: 'true'
                },
                taxRegistrationID:
                {
                    value: response.user.taxRegistrationID,
                    isValid: 'true'
                },
                billingAddress: 
                {
                    value: response.user.billingAddress,
                    isValid: 'true'
                },
                billingAddressLine1: {
                    value: response.user.billingAddressLine1,
                    isValid: 'true'
                },
                billingAddressLine2: {
                    value: response.user.billingAddressLine2,
                    isValid: 'true'
                },
                postalCode: 
                {
                    value: response.user.postalCode,
                    isValid: 'true'
                },
                city: {
                    value: response.user.city,
                    isValid: 'true'
                },
                country: {
                    value: response.user.country,
                    isValid: 'true'
                }
            }, true);
              
            setLoadedUser(response.user);
            setShowSuccessModal(true);
        } catch(err) {}
    }

    const hideSuccessModal = async (event) => {
        event.preventDefault();

        setShowSuccessModal(false);
    }

    return(
        <React.Fragment>
              <Modal
                show={showSuccessModal}
                onCancel={hideSuccessModal}
                header="Your data has been sucessfully updated."
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={hideSuccessModal}>OK</Button>
                    </React.Fragment>
                }
                >

            </Modal>
             <div className="section-cart">
                 { 
                    !isLoading && loadedUser &&
                    <div className="section-cart__left">
                        <form className="form" onSubmit={onSubmitHandler}>
                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                                <label for="name" className="form__label">Full Name</label> */}
                                <Input
                                        id="name"
                                        element="input"
                                        type="text"
                                        label="Full Name"
                                        validators={[]}
                                        initialValue={loadedUser.name}
                                        errorText="Please enter a name"
                                        onInput={inputHandler}
                                    />
                            </div>
                            <div className="form_group">
                                {/* <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                                <label for="email" className="form__label">Email</label> */}
                                <Input
                                        id="email"
                                        element="input"
                                        type="text"
                                        label="Email Address"
                                        validators={[]}
                                        initialValue={loadedUser.email}
                                        errorText="Please enter your email"
                                        onInput={inputHandler}
                                    />
                                
                            </div>   
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Phone" id="phone" required/>
                                <label for="text" className="form__label">Phone</label> */}
                                 <Input
                                        id="phone"
                                        element="input"
                                        type="text"
                                        label="Phone"
                                        validators={[]}
                                        initialValue={loadedUser.phone}
                                        errorText="Please enter your phone number"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <div className="continue-shopping" style={{marginLeft: -15+'px'}}>  

                                <h1 style={{color:"black"}}>Company details</h1>
                            </div>
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Company" id="company" required/>
                                <label for="company" className="form__label">Company</label> */}
                                 <Input
                                        id="companyName"
                                        element="input"
                                        type="text"
                                        label="Company Name"
                                        validators={[]}
                                        initialValue={loadedUser.companyName}
                                        errorText="Please enter your company name"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Organization ID" id="org_id" required/>
                                <label for="org_id" className="form__label">Organization ID</label> */}
                                    <Input
                                        id="organizationID"
                                        element="input"
                                        type="text"
                                        label="Organization ID"
                                        validators={[]}
                                        initialValue={loadedUser.organizationID}
                                        errorText="Please enter your organization ID"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Tax Registration ID" id="tax_reg_id" required/>
                                <label for="tax_reg_id" className="form__label">Tax Registration ID</label> */}
                                <Input
                                        id="taxRegistrationID"
                                        element="input"
                                        type="text"
                                        label="Tax Registration ID"
                                        validators={[]}
                                        initialValue={loadedUser.taxRegistrationID}
                                        errorText="Please enter your Tax Registration ID"
                                        onInput={inputHandler}
                                    />
                           
                            </div>
                            <div className="continue-shopping" style={{marginLeft: -15+'px'}}> 

                                <h1 style={{color:"black"}}>Billing address</h1>
                            </div>
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Address" id="billing_address" required/>
                                <label for="billing_address" className="form__label">Address</label> */}
                                <Input
                                        id="billingAddress"
                                        element="input"
                                        type="text"
                                        label="Address"
                                        validators={[]}
                                        initialValue={loadedUser.billingAddress}
                                        errorText="Please enter your address"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Address line" id="billing_address_line" required/>
                                <label for="billing_address_line" className="form__label">Address line</label> */}
                            
                                <Input
                                        id="billingAddressLine1"
                                        element="input"
                                        type="text"
                                        label="Address line 1"
                                        validators={[]}
                                        initialValue={loadedUser.billingAddressLine1}
                                        errorText="Please enter your address"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Address line 2" id="billing_address_line2" required/>
                                <label for="billing_address_line2" className="form__label">Address line 2</label> */}
                            
                                <Input
                                        id="billingAddressLine2"
                                        element="input"
                                        type="text"
                                        label="Address line 2"
                                        validators={[]}
                                        initialValue={loadedUser.billingAddressLine2}
                                        errorText="Please enter your address"
                                        onInput={inputHandler}
                                    />
                            </div>    
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="City" id="city" required/>
                                <label for="city" className="form__label">City</label> */}
                            
                                <Input
                                        id="city"
                                        element="input"
                                        type="text"
                                        label="City"
                                        validators={[]}
                                        initialValue={loadedUser.city}
                                        errorText="Please enter your city"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Postal code" id="postal_code" required/>
                                <label for="postal_code" className="form__label">Postal code</label> */}
                            
                                <Input
                                        id="postalCode"
                                        element="input"
                                        type="text"
                                        label="Postal Code"
                                        validators={[]}
                                        initialValue={loadedUser.postalCode}
                                        errorText="Please enter your postal code"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <div className="form_group">
                                {/* <input type="text" className="form__input" placeholder="Country" id="country" required/>
                                <label for="country" className="form__label">Country</label> */}
                            
                                <Input
                                            id="country"
                                            element="input"
                                            type="text"
                                            label="Country"
                                            validators={[]}
                                            initialValue={loadedUser.country}
                                            errorText="Please enter your country"
                                            onInput={inputHandler}
                                        />
                            </div>   
                            <button type="submit" style={{marginTop: 1+"rem"}} className="btn btn--mov">
                               Update your data
                            </button>                
                        </form>
                    </div> 
                }
                <div className="section-cart__right">
                    <div className="section-cart__right--card">
                       Fill in your billing details and delivery preferences and proceed to review your order.
                    </div>
                    <center>
                        <Link to="/review_payment" style={{marginTop: 1+"rem"}} className="btn btn--mov">
                            Review Order 
                        </Link>
                    </center>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BillingForm;