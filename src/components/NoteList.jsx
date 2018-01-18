import React from 'react';
import Note from './Note';

export default class Notebook extends React.Component {
    render() {
        return (
        <div className="noteList">    
            <h2>Your current Notes</h2>
            <ul>
                {
                    Object
                    .keys(this.props.notes)
                    .map(key => <Note key={key} note={this.props.notes[key]} />)
                }                    
            </ul>    
        </div>                
        )            
    }
}        