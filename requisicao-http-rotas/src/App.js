import React, { Component } from 'react'
import Rotas from './rotas';
import './styleApp.css';
export default class App extends Component{

    render() {
      return (
        <div className="containerApp" >
          <Rotas />
        </div>
      );
    }
}