import React, { Component} from 'react';


class EditData extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <div>
                <p>Edit</p>
                <p>{this.props.apiKey}</p>
            </div>
        );
    }
}
export default EditData;