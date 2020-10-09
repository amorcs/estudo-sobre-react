import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';
import Produto from './pages/produto';

const Rotas =()=>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={ Main } exact/>
                <Route path="/products/:id" component={ Produto } exact/>

            </Switch>
        </BrowserRouter>
    )
}
export default Rotas;