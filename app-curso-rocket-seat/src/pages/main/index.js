import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api.js'
import './styles.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productInfo: {},
            page: 1,
        }
        this.loadProducts = this.loadProducts.bind(this);
        this.prevPage=this.prevPage.bind(this);
        this.nextPage=this.nextPage.bind(this);
    }

    componentDidMount() {
        this.loadProducts();
    }
    async loadProducts(page = 1) {
        const response = await api(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page })
    }
    prevPage(){
        const { page } = this.state;
        if( page === 1 ) return;
        const pageNumber = page -1;
        this.loadProducts(pageNumber);
    }
    nextPage(){

        const { page , productInfo} = this.state;
        if(page === productInfo.pages) return;
        const pageNumber = page +1;
        this.loadProducts(pageNumber);
        
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                {products.map(product =>{
                    return(
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <Link to={`products/${product._id}`}>Acessar</Link>
                        </article>
                    )
                })}
                <div>
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}
export default Main;