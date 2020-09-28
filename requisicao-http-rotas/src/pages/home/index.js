import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import './home.css';
//https://sujeitoprogramador.com/r-api/?api=filmes
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            filmes: [],
        }
    }
    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

        fetch(url).
            then((response)=> response.json()).
                then((response)=>{
                    this.setState({filmes:response})
                })

    }
    render() {
        return (
            <div className="containerHome">
               
                {this.state.filmes.map((filme)=>{
                    return(
                        <div className="containerHomeFilho">
                            <article key={filme.id}>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto}/>
                                <HashLink to="/">Acessar</HashLink>
                            </article>
                            
                        </div>
                    )                    
                })}
            </div>
        );
    }
}
export default Home;