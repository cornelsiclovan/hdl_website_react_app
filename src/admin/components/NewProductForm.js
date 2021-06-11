import React, { useEffect, useState, useContext } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import { useForm } from '../../shared/hooks/form-hook';

import Input from '../../shared/components/FormElements/Input';

import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/UIElements/Button';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { AuthContext } from '../../shared/context/auth-context';
import { useParams, useHistory } from 'react-router-dom';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

const NewProductForm  = (props) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [ selectedCategory, setSelectedCategory ] = useState();
    const [ selectedType, setSelectedType ] = useState();
    const [ types, setTypes] = useState(null);
    const [ initialLoad, setInitialLoad ] = useState(true);
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
      
        const fetchTypesBySelectedCategory = async () => {
            

            if(initialLoad) {
                setSelectedType(null);
                setInitialLoad(false);
            } else {

                const responseData = await sendRequest(`http://localhost:3001/api/types/category/${selectedCategory._id}`);

                console.log(responseData);
                setTypes(responseData);
                console.log(selectedCategory._id);
                setInitialLoad(false);
            }
        }

        
        fetchTypesBySelectedCategory();
       
    }, [selectedCategory]);

    const [formState, inputHandler, setFormData] = useForm(
        {
            name: 
            {
                value: '',
                isValid: 'true'
            },
            description: 
            {
                value: '',
                isValid: 'true'
            },
            unitsInStock: 
            {   
                value: '',
                isValid: 'true'
            },
            sku:
            {
                value: '',
                isValid: 'true'
            },
            bus_power:
            {
                value: '',
                isValid: 'true'
            },
            width:
            {
                value: '',
                isValid: 'true'
            },
            height: 
            {
                value: '',
                isValid: 'true'
            },
            depth: {
                value: '',
                isValid: 'true'
            },
            weight: {
                value: '',
                isValid: 'true'
            },
            discountCategory: 
            {
                value: '',
                isValid: 'true'
            },
            price: {
                value: '',
                isValid: 'true'
            },
            currency: {
                value: '',
                isValid: true
            },
            categoryId: {
                value: '',
                isValid: 'true',
            },
            typeId: {
                value: '',
                isValid: 'true'
            }
        }, false
    );

    

    const hideSuccessModal = async (event) => {
        event.preventDefault();

        setShowSuccessModal(false);
        history.push('/admin-products');
    }


    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        console.log();

        try {
            const response = await sendRequest(
                `http://localhost:3001/api/products`,
                'POST',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    description: formState.inputs.description.value,
                    unitsInStock: formState.inputs.unitsInStock.value,
                    sku: formState.inputs.sku.value,
                    bus_power: formState.inputs.bus_power.value,
                    width: formState.inputs.width.value,
                    height: formState.inputs.height.value,
                    depth: formState.inputs.depth.value,
                    weight: formState.inputs.weight.value,
                    discountCategory: formState.inputs.discountCategory.value,
                    price: formState.inputs.price.value,
                    currency: formState.inputs.currency.value,
                    categoryId: selectedCategory._id,
                    typeId: selectedType._id
                }),
                {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                }
            );
        } catch (err) {}

        setShowSuccessModal(true);
    }

    return (
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
                    <div className="section-cart__left">
                        <form className="form" onSubmit={onSubmitHandler}>
                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Full Name" id="name" required/>
                                <label for="name" className="form__label">Full Name</label> */}
                                <Input
                                        id="name"
                                        element="input"
                                        type="text"
                                        label="Product name"
                                        validators={[]}
                                        errorText="Please enter a name"
                                        onInput={inputHandler}
                                    />
                            </div>
                            <hr />

                            <div className="form__group">
                                {/* <input type="email" className="form__input" placeholder="Email address" id="email" required/>
                                <label for="email" className="form__label">Email</label> */}
                                <Input
                                        id="description"
                                        element="input"
                                        type="text"
                                        label="Description"
                                        validators={[]}
                                        errorText="Please enter your description"
                                        onInput={inputHandler}
                                    />
                                
                            </div>
                            <hr />    
                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Phone" id="phone" required/>
                                <label for="text" className="form__label">Phone</label> */}
                                 <Input
                                        id="unitsInStock"
                                        element="input"
                                        type="text"
                                        label="Units in stock"
                                        validators={[]}
                                        errorText="Please enter units in stock"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <hr /> 
                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Company" id="company" required/>
                                <label for="company" className="form__label">Company</label> */}
                                 <Input
                                        id="sku"
                                        element="input"
                                        type="text"
                                        label="SKU"
                                        validators={[]}
                                        errorText="Please enter product sku"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Organization ID" id="org_id" required/>
                                <label for="org_id" className="form__label">Organization ID</label> */}
                                    <Input
                                        id="busPower"
                                        element="input"
                                        type="text"
                                        label="Bus Power"
                                        validators={[]}
                                        errorText="Please enter product bus power"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Tax Registration ID" id="tax_reg_id" required/>
                                <label for="tax_reg_id" className="form__label">Tax Registration ID</label> */}
                                <Input
                                        id="width"
                                        element="input"
                                        type="text"
                                        label="Width"
                                        validators={[]}
                                        errorText="Please enter product width"
                                        onInput={inputHandler}
                                    />
                           
                            </div>
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Address" id="billing_address" required/>
                                <label for="billing_address" className="form__label">Address</label> */}
                                <Input
                                        id="height"
                                        element="input"
                                        type="text"
                                        label="Height"
                                        validators={[]}
                                        errorText="Please enter product height"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Address line" id="billing_address_line" required/>
                                <label for="billing_address_line" className="form__label">Address line</label> */}
                            
                                <Input
                                        id="depth"
                                        element="input"
                                        type="text"
                                        label="Depth"
                                        validators={[]}
                                        errorText="Please enter product depth"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Address line 2" id="billing_address_line2" required/>
                                <label for="billing_address_line2" className="form__label">Address line 2</label> */}
                            
                                <Input
                                        id="weight"
                                        element="input"
                                        type="text"
                                        label="Weight"
                                        validators={[]}
                                        errorText="Please enter product weight"
                                        onInput={inputHandler}
                                    />
                            </div>   
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="City" id="city" required/>
                                <label for="city" className="form__label">City</label> */}
                            
                                <Input
                                        id="discountCategory"
                                        element="input"
                                        type="text"
                                        label="Discount category"
                                        validators={[]}
                                        errorText="Please enter product discount category"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Postal code" id="postal_code" required/>
                                <label for="postal_code" className="form__label">Postal code</label> */}
                            
                                <Input
                                        id="price"
                                        element="input"
                                        type="text"
                                        label="Price"
                                        validators={[]}
                                        errorText="Please enter product price"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Postal code" id="postal_code" required/>
                                <label for="postal_code" className="form__label">Postal code</label> */}
                            
                                <Input
                                        id="currency"
                                        element="input"
                                        type="text"
                                        label="Currency"
                                        validators={[]}
                                        errorText="Please enter product price"
                                        onInput={inputHandler}
                                    />
                            </div> 
                            <hr />

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Country" id="country" required/>
                                <label for="country" className="form__label">Country</label> */}
                            
                               <Select 
                                    getOptionValue={option => option._id}
                                    getOptionLabel={option => option.name}
                                    onChange={setSelectedCategory}
                                    options={props.categories}
                                    value={selectedCategory}
                               />
                            </div> 
                            
                            <hr />  

                            <div className="form__group">
                                {/* <input type="text" className="form__input" placeholder="Country" id="country" required/>
                                <label for="country" className="form__label">Country</label> */}
                            
                                <Select 
                                    getOptionValue={option => option._id}
                                    getOptionLabel={option => option.name}
                                    onChange={setSelectedType}
                                    options={types}
                                    value={selectedType}
                                />

                            </div> 
                            <hr />
                            
                            <ImageUpload id="image" onInput={inputHandler} errorText="Please provide an image"/>
                            
                            <br />
                            
                            <button type="submit" style={{marginTop: 1+"rem"}} className="btn btn--mov">
                               Save data
                            </button>                
                        </form>
                        <br />
                    </div> 
                }
            </div>
        </React.Fragment>
    );
}

export default NewProductForm;