import React, { Component } from 'react';
import firebase from './authConfig.js';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            nome:'',
            email:'',
            senha:'',
        }
        this.cadastrar=this.cadastrar.bind(this);
        
    }

    componentDidMount(){
        firebase.auth().signOut();
        console.log(this.state.nome);
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                firebase.database().ref('usuarios').child(user.uid).set({
                    nome:this.state.nome,
                }).then(()=>{
                    this.setState({nome:'',email:'',senha:''})
                });
            }
        })
    }
    cadastrar(e){
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error)=>{
                if(error.code === 'auth/invalid-email'){
                    alert('email inválido!')
                }
                if(error.code === 'auth/weak-password'){
                    alert('senha fraca!');
                }
            });


        e.preventDefault();
    }
    
    render() {

        return (
            <div>
                <h3>Formulário</h3>
                <label>Nome</label><br />
                <form onSubmit={(e)=>this.cadastrar(e)}>
                    <input value={this.state.nome}
                            onChange={(e)=>{this.setState({nome:e.target.value})}}/>
                <br />
                <label>e-mail</label>
                <br />
                    <input value={this.state.email}
                            onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <br />
                <label>senha</label>
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
export default Home;