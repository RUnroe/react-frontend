import React, { Component} from 'react';

import { Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.changeAPIKey = this.props.action.bind(this);

    this.state = {
      redirect: null,
      displayError: this.props.displayError
    };
  }
  inputField = "";

  submitAPIKey = () => {
    this.changeAPIKey(this.inputField);
    this.setState({
      redirect: "/edit"
    });
  }

  componentDidMount() {
    this.setState({
      displayError: this.props.displayError
    });
    console.log(this.state.displayError);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="App">
        <div className="inputDiv">
          <label htmlFor="apiInput">Enter your API Key:</label>
          <input id="apiInput" type="text" placeholder="API Key" onChange={event => this.inputField = event.target.value}/>
          <p className={this.state.displayError ? "error" : "error hidden"}>Invalid API Key</p>
        </div>
        <button className="btn" onClick={this.submitAPIKey}>Enter</button>
        <p>Don't have a key? Get one <a href="getapikey">Here</a></p>

      </div>
    );
  }
}

export default App;
