import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import './editor.css';
import { FaEdit } from "react-icons/fa";

export class Editor extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        })
    }

    componentDidUpdate = () => {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id,
            })
        }
    }


    render() {
        return (
            <div className='editorContainer'>
                <FaEdit className='editIcon'></FaEdit>
                <input
                    className='titleInput'
                    placeholder='Note title...'
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}>
                </input>

                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}>

                </ReactQuill>
            </div>
        )
    }

    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update();
      }
      
    updateBody = async (val) => {
        await this.setState({ text: val })
        this.update()
    }

    update = debounce(() => {
        // updating database after 1.5 second stop writing
        console.log('updating database after 1.5 second stop:)')
        this.props.noteUpdate(this.state.id,
            {
                title: this.state.title,
                body: this.state.text
            }
        )
    }, 1500)
}

export default Editor