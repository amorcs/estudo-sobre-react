import React, { Component } from 'react';
import firebase from 'firebase';

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.state={
            lista:[],
        }
        this.deletar=this.deletar.bind(this);
    }
    componentDidMount(){
        
        
        firebase.database().ref('tarefas').on('value', (snapshot)=>{
            let state = this.state;
            state.lista=[];
                snapshot.forEach((childItem)=>{
                    state.lista.push({
                        key: childItem.key,
                        nome:childItem.val().nome,
                        datahora:childItem.val().datahora,
                    })        
                })
            this.setState(state)
        })
       
    }
    deletar(key){
        console.log(key);
        firebase.database().ref('tarefas').child(key).remove();
    }
    render() {
        return (
            <div>
                <ol>
                    {this.state.lista.map((item)=>{
                        return(
                            <div key={item.key}>
                                <li> 
                                    Data/Hora: <strong>{item.datahora}</strong> / 
                                    Tarefa:<strong> {item.nome}</strong> ->  
                                    <button onClick={()=>this.deletar(item.key)}>Deletar</button>
                                </li>
                            </div>
                        )
                    })}
                </ol>
            </div>
        );
    }
}
export default TodoItem;