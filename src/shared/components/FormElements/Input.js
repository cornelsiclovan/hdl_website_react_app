import React, { useReducer, useEffect } from 'react';

import  { validate } from '../../util/validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default: 
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        
        dispatch({ 
            type: 'CHANGE', 
            val: event.target.value, 
            validators: props.validators  
        });
    }

    const touchHandler = event => {
        dispatch({
            type: 'TOUCH'
        })
    }


    const element = props.element === 'input' ? (
        <input
            className='form__input' 
            id = {props.id}
            type = {props.type}
            placeholder = {props.placeholder}
            onChange = {changeHandler}
            onBlur = {touchHandler}
            value = {inputState.value}
        />
    ) : (
        <textarea 
            id = {props.id}
            rows = {props.rows || 3}
            onChange = {changeHandler}
            onBlur = {touchHandler}
            value = {inputState.value}
        />
    );

    // let element;

    // if(props.element === 'input') {
       
    //     element = <input
    //         className='form__input' 
    //         id = {props.id}
    //         type = {props.type}
    //         placeholder = {props.placeholder}
    //         onChange = {changeHandler}
    //         onBlur = {touchHandler}
    //         value = {inputState.value}
    //     />
    // } else if(props.element === 'select' && props.category) {
    
    //     element = <select
    //         className='form__input' 
    //         id = {props.id}
    //         type = {props.type}
    //         placeholder = {props.placeholder}
    //         onBlur = {touchHandler}
    //         id = {inputState.id}
    //         value = {inputState.value}
    //     >
    //         {props.items && props.items.map(
    //             item => 
    //              <option  onClick={onCategoryOptionClickHandler} value={item.id}>{item.name}</option>
    //         )}
    //     </select>
    // } else if(props.element === 'select' && !props.category) {
        
    //     element = <select
    //         className='form__input' 
    //         id = {props.id}
    //         type = {props.type}
    //         placeholder = {props.placeholder}
    //         onChange = {changeHandler}
    //         onBlur = {touchHandler}
    //         value = {inputState.value}
            
    //     >
    //         {props.items && props.items.map(
    //             item => 
    //              <option value={item.id}>{item.name}</option>
    //         )}
    //     </select>
    // }else {
    //     element =  <textarea 
    //     id = {props.id}
    //     rows = {props.rows || 3}
    //     onChange = {changeHandler}
    //     onBlur = {touchHandler}
    //     value = {inputState.value}
    //     />
    // }


    return <div className={`form__group`}>
            <label className='form__label' htmlFor={props.id}>{props.label}</label>
            {element}
        </div>;
}

export default Input;