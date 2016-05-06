import React from 'react'
import Box from './Box.jsx';
import ValuesSelector from './ValuesSelector'

export default class PuzzleGrid extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleValuesSelect = this.handleValuesSelect.bind(this);
        this.state = {
            valuesSelectorOwner: null,
        };
	}
    
    onBoxClick(rowId, columnId) {
        this.setState({
            valuesSelectorOwner: [rowId, columnId],
        });
    }

    toBoxes(row, rowId) {
        return <tr key={rowId}>
            {row.map( (cell, columnId) => <Box key={rowId + ' ' + columnId} onClick={this.onBoxClick.bind(this, rowId, columnId)} selected={this.state.valuesSelectorOwner && this.state.valuesSelectorOwner[0] === rowId && this.state.valuesSelectorOwner[1] === columnId}  {...cell}/>)}
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
                <ValuesSelector values={[]} maxValue={3} onSelect={this.handleValuesSelect} activatedFor={this.state.valuesSelectorOwner} />
                <table style={tableStyle}>
                    <tbody>{this.props.state.cells.map(this.toBoxes.bind(this))}</tbody>
                </table>
            </div>
        );
    }
}
