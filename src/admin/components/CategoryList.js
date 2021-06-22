import React, {useState} from 'react';
import CategoryForm from './CategoryForm';

import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
    const [addCategoryFormShow, setAddCategoryFormShow] = useState(false);

    const onClickShowFormHandler = (event) => {
        event.preventDefault();

        setAddCategoryFormShow(true);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        setAddCategoryFormShow(false);
    }

    return (
        <React.Fragment>
            <br />
            <h1>Categories  <a href="" onClick={onClickShowFormHandler}>add new</a></h1>

            {addCategoryFormShow && <CategoryForm setAddCategoryFormShow={setAddCategoryFormShow}/>}

            {
                props.categories.map(category => {
                    return <CategoryItem category={category} />
                })
            }
        </React.Fragment>
    );

}

export default CategoryList;