import React from 'react';
import { removeHTMLTags } from '../helpers';
import { BsFillTrashFill } from "react-icons/bs";
import './sidebarItem.css';


export class SidebarItem extends React.Component {

    render() {

        const { index, note, selectedNoteIndex } = this.props

        return (
            <div>

                <ul
                    className='listItem'
                    selected={selectedNoteIndex === index}
                >
                    <div
                        className='textSection'
                        onClick={() => this.selectNote(note, index)}>
                    
                    <li className='noteTitle'>{(note.title).charAt(0).toUpperCase() + (note.title).slice(1)} </li>

                    <li>
                        {removeHTMLTags(note.body.substring(0, 30)) + '...'}
                    </li>

                    </div>

                
                    <BsFillTrashFill className='deleteIcon' fontSize={22} color='#29487d' onClick={() => this.deleteNote(note)}
                    ></BsFillTrashFill>
                </ul>
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