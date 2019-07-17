import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoute';

import Main from './Pages/Main';
import Login from './Pages/Login';
import CadastrarPetShop from './Pages/CadastrarPetShop';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/cadastrar-petshop' component={CadastrarPetShop} />
        </Switch>
    </BrowserRouter>
);


export default Routes;