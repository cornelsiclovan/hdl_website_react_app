import React, { useEffect, useState, useContext, useRef } from 'react';

import { useHttpClient } from '../../shared/hooks/http-hook';
import { useForm } from '../../shared/hooks/form-hook';

import Input from '../../shared/components/FormElements/Input';

import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/UIElements/Button';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { AuthContext } from '../../shared/context/auth-context';
import { useParams, useHistory } from 'react-router-dom';

const EditProductForm = (props) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [ selectedCategory, setSelectedCategory ] = useState(props.product.category);
    const [ selectedType, setSelectedType ] = useState(props.product.type);
    const [ types, setTypes] = useState(null);
    const [ initialLoad, setInitialLoad ] = useState(true);
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

     // handle picture upload
    const [previewUrls, setPreviewUrls] = useState();
    const [images, setImages] = useState([]);
    const [image, setImage] = useState();

    // handle documents upload
    const [previewDocs, setPreviewDocs] = useState();
    const [docs, setDocs] = useState([]);

    const imagesFromBlob = [];
    const imageFilesFromBlob = [];
  
    const filePickerRef = useRef();
    const docsPickerRef = useRef();

    const [fetchedBlob, setFetchedBlob] = useState(false);
    const [finalBlobArray, setFinalBlobArray] = useState();

    useEffect(() => {
      
        setPreviewUrls(props.product.image);

        const urlToFile = async() => {
            const tempFiles = [];
    
            //console.log(previewUrls);
    
            for(let i = 0; i < previewUrls.length; i++) {
                const fileReader = new FileReader();
                fileReader.onload =  () => {
                    tempFiles.push(fileReader.result);
                };
    
                //console.log(previewUrls[i].split('\\')[2]);
                try {
                    let response = await fetch(`http://localhost:3001/api/products/${props.product._id}/images/${previewUrls[i].split('\\')[2]}`);
                
                    
                    response.blob().then(
                        file => { 
                    
                           
                            var newfile = new File([file], `image${i}.jpg`, {type: "image/jpeg"});

                            console.log(newfile);

                            imageFilesFromBlob.push(newfile);

                            let outside = URL.createObjectURL(file)
                            imagesFromBlob.push(outside);
                            
                        }).then(res => {
                            if(previewUrls.length === imagesFromBlob.length) {
                                console.log('finish');
                                setFetchedBlob(true);
                                console.log('imagesfromblob inside', imagesFromBlob.length)
                                setFinalBlobArray(imagesFromBlob);
                                setImages(imageFilesFromBlob);
                            }   
                        });
                } catch (error) {
                    console.log(error);
                }
            }
        }
            
        if(previewUrls && !fetchedBlob)
            urlToFile();


        const fetchTypesBySelectedCategory = async () => {
            

            if(!initialLoad) {
                setSelectedType(null);
               
            }

            const responseData = await sendRequest(`http://localhost:3001/api/types/category/${selectedCategory._id}`);

            console.log(responseData);
            setTypes(responseData);
            console.log(selectedCategory._id);
            setInitialLoad(false);
        }

        setFormData({
            name: 
            {
                value: props.product.name,
                isValid: 'true'
            },
            description: 
            {
                value: props.product.description,
                isValid: 'true'
            },
            unitsInStock: 
            {   
                value: props.product.unitsInStock,
                isValid: 'true'
            },
            sku:
            {
                value: props.product.sku,
                isValid: 'true'
            },
            bus_power:
            {
                value: props.product.bus_power,
                isValid: 'true'
            },
            width:
            {
                value: props.product.width,
                isValid: 'true'
            },
            height: 
            {
                value: props.product.height,
                isValid: 'true'
            },
            depth: {
                value: props.product.depth,
                isValid: 'true'
            },
            weight: {
                value: props.product.weight,
                isValid: 'true'
            },
            discountCategory: 
            {
                value: props.product.discountCategory,
                isValid: 'true'
            },
            price: {
                value: props.product.price,
                isValid: 'true'
            },
            currency: {
                value: props.product.currency,
                isValid: 'true'
            },
            categoryId: {
                value: props.product.category._id,
                isValid: 'true',
            },
            typeId: {
                value: props.product.type._id,
                isValid: 'true'
            }
        });

        fetchTypesBySelectedCategory();
       
    }, [selectedCategory, previewUrls]);

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
        
        console.log(props.product._id);

        // try {
        //     const response = await sendRequest(
        //         `http://localhost:3001/api/products/${props.product._id}`,
        //         'PUT',
        //         JSON.stringify({
        //             name: formState.inputs.name.value,
        //             description: formState.inputs.description.value,
        //             unitsInStock: formState.inputs.unitsInStock.value,
        //             sku: formState.inputs.sku.value,
        //             bus_power: formState.inputs.bus_power.value,
        //             width: formState.inputs.width.value,
        //             height: formState.inputs.height.value,
        //             depth: formState.inputs.depth.value,
        //             weight: formState.inputs.weight.value,
        //             discountCategory: formState.inputs.discountCategory.value,
        //             price: formState.inputs.price.value,
        //             currency: formState.inputs.currency.value,
        //             categoryId: selectedCategory._id,
        //             typeId: selectedType._id
        //         }),
        //         {
        //             'Content-Type': 'application/json',
        //             'x-auth-token': auth.token
        //         }
        //     );
        // } catch (err) {}

        
        const formData = new FormData();
        formData.append('name', formState.inputs.name.value);
        formData.append('description', formState.inputs.description.value);
        formData.append('unitsInStock', formState.inputs.unitsInStock.value);
        formData.append('sku', formState.inputs.sku.value);
        formData.append('bus_power', formState.inputs.bus_power.value);
        formData.append('width', formState.inputs.width.value);
        formData.append('height', formState.inputs.height.value);
        formData.append('depth', formState.inputs.depth.value);
        formData.append('weight', formState.inputs.weight.value);
        formData.append('discountCategory', formState.inputs.discountCategory.value);
        formData.append('price', formState.inputs.price.value);
        formData.append('currency', formState.inputs.currency.value);
        formData.append('categoryId', selectedCategory._id);
        formData.append('typeId', selectedType._id);

        console.log(images);


       for(let i=0; i < images.length; i++) {
            formData.append(`image`, images[i]);
        }

        // for(let i=0; i < docs.length; i++) {
        //     formData.append('docs', docs[i]);
        // }        


        await sendRequest(
            `http://localhost:3001/api/products/${props.product._id}`,
            'PUT',
            formData,
            {
                'x-auth-token': auth.token
            }
        )

        setShowSuccessModal(true);
    }

    console.log(props.product.image);

    const picPickedHandler = (event) => {
       
        setImages(event.target.files);
    }

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    const onClickCancelPhoto = (event) => {
        event.preventDefault();

        const imagesTemp = [];
        const previewUrlsTemp = [];

        console.log(images[0]);

        for(let i=0; i < images.length; i++) {
            if(previewUrls[i] !== event.target.dataset.previewurl) {
                imagesTemp.push(images[i]);
                previewUrlsTemp.push(previewUrls[i]);
            }

            setPreviewUrls(previewUrlsTemp);
            setImages(imagesTemp);
        }

        console.log(event.target.dataset.previewurl);
    }

    console.log(fetchedBlob);
    console.log(previewUrls);
    console.log(finalBlobArray);

    console.log('images from blob', imagesFromBlob.length);

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
                    !props.isLoading && props.product &&
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
                                        initialValue={props.product.name}
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
                                        initialValue={props.product.descritption}
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
                                        initialValue={props.product.unitsInStock}
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
                                        initialValue={props.product.sku}
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
                                        initialValue={props.product.bus_power}
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
                                        initialValue={props.product.width}
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
                                        initialValue={props.product.height}
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
                                        initialValue={props.product.depth}
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
                                        initialValue={props.product.weight}
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
                                        initialValue={props.product.discountCategory}
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
                                        initialValue={props.product.price}
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
                                        initialValue={props.product.currency}
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
                            <br />
                            
                            <hr />
                            
                            <input 
                                type="file" 
                                id="file" 
                                multiple name="file"  
                                ref={filePickerRef}
                                style={{display: 'none'}}
                                onChange={picPickedHandler}
                                />
                            <div className={`image-upload ${props.center && 'center'}`}>
                                {previewUrls && previewUrls.length > 0 &&
                                    previewUrls.map(previewUrl => 
                                        <div style={{marginBottom: '50px', height: '115px', padding: '10px', float:'left'}}> 
                                            <a href="" onClick={onClickCancelPhoto} data-previewurl={previewUrl}>cancel</a>
    
                                            <div style={{}}  className="image-upload__preview">
                                                {previewUrl && <img src={"http:\\\\localhost:3001\\" +previewUrl} alt="Preview" />}
                                                {!previewUrl && <p>Please pick an image.</p>}
                                            </div>
                                        </div>
                                    )
                                }   
                            </div>

                            <div className={`image-upload ${props.center && 'center'}`}>
                                {finalBlobArray && finalBlobArray.length > 0 &&
                                    finalBlobArray.map(previewUrl => 
                                        <div style={{marginBottom: '50px', height: '115px', padding: '10px', float:'left'}}> 
                                            <a href="" onClick={onClickCancelPhoto} data-previewurl={previewUrl}>cancel</a>
    
                                            <div style={{}}  className="image-upload__preview">
                                                {previewUrl && <img src={previewUrl} alt="Preview" />}
                                                {!previewUrl && <p>Please pick an image.</p>}
                                            </div>
                                        </div>
                                    )
                                }   
                            </div>
                            <br/> 

                            <div style={{width: '1000px'}}>
                            <Button type="button" onClick={pickImageHandler} >Pick Images</Button>
                            
                            <br />
                            <hr style={{width: '100%'}}/>

                            </div>

                            <button type="submit" style={{marginTop: 1+"rem"}} className="btn btn--mov">
                               Update your data
                            </button>                
                        </form>
                        <br />
                    </div> 
                }
            </div>
        </React.Fragment>
    );
}

export default EditProductForm;