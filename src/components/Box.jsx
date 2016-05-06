import React from 'react';

export default class Box extends React.Component {

    render() {
        var openStyle = '1px solid black';
        var closedStyle = '5px solid black';

        var tdStyle = {
            borderLeft: this.props.walls.left ? closedStyle : openStyle,
            borderRight: this.props.walls.right ? closedStyle : openStyle,
            borderTop: this.props.walls.top ? closedStyle : openStyle,
            borderBottom: this.props.walls.down ? closedStyle : openStyle,
        };

        var boxStyle = {
            display: '-webkit-flex',
            width: '100px',
            height: '100px',
            padding: '5px'
        };

        var annotationStyle = {
            textAlign: 'right',
            WebKitFlexGrow: 1,
            flexGrow: 1,
            flex: 1,
            fontSize: 18
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
            fontSize: 24
        };

        // var values = [1, 2, 3, 4, 5, 6];
        // <div style = {valueStyle}> 4 </div>
        // <div style = {annotationStyle}> {values.join(", ")} </div>

        function showValues(values) {
            if(values.length == 1) {
                return <div style={valueStyle}> {values}</div>;
            } else {
                return <div style={annotationStyle}> {values.join(", ")}</div>;
            }
        }

        return (
            <td style={tdStyle}>
                <div style={boxStyle}>
                    <div style={labelStyle}> {this.props.label}</div>
                    {showValues(this.props.values)}
                </div>
            </td>
        )
    }
}