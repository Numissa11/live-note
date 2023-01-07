import React, { Component } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Sidebar from './sidebar/sidebar';
import Editor from './editor/editor';
import './App.css';

export class App extends Component {

  constructor() {
    super()

    this.state = {
      notes: null,
      selectedNote: null,
      selectedNoteIndex: null
    }
  }

  render() {
    return (
      <div className='app-container'>
        <Sidebar
          notes={this.state.notes}
          selectedNoteIndex={this.state.selectedNoteIndex}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
        />
        {
          this.state.selectedNote ?
            <Editor
              selectedNote={this.state.selectedNote}
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
            />
            :
            null
        }

      </div>
    )
  }

  componentDidMount = () => {
    firebase.firestore().collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(doc => {
          const data = doc.data()
          // we add a property id to our object : data
          // data.id === doc.id
          // on a juste créer une propriété en plus à l'object
          data['id'] = doc.id
          return data
        })
        console.log('notesss', notes)
        this.setState({ notes: notes })
      })
  }

  deleteNote = async (note) => 
  {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });

    if (this.state.selectedNoteIndex === noteIndex) 
    {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } 
    else 
    {
      this.state.notes.length > 1 ?
        this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
        this.setState({ selectedNoteIndex: null, selectedNote: null });
    }
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });
}

export default App