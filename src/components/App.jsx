import React from 'react'
import { connect } from 'react-redux'
import { setMode } from '../actions'
import PuzzlePlayer from './PuzzlePlayer'
import PuzzleBuilder from './PuzzleBuilder'

class App extends React.Component {

	render() {
		const isPlayerMode = this.props.mode === 'Player',
			  otherMode = isPlayerMode ? 'Builder' : 'Player';

		return (
			<div>	
				{isPlayerMode ? <PuzzlePlayer /> : <PuzzleBuilder /> }
				{/*<button onClick={ () => this.props.setMode(otherMode) } >
					{`Load in ${otherMode}`}
				</button> */}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({ mode: state.mode })

const mapDispatchToProps = (dispatch, ownProps) => ({
	setMode: mode => dispatch(setMode(mode))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
