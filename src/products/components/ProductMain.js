import React from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ProductMain = (props) => {

    const downloadDocumentClickHandler = async (event) => {
        event.preventDefault();

        try {
            let response = await fetch(`${BASE_URL}/api/products/${props.product._id}/docs/${event.target.dataset.doc_name.split('\\')[2]}`);
        
            response.blob().then(
                file => {
                    var newFile = new File([file], event.target.dataset.doc_name, {type: "application/pdf"});

                    window.open(`${BASE_URL}/${event.target.dataset.doc_name}`);

                    console.log(newFile);

                    let outside = URL.createObjectURL(file);
                }).then(res => {
                    console.log('finish docs');
                })
        }catch (error) {

        }

        console.log(event.target.dataset.doc_name);
    }

    const firstImage = props.product.image.shift();

    return (
        <React.Fragment>
            <div className="continue-shopping"> 
                <Link className="btn-text" to="/products">
                    <a  style={{paddingTop:"2rem"}}> &larr; &nbsp; continue shopping &nbsp;  </a>
                </Link>
            </div>
            <br />
            <div>
                <h1> {props.product.name} </h1>
            </div>
            <br />
            <div>
                <h2> {props.product.description} </h2>
            </div>

            <div style={{float: 'left', width: '100%'}}> 
                
                <img style={{width: '100%', border: '1px solid lightgrey', padding: '5px'}}  className="card-item__picture" src={"http:\\\\localhost:3001\\"+firstImage} />

                <br/>

                {props.product.image.map(image => {
                    
                    return <img style={{maxWidth: '13%', border: '1px solid lightgrey'}}  className="card-item__picture" src={"http:\\\\localhost:3001\\"+image} />
                })}

            </div> 

           
                <h1>Related documents</h1>
        
            <br />


            {
                
                props.product.docs.map((doc, i=0)=> {
                    //console.log(doc);
                    if(props.product.docNames[i++]) {
                        
                        return    <div data-doc_name={doc} style={{float: 'left', margin: '10px'}} onClick={downloadDocumentClickHandler} className="image-upload__preview">
                                    <div>
                                    {
                                        
                                        props.product.docNames[i-1]
                                    }
                                    </div>
                                </div>
                            
                    } else {
                        return    <div  data-doc_name={doc} style={{float: 'left', margin: '10px'
                        }} onClick={downloadDocumentClickHandler} className="image-upload__preview">
                                    <div>
                                        {

                                            "document "+i++
                                        }
                                    </div>
                                    
                                </div>
                    }

                   
                })
            }

            <br />
         
            
            <div style={{clear: 'both', width: '50%'}}>
                <br />
                <h1>Parameters</h1>
                <h2>Model <span style={{float: 'right'}}>{props.product.name}</span></h2>
                <h2>SKU  <span style={{float: 'right'}}>{props.product.sku}</span></h2>
                <h2>Bus Power  <span style={{float: 'right'}}>{props.product.bus_power}</span></h2>
                <h2>Width  <span style={{float: 'right'}}>{props.product.width}</span></h2>
                <h2>Height  <span style={{float: 'right'}}>{props.product.height}</span></h2>
                <h2>Depth  <span style={{float: 'right'}}>{props.product.depth}</span></h2>
                <h2>Weight  <span style={{float: 'right'}}>{props.product.weight}</span></h2>
                <h2>Discount categort  <span style={{float: 'right'}}>{props.product.discountCategory}</span></h2>
            < br/> 
            </div>
            
        </React.Fragment>
    )
}

export default ProductMain;