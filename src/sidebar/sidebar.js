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
        const { notes, classes, selectedNoteIndex } = this.props
        return (
            <div className='sidebarContainer'>
                <button
                    onClick={this.newNoteBtnClick}
                    className='newNotBtn' > New Note
                </button>
                {
                    this.state.addingNote ?
                        <div>
                            <input type='text'
                                className='newNoteInput'
                                placeholder='Enter note title'
                                onKeyUp={(e) => this.updateTitle(e.target.value)}>
                            </input>
                        </div> :
                        null
                }
            </div>
        )
    }

    newNoteBtnClick = () => {
        console.log('new note')
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }

    updateTitle = (txt) => {
        // this.setState({ title: txt });
        console.log('here is my txt:', txt)
      }
}

export default Sidebar