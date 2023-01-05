import React, { Component } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }
  render() {
    return (
      <div>App</div>
    )
  }

  componentDidMount = () => { 
    firebase.firestore().collection('notes')
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map()
    })
   }

}

export default App