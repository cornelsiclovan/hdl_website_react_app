import React, {useState} from 'react';
import EditCategoryForm from './EditCategoryForm';
import TypeForm from './TypeForm';
import TypeItem from './TypeItem';

const TypeList = (props) => {
    const [addTypeFormShow, setAddTypeFormShow] = useState(false);

    const onClickShowFormHandler = (event) => {
        event.preventDefault();

        setAddTypeFormShow(true);
    }

    return (
        <React.Fragment>
             <br />
            <h1>
                Types &nbsp;  
                <a href="" onClick={onClickShowFormHandler}>add new</a>
            </h1> 

         

            {addTypeFormShow && <TypeForm categoryId={props.category._id}  setAddTypeFormShow={setAddTypeFormShow} types={props.types} setTypes={props.setTypes}/>}

            {props.types.map(type => {
                return <TypeItem type={type} types={props.types} setTypes={props.setTypes}/>
            })}
            
        </React.Fragment>
    )
}

export default TypeList;