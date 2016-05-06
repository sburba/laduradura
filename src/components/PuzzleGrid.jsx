import React from 'react'
import Box from './Box.jsx';
import ValuesSelector from './ValuesSelector'

export default class PuzzleGrid extends React.Component {

    toBoxes(row, rowId) {
        return <tr key={rowId}>
            {row.map( (cell, columnId) => <Box key={rowId + ' ' + columnId} {...cell}/>)}
        </tr>
    }

    render() {
        var tableStyle = {
            borderCollapse: 'collapse'
        };

        return (
            <div>
                <ValuesSelector />
                <table style={tableStyle}>
                    {this.props.state.cells.map(this.toBoxes.bind(this))}
                </table>
            </div>
        );
    }
}
