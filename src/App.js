import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/pages/Home';
import Products from './products/pages/Products';

const App = () => {
   const routes = (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Products />
            </Route>
        </Switch>
    );

    return (
        <Router>
            <main>
                {routes}
            </main>
        </Router>
    );
};

export default App;