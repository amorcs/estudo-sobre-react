import React, { Component } from 'react';
import firebase from './firebase.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      user: '',
    }
    this.cadastrar = this.cadastrar.bind(this);
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  componentDidMount() {


  }
  cadastrar(e) {
    firebase.auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .then(()=>{
                    this.setState({email:'', senha:''});
                    alert('Usuário cadastrado com sucesso!')
                })
                .catch((error)=>{
                    alert(error.code)
                });
    e.preventDefault();
  }
  entrar() {

  }
  sair() {

  }

  render() {
    return (
      <div>
        
        <div>
          <h3>Senha BemVindo!</h3>
          <h4>Usuário: </h4>
          <button onClick={this.sair}>sair</button>
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })} />
          <br />
          <label>Senha:</label>
          <br />
          <input value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })} />
          <br />
          <button onClick={this.cadastrar}>cadastrar</button>
          <button onCLick={this.entrar}>entrar</button>
        </div>
      </div>
    );
  }
}

export default App;
