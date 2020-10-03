import React, { Children, Component } from 'react';
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
    componentDidMount(){
          firebase.database().ref('usuarios').child(1).on('value', (snapshot)=>{
                snapshot.forEach((childItem)=>{
                  console.log(childItem.val())
                })
          })
    }

    cadastrar(event){
      
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
