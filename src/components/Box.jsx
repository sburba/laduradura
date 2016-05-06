import React from 'react';

export default class Box extends React.Component {

    render() {
        var openStyle = '1px solid black';
        var closedStyle = '2px solid black';

        var boxStyle = {
            borderLeft: this.props.state.walls.left ? openStyle : closedStyle,
            borderRight: this.props.state.walls.right ? openStyle : closedStyle,
            borderTop: this.props.state.walls.top ? openStyle : closedStyle,
            borderBottom: this.props.state.walls.down ? openStyle : closedStyle,
            width: '100px',
            height: '100px'
        };

        var annotationStyle = {
            textAlign: 'right',
        };

        var valueStyle = {
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        };

        var labelStyle = {
            textAlign: 'left',
        };

        var values = ['1', '2', '3'];

        // <div style = {valueStyle}> {this.props.state.value} </div>
        // <div style = {annotationStyle}> {this.props.state.values} </div>

        console.log(this.props.state);
        return  <div style={boxStyle}>
                    <table>
                        <tbody>
                            <tr width="100%">
                                <td width="33%" height="100%">
                                    <div style = {labelStyle}> {this.props.state.label}</div>
                                </td>

                                <td width="33%" height="100%">
                                    <div style = {valueStyle}> 4 </div>
                                </td>

                                <td width="33%" height="100%">
                                    <div style = {annotationStyle}> {values.join(", ")} </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    }
}