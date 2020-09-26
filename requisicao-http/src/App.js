import React, { Component } from 'react';
import './styleApp.css';
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
        <div className="container">
          <div className="contianerFIlho">
            {this.state.responseHTTP.map((item)=>{
              return(
              <div>
               <article key={item.id}>
                    <strong>{item.titulo}</strong>
                    <img src={item.capa}/>
                    <p>{item.subtitulo}</p>
                </article>
                </div>
              )
            })}
            </div>
        </div>
      );
    }
}
