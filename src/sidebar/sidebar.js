import { Divider, List } from '@mui/material';
import React from 'react';
import SidebarItem from '../sidebarItem/sidebarItem';
import './sidebar.css';


export class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            addingNote: false,
            title: null
        }
    }
    render() {
        const { notes, selectedNoteIndex } = this.props
       if (notes) {
        return (
            <div className='sidebarContainer'>
                <button
                    onClick={this.newNoteBtnClick}
                    className='newNotBtn' > {this.state.addingNote? 'Cancel' : 'New Note'}
                </button>
                {
                    this.state.addingNote ?
                        <div>
                            <input type='text'
                                className='newNoteInput'
                                placeholder='Enter note title'
                                onKeyUp={(e) => this.updateTitle(e.target.value)}>
                            </input>
                            <button 
                            className='newNoteSubmitBtn'
                            onClick={this.newNote} > Submit Note </button>
                        </div> :
                        null
                }
                <List>
                    {
                        notes.map((note, index) => {
                            return(
                                <div key={index}>
                                    <SidebarItem 
                                    note={note}
                                    index={index}
                                    selectedNoteIndex={selectedNoteIndex}
                                    selectNote={this.selectNote}
                                    deleteNote={this.deleteNote}
                                    />
                                    <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
            </div>
        )
       } else {
        return (
        <div></div>
        )
       }
    }

    newNoteBtnClick = () => {
        console.log('new note')
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }

    updateTitle = (txt) => {
        console.log('here is my txt:', txt)
        this.setState({ title : txt })
      }

      newNote = () => {
        console.log(this.state)
        // this.props.newNote(this.state.title);
        // this.setState({ title: null, addingNote: false });
      }

      selectNote = () => console.log('this.props.selectNote(n, i)')
      deleteNote = (note) =>console.log( 'this.props.deleteNote(note)')
}

export default Sidebar