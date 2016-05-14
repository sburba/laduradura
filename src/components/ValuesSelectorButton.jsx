import React from 'react'
import { isFunction } from 'lodash'

export default class ValuesSelectorButton extends React.Component {
    
    getButtonStyle() {
        return {
            backgroundColor: !this.props.selected ? 'lightgray' : 'white',
            color: 'black',
            border: '2px solid ' + (!this.props.selected ? 'lightgray' : 'black'),
            display: 'inline-block',
            margin: '2px',
            borderRadius: '35%',
            width: '1.5em',
            height: '2em',
            lineHeight: '2em',
            verticalAlign: 'center',
            textAlign: 'center',
            msUserSelect: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            cursor: 'default',
        };
    }
    
	render() {
		return (
			<div style={this.getButtonStyle()} onClick={this.props.onClick}>
				<span>{this.props.label}</span>
			</div>
		);
	}
}
