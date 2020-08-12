import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.js';
import GetAPIKey from './GetAPIKey.js';
import EditData from './EditData.js';

class Main extends Component {
    constructor(props) {
        super(props);

        this.changeAPIKey = this.changeAPIKey.bind(this);

        this.state = {
            apiKey: '',
            displayError: false
        };
    }

    changeAPIKey = (value) => {
        this.setState({
            apiKey: value
        });
    }
    showError = (bool) => {
        this.setState({
            displayError: bool
        })
    }


    render() {

        return (
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/getapikey">Get a key</Link>
                </nav>
                

                <Route exact path="/" render={props => 
                (<App action={this.changeAPIKey} displayError={this.state.displayError}/>)}/>
                <Route exact path="/getapikey" render={props => 
                (<GetAPIKey action={this.changeAPIKey}/>)}/>
                <Route exact path="/edit" render={props => 
                (<EditData apiKey={this.state.apiKey} action={this.showError}/>)}/>
            </Router>
            
        );
    }

}

export default Main;