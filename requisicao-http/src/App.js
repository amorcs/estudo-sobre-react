import React, { Component } from 'react';
//https://sujeitoprogramador.com/rn-api/?api=posts

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
          responseHTTP : []
        }
    }
    componentDidMount(){
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
            .then((res)=>res.json())
                .then((res)=>{
                  this.setState({responseHTTP:res});
                    
                })
    }
    render(){
      return(
        <div>
            {this.state.responseHTTP.map((item)=>{
              return(
                <h4>{item.titulo}</h4>
              )
            })}
        </div>
      );
    }
}
