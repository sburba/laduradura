import React from 'react';

export default class Box extends React.Component {

    render() {
        var openStyle = '1px solid black';
        var closedStyle = '2px solid black';

        var boxStyle = {
            borderLeft: this.props.walls.left ? openStyle : closedStyle,
            borderRight: this.props.walls.right ? openStyle : closedStyle,
            borderTop: this.props.walls.top ? openStyle : closedStyle,
            borderBottom: this.props.walls.down ? openStyle : closedStyle,
            display: '-webkit-flex',
            width: '100px',
            height: '100px',
            padding: '5px',

        };

        var annotationStyle = {
            textAlign: 'right',
            WebKitFlexGrow: 1,
            flexGrow: 1,
            flex: 1,
            fontSize: 18,
        };

        var valueStyle = {
            fontWeight: 'bold',
            display: '-webkit-flex',
            WebKitAlignItems: 'center',
            alignItems: 'center',
            WebKitJustifyContent: 'center',
            justifyContent: 'center',
            WebKitFlexGrow: 1,
            flexGrow: 1,
            flex: 1,
            fontSize: 50
        };

        var labelStyle = {
            fontWeight: 'bold',
            WebKitFlexGrow: 1,
            flexGrow: 1,
            flex: 1,
            fontSize: 24,
        };

        // var values = [1, 2, 3, 4, 5, 6];
        // <div style = {valueStyle}> 4 </div>
        // <div style = {annotationStyle}> {values.join(", ")} </div>

        return  <div style={boxStyle}>
                    <div style = {labelStyle}> {this.props.label}</div>
                    <div style = {valueStyle}> {this.props.value} </div>
                    <div style = {annotationStyle}> {this.props.values} </div>
                </div>
    }
}