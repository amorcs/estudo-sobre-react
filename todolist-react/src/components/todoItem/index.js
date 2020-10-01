import React, {Component} from 'react';
import firebase from 'firebase';

class TodoItem extends Component{
    
    componentDidMount(){
        firebase.database().ref('tarefas').on('value', (snapshot)=>{
        })
    }
    
    render() {
        return (
            <div>
                <ol>
                    {this.props.listaTarefas.map((item)=>{
                        return(
                            <div key={item.key}>
                                <li>{item.nome}</li>
                            </div>
                        )
                    })}          
                </ol>
            </div>
        );
    }
}

export default TodoItem; 