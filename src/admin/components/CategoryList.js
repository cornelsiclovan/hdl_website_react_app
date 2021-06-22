import React from 'react';

import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
    

    return (
        <React.Fragment>
            <br />
            <h1>Categories  <a href="">add new</a></h1>
            {
                props.categories.map(category => {
                    return <CategoryItem category={category} />
                })
            }
        </React.Fragment>
    );

}

export default CategoryList;