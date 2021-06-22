import React from 'react';

const TypeItem = (props) =>  {

    return (
        <React.Fragment>
              <div style={{padding: '20px', fontSize: '15px'}}>
                {props.type.name} {props.type.category.name}
                <a href="" style={{
                            float: 'right',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px', 
                            backgroundColor: 'orangered'}} 
                            >
                                DELETE
                </a>
                <a href="" style={{
                            float: 'right',
                            marginRight: '10px',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px', 
                            backgroundColor: '#00baff'}} 
                            >
                                EDIT
                </a>
            </div>
            <hr/>
        </React.Fragment>
    );
}

export default TypeItem;