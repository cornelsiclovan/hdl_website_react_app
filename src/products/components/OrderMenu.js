import React from 'react';

const OrderMenu = () => {

    return (
        <React.Fragment>
            <div class="order-menu">
                <nav class="order-menu__nav">
                    <ul class="order-menu__list">
                        <li class="order-menu__item">
                            <a href="#" class="order-menu__link" ><b>Order by:</b></a>
                        </li>
                        <li class="order-menu__item">
                            <a href="#" class="order-menu__link">TOP</a>
                        </li>
                        <li class="order-menu__item">
                            <a href="#" class="order-menu__link">Price Asc.</a>
                        </li>
                        <li class="order-menu__item">
                            <a href="#" class="order-menu__link">Price Desc.</a>
                        </li>
                        <li class="order-menu__item">
                            <a href="#" class="order-menu__link">Name</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default OrderMenu;