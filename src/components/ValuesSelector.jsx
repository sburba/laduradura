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

	componentWillReceiveProps(nextProps) {
		this.setState({ values: this.mapPropsToState(nextProps) })
	}

	onValuesSelected() {
		
	}

	handleChange(e) {
		let values = this.state.values || [];
		values[e.label - 1] = e.selected;

		this.setState({ values });

		let onSelect = this.props.onSelect;
		if( onSelect ) {
			onSelect( values.map( ( selected, i ) => selected ? i+1 : -1 ).filter( val => val > 0 ) );
		}
	}
    
    getStyles() {
        return {
            border: '1px solid black',
            borderRadius: '10px',
            //position: 'absolute',
            //top: '20%',
            //left: '20%',
            display: this.props.show ? 'block' : 'none',
        };
    }

	render() {
		return (
			<div style={this.getStyles()}>
				{this.state.values.map( (selected, idx) => 
					<ValuesSelectorButton key={idx} selected={selected} label={idx + 1} onChange={this.handleChange} /> 
				)}		
			</div>
		);
	}

	mapPropsToState(props) {
		return range(props.maxValue).map( i => indexOf(props.values, i+1) >= 0 )
	}
}
