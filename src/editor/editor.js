import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import React, { Component } from 'react'

export class Editor extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                editor
            </div>
        )
    }
}

export default withStyles(styles)(Editor) 