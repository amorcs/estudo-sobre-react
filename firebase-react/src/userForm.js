import React, { Component } from 'react';
import firebase from './firebase.js'
class UserForm extends Component{
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
        firebase.auth().onAuthStateChanged((user)=>{
            firebase.database().ref('usuarios').child(user.uid).set({
                nome:this.state.nome,
            }).then(()=>{
                this.setState({nome:'',email:'', senha:''});
            });
        });
    }

    cadastrar(e){

        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .catch((error)=>{
                    if(error.code === 'auth/invalid-email'){
                        alert('email inválido!')
                    }
                    if(error.code === 'auth/weak-password'){
                        alert('senha fraca!')
                    }
                });

        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.cadastrar(e)}>
                    <label>Nome:</label>
                    <br/>
                    <input value={this.state.nome}
                        onChange={(e)=>{this.setState({nome:e.target.value})}}/>
                    <br/>

                    <label>e-mail:</label>
                    <br/>
                    <input value={this.state.email}
                        onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    <br/>

                    <label>Senha:</label>
                    <br/>
                    <input value={this.state.senha}
                        onChange={(e)=>{this.setState({senha:e.target.value})}}/>
                    <br/>
                    <button type="submit">cadastrar</button>
                </form>
            </div>
        );
    }
}
export default UserForm;