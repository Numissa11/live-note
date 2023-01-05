import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@mui/icons-material/BorderColor';


export class Editor extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }
    render() {

        const { classes } = this.props

        return (
            <div className='classes.editorContainer'>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}>
                </ReactQuill>
            </div>
        )
    }

    updateBody = async (val) => {
        await this.setState({ text: val })
        this.update()
    }

    update = debounce(() => {
         console.log('updating database after 1.5 second stop:)')
    }, 1500)
}

export default Editor