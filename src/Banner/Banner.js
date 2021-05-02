import React from 'react';
import {Typography , Container , Paper} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public';
import useStyles from './Banner_style';

const Banner = () => {
    const classes = useStyles();
    return(
        <div>
        <Container maxWidth="lg" className={classes.banner} >
        <Paper maxWidth="lg" className={classes.paper}>
        <Typography variant="h4" gutterBottom className={classes.title}  color="primary">Spatial Database use for visualizing Air Pollution</Typography>
        <Typography variant="subtitle1" color="textSecondary">This project is visualizing air pollution (PM 2.5) of all country by using Google Map API and Spatial database GIS application.</Typography>
        <PublicIcon className={classes.icon}/>
        </Paper>
        </Container>
        </div>
    );
}

export default Banner;
