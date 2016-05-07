import React from 'react'
import { connect } from 'react-redux'
import DailyPuzzleSelector from './DailyPuzzleSelector'
import PuzzleGrid from './PuzzleGrid'
import ValuesSelector from './ValuesSelector'

export default class PuzzlePlayer extends React.Component {
	render() {
		let { state, selectBox } = this.props;

		return (
			<div>
				<div>
					<DailyPuzzleSelector />
				</div>
				<PuzzleGrid />
				<ValuesSelector />
			</div>
		);
	}
}


