import React from 'react'
import Box from './Box.jsx';
import ValuesSelector from './ValuesSelector'

export default class PuzzleGrid extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleValuesSelect = this.handleValuesSelect.bind(this);
	}

	handleValuesSelect(values) {
		
	}

	render() {
		return (
			<div>
				<ValuesSelector values={[]} maxValue={3} onSelect={this.handleValuesSelect} />
				{this.props.state.cells.map((row) => row.map((cell) => <Box {...cell}/>).concat(<br/>))}
			</div>	
		);
	}
}
