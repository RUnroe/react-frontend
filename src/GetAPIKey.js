import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';


class GetAPIKey extends Component {
    constructor(props) {
        super(props);
    
        this.changeAPIKey = this.props.action.bind(this);
    
        this.state = {
          redirect: null,
          email: "",
          key: this.props.apiKey,
          continueDisabled: true
        };
      }
    
    redirectToEdit = () => {
        this.setState({
            redirect: "/edit"
        });
    }


    submitEmail = () => {
        console.log(this.state.email);
        fetch('http://localhost:3001/apikey', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({email: this.state.email})
        }).then(response => {
            return response.json();
        }).then(data => {
            this.changeAPIKey(data.apiKey);
            this.setState({
                key: data.apiKey,
            });
            if(data.apiKey) {
                this.setState({
                    continueDisabled: false
                });
            }
        });
            
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
                <div class="inputDiv">
                    <label htmlFor="emailInput">Enter an Email:</label>
                    <input id="emailInput" type="text" placeholder="Email" onChange={event => this.setState({email: event.target.value}) } />
                </div>
                <button className="btn" onClick={this.submitEmail}>Get API Key</button>
                <p id="apiKeyOutput">{this.state.key}</p>
                <button className="btn" onClick={this.redirectToEdit} disabled={this.state.continueDisabled}>Continue</button>
            </div>
        );
    }
}
export default GetAPIKey;