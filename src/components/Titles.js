import React, { Component } from 'react';
import './Titles.css';

class Titles extends Component {
    render() {
        return(
            <div>
                <h1 className="title-container__title">Weather finder</h1>
                <p className="title-container__subtitle">Helps you to find weather conditions across many cities</p>
            </div>
        );
    };
};

export default Titles;