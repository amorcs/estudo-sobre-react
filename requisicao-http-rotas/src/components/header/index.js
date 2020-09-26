import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import './header.css';
export default class Header extends Component{

    render() {
        return (
            <div className="containerHeader">
                <HashLink>Filmaria</HashLink>
            </div>
        );
    }
}