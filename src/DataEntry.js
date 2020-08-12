import React, { Component } from 'react';
import { render } from '@testing-library/react';

class DataEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.entry._id,
            name: this.props.entry.name,
            power: this.props.entry.power,
            isHero: this.props.entry.isHero,
            buttonEnabled: false
        };
    }
    updateEntry = () => {
        this.setState({
            buttonEnabled: false
        })
        fetch(`http://localhost:3001/supers/${this.state.id}?apikey=${this.props.apiKey}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: this.state.name, power: this.state.power, isHero: this.state.isHero})
        });
    }


    deleteEntry = () => {
        fetch(`http://localhost:3001/supers/${this.state.id}?apikey=${this.props.apiKey}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.props.refresh();
        });
    }

    render() {
        return (
            <tr key={this.props.entry._id}>
                <td>{this.props.entry._id}</td>
                <td><input type="text" defaultValue={this.props.entry.name} onChange={event => this.setState({name: event.target.value, buttonEnabled: true})}/></td>
                <td><input type="text" defaultValue={this.props.entry.power} onChange={event => this.setState({power: event.target.value, buttonEnabled: true})}/></td>
                <td><input type="checkbox" value="isHero" defaultChecked={this.props.entry.isHero} onChange={event => this.setState({isHero: event.target.checked, buttonEnabled: true})}></input></td>
                <td><button className="btn" disabled={!this.state.buttonEnabled} onClick={this.updateEntry}>Update</button></td>
                <td><button className="delete btn" onClick={this.deleteEntry}>X</button></td>
            </tr>
        );
    }
}

export default DataEntry;