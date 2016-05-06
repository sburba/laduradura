import React from 'react'
import Box from './Box.jsx';
import ValuesSelector from './ValuesSelector'

export default class PuzzleGrid extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleValuesSelect = this.handleValuesSelect.bind(this);
	}

    toBoxes(row, rowId) {
        return <tr key={rowId}>
            {row.map( (cell, columnId) => <Box key={rowId + ' ' + columnId} {...cell}/>)}
        </tr>
    }

	handleValuesSelect(values) {
		
	}

    render() {
        var tableStyle = {
            borderCollapse: 'collapse'
        };

        return (
            <div>
                <ValuesSelector values={[]} maxValue={3} onSelect={this.handleValuesSelect} />
                <table style={tableStyle}>
                    {this.props.state.cells.map(this.toBoxes.bind(this))}
                </table>
            </div>
        );
    }
}
