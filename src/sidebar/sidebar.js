import React from 'react';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
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
        const { notes, classes, selectedNoteIndex } = this.props
        return (
            <div className='sidebarContainer'>
                <button
                    onClick={this.newNoteBtnClick}
                    className='newNotBtn'
                >  New Note
                </button>
            </div>
        )
    }

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
      }
}

export default Sidebar