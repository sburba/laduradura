import React from 'react'
import { connect } from 'react-redux'
import { partial, noop } from 'lodash'
import { selectBox } from '../actions'
import Box from './Box.jsx'

class PuzzleGrid extends React.Component {

    render() {
        const tableStyle = {
            borderCollapse: 'collapse'
        };

		const selectBox = this.props.selectBox || noop;

        return (
            <div>
                <table style={tableStyle}>
					<tbody>
						{this.props.state.cells.map( (row, i) => 
							<tr key={i}>
								{ row.map( (cell, j) =>
									<Box key={i + '-' + j} onClick={partial(selectBox, i, j)} {...cell} />	
								)}
							</tr>
						)}
					</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({ state: state.puzzle })

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	selectBox: (row, col) => dispatch(selectBox(row, col))
})

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleGrid);
