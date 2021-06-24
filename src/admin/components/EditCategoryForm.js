import React, {useContext, useState} from 'react';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/UIElements/Button';

const EditCategoryForm = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
            }
        }, false
    );

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    

        try {
            const response = await sendRequest(
                `http://localhost:3001/api/categories/${props.category._id}`,
                'PUT',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    description: formState.inputs.description.value
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
        setShowSuccessModal(false);

    }


    return (
        <React.Fragment>
            <div>
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

                <form className="form" onSubmit={onSubmitHandler}>

                    <div class="form_group">
                        <Input
                            id="name"
                            element="input"
                            type="text"
                            label="category name"
                            validators={[]}
                            initialValue={props.category.name}
                            errorText="please enter the category name"
                            onInput={inputHandler}
                        />
                    </div>

                    <div class="form_group">
                        <Input
                            id="description"
                            element="textarea"
                            type="text"
                            label="category description"
                            validators={[]}
                            initialValue={props.category.description}
                            errorText="Please enter category description"
                            onInput={inputHandler}
                        />
                    </div>
                
                    <button  className="btn btn--mov">
                        modify
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default EditCategoryForm;