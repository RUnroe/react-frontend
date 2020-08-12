import React, { Component} from 'react';
import DataContainer from './DataContainer.js';
import { Redirect } from 'react-router';

class EditData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEntries: [],
            redirect: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/validate?apikey=${this.props.apiKey}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if(response) {
                this.props.action(false);
                this.getData();
            }
            else{
                this.props.action(true);
                this.setState({
                    redirect: "/"
                });
            }
        });
        
    }

    getData = () => {
        fetch('http://localhost:3001/supers')
        .then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                dataEntries: data
            });
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
                <p>Your API Key:</p>
                <p>{this.props.apiKey}</p>
                <DataContainer dataEntries={this.state.dataEntries} apiKey={this.props.apiKey} refresh={this.getData}/>
            </div>
        );
    }
}
export default EditData;