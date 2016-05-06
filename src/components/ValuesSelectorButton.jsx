import React from 'react'

export default class ValuesSelectorButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.onChange(this.props.value);
    }
    
    getButtonStyle() {
        return {
            backgroundColor: this.props.selected ? 'purple' : 'skyblue',
            color: 'white',
            border: '2px solid ' + (this.props.selected ? 'skyblue' : 'purple'),
            display: 'inline-block',
            margin: '2px',
            borderRadius: '35%',
            width: '1.5em',
            height: '2em',
            lineHeight: '2em',
            verticalAlign: 'center',
            textAlign: 'center',
            msUserSelect: 'none',
            mozUserSelect: 'none',
            webkitUserSelect: 'none',
            userSelect: 'none',
            cursor: 'default',
        };
    }
    
	render() {
		return (
			<div style={this.getButtonStyle()} onClick={this.onClick}>
				<span>{this.props.value}</span>
			</div>
		);
	}
}
