import React, { Component } from 'react';
import './filme.css';
//https://sujeitoprogramador.com/r-api/?api=filmes
export default class Filme extends Component{
    constructor(props) {
        super(props);
        this.state={
            filme:[],    
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${ id }`;
        fetch(url).
            then((response)=> response.json()).
                then((response)=>{
                   this.setState({filme: response});
                })
    }
    
    render() {
        return (
            
            <div className="containerFilme">
                <strong>{this.state.filme.nome}</strong>
                <img src={this.state.filme.foto} />
                <p>{this.state.filme.sinopse}</p>
                
            </div>
            
        );
    }
}