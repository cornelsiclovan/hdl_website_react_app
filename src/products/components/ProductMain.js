import React from 'react';
import { Link } from 'react-router-dom';

const ProductMain = (props) => {

    const downloadDocumentClickHandler = async (event) => {
        event.preventDefault();

        try {
            let response = await fetch(`http://localhost:3001/api/products/${props.product._id}/docs/${event.target.dataset.doc_name.split('\\')[2]}`);
        
            response.blob().then(
                file => {
                    var newFile = new File([file], event.target.dataset.doc_name, {type: "application/pdf"});

                    window.open(`http://localhost:3001/${event.target.dataset.doc_name}`);

                    console.log(newFile);

                    let outside = URL.createObjectURL(file);
                }).then(res => {
                    console.log('finish docs');
                })
        }catch (error) {

        }

        console.log(event.target.dataset.doc_name);
    }

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

            {props.product.image.map(image => {
                 return <img style={{maxWidth: '300px'}}  className="card-item__picture" src={"http:\\\\localhost:3001\\"+image} />
            })}

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
        </React.Fragment>
    )
}

export default ProductMain;