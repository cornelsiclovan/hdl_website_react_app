import React, {useContext} from 'react';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const TypeForm = (props) => {
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
    
        let tempTypes = [];

        if(props.types && props.types.length > 0)
            tempTypes = [...props.types];

        try {
            const response = await sendRequest(
                `http://localhost:3001/api/types`,
                'POST',
                JSON.stringify({
                    name: formState.inputs.name.value,
                    description: formState.inputs.description.value,
                    categoryId: props.categoryId
                }),
                {
                    'Content-Type': 'application/json',
                    'x-auth-token': auth.token
                }
            );
              
            tempTypes.push(response);
            props.setAddTypeFormShow(false);
            props.setTypes(tempTypes);
        } catch(err) {}
   
    }

    return (
        <React.Fragment>
            <React.Fragment>
            <div>
                <form className="form" onSubmit={onSubmitHandler}>

                    <div class="form_group">
                        <Input
                            id="name"
                            element="input"
                            type="text"
                            label="type name"
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
                            label="type description"
                            validators={[]}
                            initialValue={''}
                            errorText="Please enter category description"
                            onInput={inputHandler}
                        />
                    </div>
                
                    <button className="btn btn--mov">
                        Add
                    </button>
                </form>
            </div>
        </React.Fragment>
        </React.Fragment>
    );
}

export default TypeForm;