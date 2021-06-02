import React, {useEffect, useContext, useRef, useState} from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import Input from '../../shared/components/FormElements/Input';

import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/UIElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const ChangePasswordMain = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formState, inputHandler, setFormData] = useForm(
        {
            old_password: 
            {
                value: '',
                isValid: 'true'
            },
            new_password: 
            {
                value: '',
                isValid: 'true'
            },
            retype_new_password: 
            {   
                value: '',
                isValid: 'true'
            }
        }, false
    );

    // useEffect(() => { 
    //     const fetchBillingData = async () => {
          
    //         const response = await sendRequest(`http://localhost:3001/api/users/me`,
    //                                             'GET',
    //                                             null,
    //                                             {
    //                                                 'x-auth-token': auth.token
    //                                             });
      
           
    //         setLoadedUser(response);
    //         setFormData({
    //             old_password: 
    //             {
    //                 value: '',
    //                 isValid: 'true'
    //             },
    //             new_password: 
    //             {
    //                 value: '',
    //                 isValid: 'true'
    //             },
    //             repeat_new_password: 
    //             {   
    //                 value: '',
    //                 isValid: 'true'
    //             }
    //         });
    //     }

      
    //     fetchBillingData();
        
    // }, [sendRequest]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
       
    
        try {
            const response = await sendRequest(
                `http://localhost:3001/api/users/change_password/${auth.userId}`,
                'PUT',
                JSON.stringify({
                    old_password: formState.inputs.old_password.value,
                    new_password: formState.inputs.new_password.value,
                    retype_new_password: formState.inputs.retype_new_password.value
                }),
                {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                }
            );
              
            setShowSuccessModal(true);
        } catch(err) {}
    }

    const hideSuccessModal = async (event) => {
        event.preventDefault();

        auth.logout();
        setShowSuccessModal(false);

    }
    
    return (
        <React.Fragment>
             <ErrorModal error={error} onClear={clearError}/>
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
            <div class="continue-shopping"> 
               

               <h1 style={{color: "black"}}>Change password</h1>
           </div>

           <form className="form" onSubmit={onSubmitHandler}>
               <div class="form_group">
                   {/* <input type="text" class="form__input" placeholder="Your existing password" id="existing_password" required />
                   <label for="city" class="form__label">Your existing password</label> */}

                    <Input
                        id="old_password"
                        element="input"
                        type="text"
                        label="Your existing password"
                        validators={[]}
                        initialValue={''}
                        errorText="Please enter your password"
                        onInput={inputHandler}
                    />
               </div>   
               <div class="form_group">
                   {/* <input type="text" class="form__input" placeholder="New password" id="new_password" required />
                   <label for="new_password" class="form__label">New password</label> */}
                  
                    <Input
                        id="new_password"
                        element="input"
                        type="text"
                        label="Type your new password"
                        validators={[]}
                        initialValue={''}
                        errorText="Please enter your password"
                        onInput={inputHandler}
                    />
               </div> 

               <div class="form_group">
                   {/* <input type="text" class="form__input" placeholder="Confirm password" id="confirm_password" required />
                   <label for="confirm_password" class="form__label">Confirm password</label> */}
               
                    <Input
                        id="retype_new_password"
                        element="input"
                        type="text"
                        label="Re-type your new password"
                        validators={[]}
                        initialValue={''}
                        errorText="Please retype your password"
                        onInput={inputHandler}
                    />
               </div>   

               <center>
                   <button style={{marginTop: 1+"rem"}} class="btn btn--mov">
                       Change password 
                   </button>
               </center>
           </form>
           <br/>
           <br/>
        </React.Fragment>
    );
}

export default ChangePasswordMain;