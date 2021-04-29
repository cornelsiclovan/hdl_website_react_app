import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import MainMenu from '../components/MainMenu';
import OrderMenu from '../components/OrderMenu';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProducList';
import SideMenu from '../components/SideMenu';

const Products = () => {

    return (
        <React.Fragment>
            <Header />  
            <Navigation />
            <MainMenu />
            <OrderMenu />
            <SideMenu />
            <ProductList />
            <Pagination /> 
            <Footer />
        </React.Fragment>
    );
};

export default Products;