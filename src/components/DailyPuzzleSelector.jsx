import React from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import {  loadDailyPuzzle } from '../actions'
import difficulty from '../daily-puzzles/difficulty'

const containerStyle = {
	display: 'flex',
	flexFlow: 'row',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	margin: '5px 0 15px 0'
}

const itemStyle = {
	fontWeight: 'bold',
	padding: '10px',
	border: '3px solid lightgray',
	marginRight: '2px'
}

class DailyPuzzleSelector extends React.Component {
	render() {
		return (
			<div style={containerStyle} >
				{map(difficulty, d => 
					<div key={d.id} style={itemStyle} onClick={e => this.props.loadPuzzle(d.id) } >
						<span>{d.name}</span>
					</div>
				)}
			</div>
		);	
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({  
	loadPuzzle: d => dispatch(loadDailyPuzzle(d))
})

export default connect(undefined, mapDispatchToProps)(DailyPuzzleSelector);
