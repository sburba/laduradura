import React from 'react'
import Box from './Box.jsx';
import ValuesSelector from './ValuesSelector'

export default class PuzzleGrid extends React.Component {

	render() {
		return (
			<div>
				<ValuesSelector />
				{this.props.state.cells.map((row) => row.map((cell) => <Box {...cell}/>).concat(<br/>))}
			</div>	
		);
	}
>>>>>>> ValuesSelector component
}
