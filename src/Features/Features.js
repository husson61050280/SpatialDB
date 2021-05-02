import React from 'react';
import {Typography , Button , Container , Grid , Card , CardActions , CardMedia, CardContent} from '@material-ui/core'
import useStyles from './Features_style';

// router
import {Link} from "react-router-dom";

const Features = ({setFeature_id , Features_Method}) => {
    const classes = useStyles();

    return(
        <div>
            <Container maxWidth="lg" className={classes.banner}>
                <Grid container spacing={2}>
                {Features_Method.map((feature) => (
                    <Grid item key={feature.topic} xs={12} md={4} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image={feature.image}
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">{feature.topic}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">{feature.desc}</Typography>
                            </CardContent>
                            <CardActions>
                                 <Button className={classes.button} size="md" variant="contained" color="secondary" onClick={()=> setFeature_id(feature.id)}><Link to="/featureDetail" className={classes.link}>View</Link></Button>           
                            </CardActions>
                        </Card>
                    </Grid>
                     ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Features;