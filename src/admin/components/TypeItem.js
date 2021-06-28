import React, {useContext} from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const TypeItem = (props) =>  {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const onDeleteClickHandler = async (event) => {
        event.preventDefault();

        console.log(props.type._id);


            const typeTemp = [...props.types];

        try {
            const response = await sendRequest(
                `${BASE_URL}/api/types/${props.type._id}`,
                'DELETE',  
                null,
                {
                    'x-auth-token': auth.token
                }
            );
            const temp = typeTemp.filter(type => type._id !== props.type._id);

            console.log(temp);
            props.setTypes(temp);

        } catch(error) {
        }
    }


    return (
        <React.Fragment>
               <ErrorModal error={error} onClear={clearError}/>
              <div style={{padding: '20px', fontSize: '15px'}}>
                {props.type.name}
                <a href="" 
                        onClick={onDeleteClickHandler}
                        style={{
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
