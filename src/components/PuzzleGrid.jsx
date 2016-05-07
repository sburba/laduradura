import React from 'react'
import { partial } from 'lodash'
import { connect } from 'react-redux'
import { selectBox } from '../actions'
import Box from './Box.jsx'
import ValuesSelector from './ValuesSelector'

class PuzzleGrid extends React.Component {

    render() {
        const tableStyle = {
            borderCollapse: 'collapse'
        };

        return (
            <div>
				{/* <ValuesSelector values={selectedValues} maxValue={3} onSelect={chan} show="true" /> */}
                <table style={tableStyle}>
					<tbody>
						{this.props.state.cells.map( (row, i) => 
							<tr key={i}>
								{ row.map( (cell, j) =>
									<Box key={i + '-' + j} onClick={partial(this.props.selectBox, i, j)} {...cell} />	
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
