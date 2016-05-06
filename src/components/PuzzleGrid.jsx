import React from 'react'
import Box from './Box.jsx';

export default class PuzzleGrid extends React.Component {

    render() {
        return <div>
            {this.props.state.cells.map((row) => row.map((cell) => <Box {...cell}/>).concat(<br/>))}
        </div>
    }
}
