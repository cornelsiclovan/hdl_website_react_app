import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/pages/Home';
import Products from './products/pages/Products';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
    const { token, login, logout, userId } = useAuth();

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
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token, 
                token: token,
                userId: userId,
                login: login,
                logout: logout 
            }}
        >
            <Router>
                <main>
                    {routes}
                </main>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;