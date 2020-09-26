import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';

 const Rotas =()=>{

    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home }/>
            </Switch>
        </BrowserRouter>
    )
}
export default Rotas;