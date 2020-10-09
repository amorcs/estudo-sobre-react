import React, { Component } from 'react';
import api from '../../service/api.js';
import './styles.css';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        this.loadUrl();
    }
    async loadUrl(){
        let nome = 'amorcs'
        const response = await api.get(`/${nome}`);
        this.setState({user: response.data})
        console.log(this.state.user.id);
    }
    render() {
        return (
            <div>
                olá 
            </div>
        );
    }
}
export default Main;