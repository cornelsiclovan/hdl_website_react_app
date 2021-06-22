import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';

const CategoryForm = (props) => {
    
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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        props.setAddCategoryFormShow(false);
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
                
                    <button 
                            style={{
                            borderRadius: '5px',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px', 
                            backgroundColor: 'greenyellow'}}
                            >
                                Add</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default CategoryForm;