import React, { Component } from 'react';
import firebase from './authConfig.js';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
            user:'',
            email:'',
            senha:'',
        }
        this.cadastrar=this.cadastrar.bind(this);
        this.logar=this.logar.bind(this);
        this.auth=this.auth.bind(this);
        this.sair=this.sair.bind(this);
    }
    sair(){
        firebase.auth().signOut()
        .then(()=>{
            this.setState({user:''});
            alert('usuario saiu');
        }).catch((error)=>{
            alert(error.code)
        });
    }
    componentDidMount(){
        this.auth();
    }
    auth(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user:user})
                console.log(this.state.user);
            }
        })
    }

    
    logar(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error)=>{
            alert(error.code);
        });
    }
    cadastrar(){
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

    }
    
    render() {

        return (
            <div>
                {this.state.user
                ?
                <div>
                    <p>{this.state.user.email}</p>
                    <p>Painel Admin</p>
                    <p>seja bem vindo !</p>
                    <button onClick={this.sair}>sair</button>
                </div>
                :
                <div>
                    <h3>Seja bem vindo!</h3>
                
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
                        <button onClick={this.cadastrar}>cadastrar</button>
                        <button onClick={this.logar}>logar</button>
                </div>
                }

            </div>
        );
    }
}
export default Home;