import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

import React, { Component } from 'react'

export class Sidebaritem extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>Sidebaritem</div>
        )
    }
}

export default withStyles(styles)(Sidebaritem)