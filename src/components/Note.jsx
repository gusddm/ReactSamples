import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <li>{this.props.note.title}</li>
        )

    }
}