import React, { Component } from 'react';
import api from '../../service/api';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:{}
        }
        this.loadUrl=this.loadUrl.bind(this);
    }
    componentDidMount(){
        this.loadUrl();
    }
    async loadUrl(){
        let nome = 'amorcs'
        let response = await api.get(`/${ nome }`)
        this.setState({user: response.data})
        console.log(this.state.user)
    }

    render() {
        const { login, avatar_url } = this.state.user;
        return (
            <div>
                
                <strong>{login}</strong>
                <img src={avatar_url}/>
            </div>
        );
    }
}

export default Main;