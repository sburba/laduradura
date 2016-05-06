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
    
    getStyles() {
        return {
            border: '1px solid black',
            borderRadius: '10px',
            position: 'absolute',
            top: '20%',
            left: '20%',
            display: this.props.activatedFor ? 'block' : 'none',
        };
    }

	render() {
		return (
			<div style={this.getStyles()}>
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
