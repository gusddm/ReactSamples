import React, { Component } from 'react';
//import './App.css';
import NotebookForm from './components/NotebookForm';
import NoteList from './components/NoteList';
import { base } from './base';
import { createStore } from 'redux';
 
export default class App extends Component {
  constructor() {
    super();
    this.state =  { 
      notes : {}
    }
    this.addNote = this.addNote.bind(this);    
  }

  componentWillMount() {
    this.ref = base.syncState(`notes`
      , {
      context: this,
      state: 'notes'
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addNote(note) {
    const notes = {...this.state.notes};
    const timeStamp = Date.now();
    notes[`note-`+timeStamp] = note;
    this.setState( { notes } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">Welcome to Notebook</h3>
        </header>
        <div className="noteForm">
          <div className='notes'><NoteList notes={this.state.notes} /></div>
          <div className='addNote'><NotebookForm  addNote={this.addNote} /></div> 
        </div>
      </div>      
    );
  }
}
