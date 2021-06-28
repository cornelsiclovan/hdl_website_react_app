import React, {useContext} from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CategoryItem = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const onDeleteClickHandler = async (event) => {
        event.preventDefault();

        console.log(props.category._id);
        const categoriesTemp = [...props.categories];

        try {
            const response = await sendRequest(
                `${BASE_URL}/api/categories/${props.category._id}`,
                'DELETE',
                null,
                {
                    'x-auth-token': auth.token
                }
            );
            const temp = categoriesTemp.filter(category => category._id !== props.category._id);

            console.log(temp);
            props.setCategories(temp);

        } catch(error) {
        }
    }

    return (
        <React.Fragment>
             <ErrorModal error={error} onClear={clearError}/>
            <div style={{padding: '20px', fontSize: '15px'}}>
                {props.category.name}
                <a href="" onClick={onDeleteClickHandler}
                           style={{
                            float: 'right',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px', 
                            backgroundColor: 'orangered'}} 
                            >
                                DELETE
                </a>
                <a href={`/edit-category/${props.category._id}`} style={{
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

export default CategoryItem;