import {React , useState} from 'react';
import { Container, Grid, Typography , Button , Card , CardContent , CardActions, CardMedia, TextField , Paper} from '@material-ui/core';
import useStyles from './Query_style';
import {Query_1, Query_2} from '../api/index'


const Query = () => {
    const classes = useStyles();
    const [selected , setSelected] = useState();
    const [data_Q1 , setData_Q1] = useState({country:""});
    const [data_Q2 , setData_Q2] = useState({year: "" , color_pm25: "" });

        
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(selected === 1) {
            console.log("data Q1" , data_Q1)
            await Query_1(data_Q1)
            clear();
        }
        else if(selected === 2) {
            console.log("data Q2" , data_Q2)
            await Query_2(data_Q2)
            clear();
        }
    }

    const clear = () => {
        if(selected === 1) {
            setData_Q1({country:""})
        }
        else if(selected === 2) {
            setData_Q2({year: "" , color_pm25: "" })
        }
      };

    return(
        <div>
            <Container maxWidth="lg" className={classes.root}>
                <Paper className={classes.paper}>
                <Typography variant="h4" color="primary" className={classes.title}>Perform the following Queries and Save Results in Excel</Typography>
                </Paper>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sm={6} >
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://images.unsplash.com/photo-1464716821973-e1031cfa43dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=596&q=80"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">Query 1</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Given a country_input from the user, show a historical PM 2.5 values by year.</Typography>
                            </CardContent>
                            <CardActions>
                                 <Button size="md" variant="contained" color="secondary" onClick={() => setSelected(1)}>View</Button>           
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* 2 */}
                    <Grid item xs={12} md={6} sm={6} >
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">Query 2</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">Given a year_input and an input of color_pm25 level of health concern from the user, calculate a total of the affected population (in number).</Typography> 
                            </CardContent>
                            <CardActions>
                                 <Button size="md" variant="contained" color="secondary" onClick={() => setSelected(2)}>View</Button>           
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                {/* Input form */}
                {selected === 1 ? 
                    <Container maxWidth="lg">
                    <Paper className={classes.paper}>
                      <Typography variant="h6" color="textSecondary" >Given a country_input from the user, show a historical PM 2.5 values by year.</Typography>
                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Input Country"
                                fullWidth
                                value={data_Q1.country}
                                onChange={(e) => setData_Q1({ ...data_Q1, country: e.target.value })} 
                            />
                            <Button variant="contained"  className={classes.button}  color="primary" onClick={() => setSelected(0)}>Back</Button>
                            <Button variant="contained" color="secondary" type="submit"  className={classes.button}>Submit</Button>
                        </form>
                        </Paper>
                    </Container> 
                : selected === 2 ? 
                    <Container maxWidth="lg">
                        <Paper className={classes.paper}>
                        <Typography variant="h6" color="textSecondary">Given a year_input and an input of color_pm25 level of health concern from the user, calculate a total of the affected population (in number).</Typography> 
                         <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <TextField
                                required
                                id="year"
                                name="year"
                                label="Input Year"
                                fullWidth
                                value={data_Q2.year}
                                onChange={(e) => setData_Q2({ ...data_Q2, year: e.target.value })} 
                            />
                                <TextField
                                required
                                id="color_pm25"
                                name="color_pm25"
                                label="Input color_pm25"
                                fullWidth
                                value={data_Q2.color_pm25}
                                onChange={(e) => setData_Q2({ ...data_Q2, color_pm25: e.target.value })} 
                            />
                            <Button variant="contained" className={classes.button} color="primary" onClick={() => setSelected(0)}>Back</Button>
                            <Button variant="contained" color="secondary" type="submit" className={classes.button}>Submit</Button>
                        </form>
                        </Paper>
                    </Container>
                : "" }
            </Container>
        </div>
    );
}

export default Query;