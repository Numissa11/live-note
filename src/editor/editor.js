import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';


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

        return (
            <div className='editorContainer'>
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
        // updating database after 1.5 second stop writing
         console.log('updating database after 1.5 second stop:)')
    }, 1500)
}

export default Editor