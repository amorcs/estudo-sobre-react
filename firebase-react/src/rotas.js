import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserForm from './userForm';
const Rotas =()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/userForm" component={UserForm}/>
        </Switch>
    </BrowserRouter>
    )
}
export default Rotas;