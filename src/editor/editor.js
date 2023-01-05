import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { withStyles } from '@material-ui/core/styles';


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
}

export default Editor