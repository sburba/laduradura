import React from 'react'
import { connect } from 'react-redux'
import { range, indexOf, partial } from 'lodash'
import { toggleCellValue } from '../actions'
import ValuesSelectorButton from './ValuesSelectorButton'

class ValuesSelector extends React.Component {
	
	render() {
		const { maxValue, values, show, selectValue } = this.props,
			style = {
				padding: '5px',
				display: show ? 'block' : 'none',
			};

		return (
			<div style={style}>
				{range(1, maxValue + 1).map( i =>
					<ValuesSelectorButton key={i} label={i} 
										  selected={indexOf(values, i) >= 0} 
										  onClick={partial(selectValue, i)}
					/>	
				)}
			</div>
		);
	}
}

const mapPropsToState = (state, ownProps) => ({ 
	...state.valuesSelector,
	maxValue: state.puzzle.extent
})

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	selectValue: value => dispatch(toggleCellValue(value))
})

export default connect(mapPropsToState, mapDispatchToProps)(ValuesSelector);
