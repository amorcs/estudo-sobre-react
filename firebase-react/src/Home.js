import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import firebase from './firebase.js';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:'',
            senha:'',
            link:false,
        }
        this.validar=this.validar.bind(this);
        this.sair=this.sair.bind(this);
    }
    sair(){
        firebase.auth().signOut().then(()=>{
            alert('usuário deslogado!');
            console.log('era: ' + this.state.link);

            this.setState({link:false})

            console.log('passou a ser: '+this.state.link);

        });
    }
    validar(e){
        firebase
            .auth()
                .signInWithEmailAndPassword(this.state.email,this.state.senha)
                    .then(()=>{
                        alert('usuario logado!')
                        this.setState({link:true});
                        console.log(this.state.link);
                    }).catch((error)=>{
                            if(error.code=== 'auth/wrong-password'){
                                alert('problema ao logar!');
                            }
                        
                    });
           
            this.setState({email:'', senha:''})
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.validar}>
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
                    <button>entrar</button>
                </form>

                    <button onClick={this.sair}>sair</button>
                                
                {this.state.link ?<HashLink to="/userForm">Criar Conta</HashLink>
                    : <HashLink to="/">Usuário deslogado!</HashLink>
                }
            </div>
        );
    }
}
export default Home;