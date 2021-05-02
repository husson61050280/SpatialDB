import React from 'react';
import {AppBar , Toolbar , IconButton, Typography , Button } from '@material-ui/core'
import { Explore } from '@material-ui/icons';
import useStyles from './Header_style';

// router
import {Link} from "react-router-dom";

const Header = () => {
    const classes = useStyles();
    return(
        <div>
        <AppBar className={classes.root}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to="/" className={classes.link}><Explore /></Link>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Visualizing Air Polution (PM 2.5)
            </Typography>
            <Button variant="contained" color="primary"className={classes.menuButton}><Link to="/add" className={classes.link}>Insert Data</Link></Button>
            <Button variant="contained" color="secondary" className={classes.menuButton}><Link to="/query" className={classes.link}>Query Data</Link></Button>
        </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;