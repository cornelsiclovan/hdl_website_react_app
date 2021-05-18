import React, { useContext } from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import ShoppingCart from '../../shared/components/UIElements/Shopping-cart';
import { AuthContext } from '../../shared/context/auth-context';
import About from '../components/About';
import Auth from '../components/Auth';
import Business from '../components/Business';
import Features from '../components/Features';
import Header from '../components/Header';
import Stories from '../components/Stories';
 
const Home = () => {
    const auth = useContext(AuthContext);

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            {auth.isLoggedIn && <ShoppingCart />}
            <About />
            <Features />
            <Business />
            {/* <Stories /> */}
            <Auth />
            <Footer />
        </React.Fragment>
    );
};

export default Home;