import React, {useContext} from 'react';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CategoryForm = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
    
        const tempCategories = [...props.categories];

        try {
            const response = await sendRequest(
                `${BASE_URL}/api/categories`,
                'POST',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    description: formState.inputs.description.value
                }),
                {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                }
            );
              
            tempCategories.push(response);
            props.setAddCategoryFormShow(false);
            props.setCategories(tempCategories);
        } catch(err) {}
   
    }


    return (
        <React.Fragment>
            <div>
                <form className="form" onSubmit={onSubmitHandler}>

                    <div class="form_group">
                        <Input
                            id="name"
                            element="input"
                            type="text"
                            label="category name"
                            validators={[]}
                            initialValue={''}
                            errorText="please enter the category name"
                            onInput={inputHandler}
                        />
                    </div>

                    <div class="form_group">
                        <Input
                            id="description"
                            element="input"
                            type="text"
                            label="category description"
                            validators={[]}
                            initialValue={''}
                            errorText="Please enter category description"
                            onInput={inputHandler}
                        />
                    </div>
                
                    <button  className="btn btn--mov">
                        Add
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default CategoryForm;