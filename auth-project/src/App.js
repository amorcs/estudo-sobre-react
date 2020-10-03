import React, { Component } from 'react';
import firebase from './authConfig.js';

class App extends Component {
    constructor(props) {
      super(props);
      this.state={
          email:'',
          senha:'',
          lista:[],
      }
      this.cadastrar=this.cadastrar.bind(this)
    }
    cadastrar(event){
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .catch((error)=>{
                  //tratamento de erro
                    if(error.code === 'auth/invalid-email'){
                        alert('Email Inválido!')
                    }
                    if(error.code === 'auth/weak-password'){
                      alert('Senha fraca!')
                    }
                });
        event.preventDefault();
    }
    
    render() {
        return (
          <div>
            <form onSubmit={this.cadastrar}>
              <input value={this.state.email}
                      onChange={(e)=>{this.setState({email:e.target.value})}}/>
              <br />
              <input value={this.state.senha}
                      onChange={(e)=>{this.setState({senha:e.target.value})}}/>
              <br />
              <button type="submit">cadastrar</button>
              
            </form>
          </div>
        );
    }
}
export default App;
