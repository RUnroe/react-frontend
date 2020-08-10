import React, { Component} from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.changeAPIKey = this.props.action.bind(this);

    this.state = {
      redirect: null
    };
  }
  inputField = "";

  submitAPIKey = () => {
    this.changeAPIKey(this.inputField);
    this.setState({
      redirect: "/edit"
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="App">
        <label for="apiInput">Enter your API Key</label>
        <input id="apiInput" type="text" placeholder="API Key" onChange={event => this.inputField = event.target.value}/>
        <button onClick={this.submitAPIKey}>Enter</button>
        <p>Don't have a key? Get one <a href="getapikey">Here</a></p>

      </div>
    );
  }
}

export default App;
