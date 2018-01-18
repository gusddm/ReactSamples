import React from 'react';

export default class NotebookForm extends React.Component {
    createNote(e) {
        e.preventDefault();
        const note = {
            title: this.title.value,
            note: this.note.value,
            date: Date.now()
        }
        this.props.addNote(note);
        this.noteForm.reset();
    }
    render() {
        return (            
            <div className="noteForm"> 
                <form action="" className="noteSelector" ref={form => this.noteForm = form}>
                    <h2>Please enter a note</h2>
                        <input type="text" required placeholder="Note title" ref={input => this.title = input} /> <br />
                        <input type="textarea" required placeholder="Your Note" ref={input => this.note = input} /> <br />
                    <button onClick={(e) => this.createNote(e)}>Add Note!</button>
                </form>
            </div>
        )
    } 
} 
