import React, { Component } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Sidebar from './sidebar/sidebar';
import Editor from './editor/editor';

export class App extends Component {

  constructor() 
  {
    super()

    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render() 
  {
    return (
      <div className='app-container'>
        <Sidebar />

        <Editor />
      </div>
    )
  }

  componentDidMount = () => { 
    firebase.firestore().collection('notes')
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data()
        // we add a property id to our object : data
        // data.id === _doc.id
        // on a juste créer une propriété en plus à l'object
        data['id'] = _doc.id
        return data
      })
      console.log(notes)
      this.setState({ notes: notes })
    })
   }

}

export default App