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
          newNote={this.newNote}
        />
        {
          this.state.selectedNote ?
            <Editor
              selectedNote={this.state.selectedNote}
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}
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
        this.setState({ notes: notes })
      })
  }

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });

    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    }
    else {
      this.state.notes.length > 1 ?
        this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
        this.setState({ selectedNoteIndex: null, selectedNote: null });
    }
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });

  noteUpdate = (id, noteObj) => {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
  }

  newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    }
    //we create a new note and wait for the db response that we set resonse to this const newFromDB
    const newFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
       })
       // we grab the id from the fresh db reponse
       const newID = newFromDB.id
       // we update the notes array: so all the notes we already have + the new note
       await this.setState({notes: [...this.state.notes, note] })
       // we wanna find the index of the new note
       // indexOf is a function of the array object that find the index of a particular item inside of an array
       // here we filter trough that array an find the note that is equal to the note we adding
       // but that's going to return an array, but it will return only one item, so we can just take the first and only item of the arry, so [0]
       const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(note => note.id === newID))
       this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex })
  }

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
    if(this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      this.state.notes.length > 1 ?
      this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }

}

export default App