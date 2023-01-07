import React from 'react';
import { removeHTMLTags } from '../helpers';
import { BsFillTrashFill } from "react-icons/bs";
import './sidebarItem.css';
import { ListItem } from '@mui/material';


export class SidebarItem extends React.Component {

    render() {

        const { index, note, selectedNoteIndex } = this.props

        return (
            <div>

                <ListItem
                    className='listItem'
                    selected={selectedNoteIndex === index}
                >
                    <div
                        className='textSection'
                        onClick={() => this.selectNote(note, index)}>
                    
                    <ul className='noteTitle'>{(note.title).charAt(0).toUpperCase() + (note.title).slice(1)} </ul>

                    <ul>
                        {removeHTMLTags(note.body.substring(0, 30)) + '...'}
                    </ul>

                    </div>

                
                    <BsFillTrashFill  selected={selectedNoteIndex === index} className='deleteIcon' fontSize={22} color='#29487d' onClick={() => this.deleteNote(note)}
                    ></BsFillTrashFill>
                </ListItem>
            </div>
        )
    }

    selectNote = (n, i) => this.props.selectNote(n, i);

    deleteNote = (note) => {
      if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
        this.props.deleteNote(note);
      }
    }
}

export default SidebarItem