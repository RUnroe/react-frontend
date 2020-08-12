import React , { Component } from 'react';
import DataEntry from './DataEntry.js';

class DataContainer extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            newName: "",
            newPower: "",
            newIsHero: false
        };
    }
    
    AddUser = () => {
        fetch(`http://localhost:3001/supers?apikey=${this.props.apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({name: this.state.newName, power: this.state.newPower, isHero: this.state.newIsHero})
        }).then(response => {
            this.refresh();
        });
    }

    refresh = () => {
        this.setState({
            newName: "",
            newPower: "",
            newIsHero: false
        });
        this.props.refresh();
    }

    render() {
        if(!this.props.dataEntries.length) return(
            <section id="container">
            </section>
        );
        return (
            <section id="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Power</th>
                            <th>IsHero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataEntries.map(entry => (<DataEntry entry={entry} apiKey={this.props.apiKey} refresh={this.refresh}/>))}
                        <tr>
                            <td></td>
                            <td><input type="text" placeholder="Name" value={this.state.newName} onChange={event => this.setState({newName: event.target.value})}/></td>
                            <td><input type="text" placeholder="Power" value={this.state.newPower} onChange={event => this.setState({newPower: event.target.value})}/></td>
                            <td><input type="checkbox" checked={this.state.newIsHero} onChange={event => this.setState({newIsHero: event.target.checked})}></input></td>
                            <td><button className="btn" onClick={this.AddUser}>Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>
                    
        );
    }
}
export default DataContainer;