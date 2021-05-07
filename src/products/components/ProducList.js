import React from 'react';
import ProductItem from './ProductItem';


// import img1 from "../../img/HDL-MD0206_432-05.jpg" ;
// import img2 from "../../img/HDL-MC64-DALI_431-05.jpg";
// import img3 from "../../img/HDL-MDLED0605_432-08.jpg";
// import img4 from "../../img/HDL-MC64-DALI_431-05.jpg";
// import img5 from "../../img/HDL-MP2B_48-01BDR.jpg";
// import img6 from "../../img/_P3A1193.jpg";
// import img7 from "../../img/HDL-MTIRW-03.jpg";
// import img8 from "../../img/Foto_HDL_MSOUT-4W_.jpg" ;


// const products = [
//     {
//         id : 1,
//         name: "HDL-MD0206432",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "15",
//         image: img1
//     },
//     {
//         id : 2,
//         name: "HDL-MC64-DALI_431-05",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "12",
//         image: img2
//     },
//     {
//         id : 3,
//         name: "HDL_MSOUT-4W",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "1",
//         image: img3
//     },
//     {
//         id : 4,
//         name: "HDL-MC64-DALI_431-05",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "13",
//         image: img4
//     },
//     {
//         id : 5,
//         name: "HDL-MP2B_48-01BDR",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "25",
//         image: img5
//     },
//     {
//         id : 6,
//         name: "HDL-MTS10B.2WI",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "3",
//         image: img6
//     },
//     {
//         id : 7,
//         name: "HDL-MTIRW-03",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "5",
//         image: img7
//     },
//     {
//         id : 8,
//         name: "HDL-MDLED0605_432-08",
//         description: "2CH 6A TRIAC Dimming Acuator",
//         unitsInStock: "14",
//         image: img8  
//     }
// ]


const ProductList = (props) => {

    return (

        <React.Fragment>
            <div class="section-products"> 
                {
                    props.loadedProducts && props.loadedProducts.map(product => {

                        return <ProductItem 
                                key = {product.id}
                                id = {product.id}
                                name = {product.name}
                                description = {product.description.split(',')[0]}
                                unitsInStock = {product.unitsInStock}
                                image = {product.image[0]}
                            />
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default ProductList;