import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>Sidebar</div>
        )
    }
}

export default withStyles(styles)(Sidebar)