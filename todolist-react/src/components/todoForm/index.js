import React, { Component } from 'react';
import firebase from 'firebase';
import TodoItem from '../todoItem';

class TodoForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            nome:'',
            lista:[],
        }
        this.cadastrar=this.cadastrar.bind(this);

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
        };

        firebase.database().ref('tarefas').on('value', (snapshot)=>{
            let state = this.state;
            state.lista = [];
              snapshot.forEach((childItem)=>{
                  state.lista.push({
                    key:childItem.key,
                    nome: childItem.val().nome,
                  })
              })
              this.setState(state);
        })

    }
    cadastrar(event){
        let state=this.state;
        if(this._inputValue.value!==''){
            let tarefas = firebase.database().ref('tarefas');
            let key = tarefas.push().key;

            tarefas.child(key).set({
            nome:this.state.nome,
        })}
        this.setState(state)
        this.setState({nome:''})
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.cadastrar}>
                        <input value={this.state.nome}
                                onChange={(e)=>{this.setState({nome:e.target.value})}}
                                ref={(e)=>this._inputValue = e}/>
                        <button type="submit">cadastrar</button>
                    </form>
                </div>
                <div>
                    <TodoItem listaTarefas={this.state.lista} />
                </div>
            </div>
        );
    }
}
export default TodoForm;