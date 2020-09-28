import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/header';
import Filme from './pages/filme';
import Home from './pages/home';
// 
 const Rotas =()=>{

    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path path="/filme/:id" component={ Filme }/>
            </Switch>
        </BrowserRouter>
    )
}
export default Rotas;