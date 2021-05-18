import React from 'react';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ReviewMain from '../components/ReviewMain';
import ShoppingList from '../components/ShoppingList';
import ShoppingMain from '../components/ShoppingMain';

const Review = () => {

    return(
        <React.Fragment>
        <Header />
        <Navigation />
        <ShoppingMain />
        <ReviewMain />
        <ShoppingList />
        <Footer />
    </React.Fragment>
    );
}

export default Review;
