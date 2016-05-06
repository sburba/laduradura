import React from 'react';

export default class Box extends React.Component {

    render() {
        var openStyle = '1px solid black';
        var closedStyle = '2px solid black';

        var style = {
            borderLeft: this.props.leftIsOpen ? openStyle : closedStyle,
            borderRight: this.props.rightIsOpen ? openStyle : closedStyle,
            borderTop: this.props.topIsOpen ? openStyle : closedStyle,
            borderBottom: this.props.bottomIsOpen ? openStyle : closedStyle,
            width: '25px',
            height: '25px'
        };

        return <div style={style}></div>
    }
}