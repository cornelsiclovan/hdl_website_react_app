import React from 'react';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';
import About from '../components/About';
import Auth from '../components/Auth';
import Business from '../components/Business';
import Features from '../components/Features';
import Header from '../components/Header';
import Stories from '../components/Stories';
 
const Home = () => {

    return (
        <React.Fragment>
            <Header />
            <Navigation />
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