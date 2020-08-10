import React, { Component} from 'react';

class GetAPIKey extends Component {
    constructor(props) {
        super(props);
    
        this.changeAPIKey = this.props.action.bind(this);
    
        this.state = {
          redirect: null,
          key: "",
          email: ""
        };
      }
    
    submitAPIKey = () => {
        this.changeAPIKey(this.state.key);
        this.setState({
            redirect: "/edit"
        });
    }


    submitEmail = () => {
        
    }
    
    render() {
        return(
            <div>
                <input type="text" onChange={event => this.setState({email: event.target.value}) } />
                <button onClick={this.submitEmail}>Get API Key</button>
                <p id="apiKeyOutput">APIKEYPLACEHOLDER</p>
                <button>Continue</button>
            </div>
        );
    }
}
export default GetAPIKey;