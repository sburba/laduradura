import React from 'react'
import { range, indexOf } from 'lodash'
import ValuesSelectorButton from './ValuesSelectorButton'

export default class ValuesSelector extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			values: this.mapPropsToState(props)
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	onComponentWillReceiveProps(nextProps) {
		this.setState({ values: this.mapPropsToState(nextProps) })
	}

	onValuesSelected() {
		
	}

	handleChange(e) {
		let values = this.state.values || [];
		values[e.label] = e.selected;

		this.setState({ values });
	}

	render() {
		return (
			<div>
				{this.state.values.map( (selected, idx) => 
					<ValuesSelectorButton selected={selected} label={idx} onChange={this.handleChange} /> 
				)}		
			</div>
		);
	}

	mapPropsToState(props) {
		return range(props.maxValue).map( i => indexOf(this.props.values, i) >= 0 )
	}
}
