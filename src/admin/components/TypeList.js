import React from 'react';
import TypeItem from './TypeItem';

const TypeList = (props) => {

    return (
        <React.Fragment>
             <br />
            <h1>Types  <a href="">add new</a></h1> 

            {props.types.map(type => {
                return <TypeItem type={type}/>
            })}
            
        </React.Fragment>
    )
}

export default TypeList;