import React, { useState, useContext } from 'react';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';

import { VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import { AuthContext } from '../../shared/context/auth-context';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm(
        {
            email:
            {
                value: '',
                isValid: 'false'
            },
            password:
            {
                value: '',
                isValid: 'false'
            }
        }, false
    );

    const switchLoginHandler = event => {
        if(!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            )
        }
        setIsLoginMode(true);
    }

    const switchSignupHandler = event => {
        if(!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            )
        }
        setIsLoginMode(false);
    }

    const authSubmitHandler = async event => {
        event.preventDefault();

        console.log(formState.inputs);

        if(isLoginMode) {
            try {
                const responseData = await sendRequest(
                    `${BASE_URL}/api/auth`,
                    'POST',
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );

                console.log(responseData)


                auth.login(responseData.userId, responseData.token, responseData.discount, responseData.isAdmin);
            } catch(err) {}

        } else {
            try {
                const responseData = await sendRequest(
                    `${BASE_URL}/api/users`,
                    'POST',
                    JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    }),
                    {
                        'Content-Type': 'application/json'
                    }
                );
                console.log(responseData)

                auth.login(responseData.userId, responseData.token);
            } catch(err) {}
        }
    }

    return (
       <React.Fragment>
           <ErrorModal error={error} onClear={clearError}/>
           <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form className="form" onSubmit={authSubmitHandler}>
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Partener account 
                                    </h2>   
                                </div>  
                                {/* <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Full Name" id="name" required />
                                    <label for="name" class="form__label">Full Name</label>
                                </div> */}
                                {
                                    !isLoginMode &&
                                    <Input
                                        id="name"
                                        element="input"
                                        type="text"
                                        label="Your name"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter a name"
                                        onInput={inputHandler}
                                    />
                                }
                                {/* <div class="form_group">
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required />
                                    <label for="email" class="form__label">Email</label>
                                </div> */}
                                <Input
                                    id="email"
                                    element="input"
                                    type="text"
                                    label="Your email"
                                    validators={[VALIDATOR_EMAIL()]}
                                    errorText="Please enter a name"
                                    onInput={inputHandler}
                                />

                                <Input
                                    id="password"
                                    element="input"
                                    type="password"
                                    label="Password"
                                    validators={[VALIDATOR_MINLENGTH(6)]}
                                    errorText="Please enter a name"
                                    onInput={inputHandler}
                                />

                    
                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" onClick={switchLoginHandler} className="form__radio-input" id="login" name="account"/>
                                        <label htmlFor="login" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Login
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" onClick={switchSignupHandler} className="form__radio-input" id="new" name="account"/>
                                        <label htmlFor="new" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Signup
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <button className="btn btn--mov">
                                        {isLoginMode ? 'Login' : 'Signup'} 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
       </React.Fragment>
    );
};

export default Auth;