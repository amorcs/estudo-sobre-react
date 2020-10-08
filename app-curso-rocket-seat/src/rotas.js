import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';

const Rotas =()=>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route />
            </Switch>
        </BrowserRouter>
    )
}
export default Rotas;