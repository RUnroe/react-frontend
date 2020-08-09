import React from 'react';
import DataEntry from './DataEntry.js';

const DataContainer = props => {
    return (
        <section id="container">
            {props.dataEntries.map(entry => (<DataEntry entry={entry} />))}
        </section>
    );
}
export default DataContainer;