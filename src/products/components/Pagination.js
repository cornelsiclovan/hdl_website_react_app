import React from "react";

const Pagination = (props) => {
    const pages = [];
    let i=0;
    const len = props.pageNumber;

    while(++i <= len) pages.push(i);

    return (
        <React.Fragment>
            <div class="section-pagination">
                    <ul class="product-pagination"> 
                        <li class="product-pagination__item">
                            <a 
                                class="product-pagination__link" 
                                href=""
                                onClick={props.decrementCurrentPageClickHandler}
                            >
                                {"|<"}
                            </a>  
                        </li>
                        
                        {
                           pages.map(  page => {

                                if(props.currentPage === page)
                                    return (
                                        <li class="product-pagination__item">
                                            <a 
                                                class="product-pagination__link product-pagination__link--selected"  
                                                href=""
                                                onClick={props.setCurrentPageClickHandler}
                                                data-letter={page}
                                            >
                                                {page}
                                            </a>    
                                        </li> 
                                    )   
                                    else 
                                        return (
                                            <li class="product-pagination__item">
                                            <a 
                                                class="product-pagination__link product-pagination__link"  
                                                href=""
                                                onClick={props.setCurrentPageClickHandler}
                                                data-letter={page}
                                            >
                                                {page}
                                            </a>    
                                        </li> 
                                        )
                               
                                
                            })
                        }
                        {/* <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">2</a>   
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">3</a>  
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">4</a>   
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">5</a>    
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">6</a>    
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">7</a>  
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">8</a>   
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">9</a>    
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">10</a>    
                        </li>
                        <li class="product-pagination__item">
                            <a class="product-pagination__link"  href="#">...</a>    
                        </li>
                        */}
                        <li class="product-pagination__item">
                            <a 
                                class="product-pagination__link"  
                                href="" 
                                onClick={props.incrementCurrentPageClickHandler}
                            >
                                {`|>`}
                            </a>    
                        </li> 
                    </ul>
            </div>
        </React.Fragment>
    );
}

export default Pagination; 