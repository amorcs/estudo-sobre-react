import React, { Component } from 'react';
import api from '../../services/api.js';
import './styles.css';


class Produto extends Component{
    constructor(props) {
        super(props);
        this.state={
            product:{},
        }
    }
    async componentDidMount(){
        const { id } =this.props.match.params;
        const response = await api.get(`/products/${id}`)
        this.setState({ product: response.data })
        console.log(this.state.product)

    }
    
    
    render() {
        const { product } = this.state;
        return (
            <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }
}

export default Produto;