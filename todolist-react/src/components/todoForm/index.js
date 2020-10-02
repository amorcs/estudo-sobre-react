import React, { Component } from 'react';
import firebase from 'firebase';
import TodoItem from '../todoItem';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            nome:'',
            datahora:'',
        }
        //configuração do Firebase//
        var firebaseConfig = {
            apiKey: "AIzaSyBt0NWQ7YLf7FygxsO579M1qNkJKKTfQg4",
            authDomain: "tolist-react.firebaseapp.com",
            databaseURL: "https://tolist-react.firebaseio.com",
            projectId: "tolist-react",
            storageBucket: "tolist-react.appspot.com",
            messagingSenderId: "863127705925",
            appId: "1:863127705925:web:4b5767bb31610152c4862c",
            measurementId: "G-YCXQXBR4KB"
          };
          // Initialize Firebase
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        //término da configuração;
        //bind de funções 
        this.cadastrar=this.cadastrar.bind(this);

    }
    cadastrar(event){
        if(this._inputNome.value!=='' && this._inputDataHora.value!==''){
            let tarefas = firebase.database().ref('tarefas');
                let key = Date.now();
                tarefas.child(key).set({
                    nome: this.state.nome,
                    datahora: this.state.datahora,
                })
        }
        this.setState({nome:'', datahora:''})
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Formulário</h3>
                    <form onSubmit={this.cadastrar}>
                        Tarefa:<input value={this.state.nome}
                                onChange={(e)=>{this.setState({nome:e.target.value})}}
                                ref={(e)=> this._inputNome = e}/>
                        <br />
                        Data/Hora<input type="datetime-local" value={this.state.datahora}
                                onChange={(e)=>{this.setState({datahora:e.target.value})}}
                                ref={(e)=> this._inputDataHora = e}/>
                        <br />
                        <button type="submit">cadastrar</button>
                        
                    </form>
                </div>
                <div>
                    <TodoItem />
                </div>
            </div>
        );
    }
}
export default TodoForm;