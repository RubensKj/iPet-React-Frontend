import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoute';

import Main from './Pages/Main';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import CadastrarPetShop from './Pages/CadastrarPetShop';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute path='/cadastrar-petshop' component={CadastrarPetShop} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);


export default Routes;