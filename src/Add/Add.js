import {React,useState , useEffect} from 'react';
import { Container, Grid,TextField, Typography , Button , Paper} from '@material-ui/core';
import {CheckCircleOutline } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import useStyles from './Add_style';
import useForm from './useForm';
import ValidateInfo from './ValidateInfo';
import {addDataPM} from '../api/index'
import AddCircleIcon from '@material-ui/icons/AddCircle';


const Add = () => {
    const classes = useStyles();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const SendData = async (data) => {
      await addDataPM(data);
    }

    const submitForm = (values) => {
        console.log("Value" , values)
        SendData();
        setIsSubmitted(true)
    }

    const {handleChange , values , handleSubmit , errors} = useForm(submitForm ,ValidateInfo);

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                {isSubmitted ?
                    <Paper className={classes.paper_success}>
                        <Typography variant="h4" className={classes.title} gutterBottom color="primary">Inserted Successfully</Typography>
                        <CheckCircleOutline className={classes.icon}/>
                        <br/>
                        <Button variant="contained" className ={classes.button} color="primary" onClick={() => setIsSubmitted(false)}>ADD DATA</Button>
                        <Button variant="contained"  className ={classes.button} color="secondary" component={Link} to='/'>BACK TO HOMEPAGE</Button>
                    </Paper>
                : 
                <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom align="center" className={classes.title} color="textSecondary">
                    Add Data PM 2.5
                    <AddCircleIcon className={classes.icon2}/>
                </Typography>

                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3} className={classes.form}>
                    <Grid item xs={12} md={6} >
                    <TextField 
                        error = {errors.country}
                        required 
                        id="country" 
                        name="country" 
                        label="Country" 
                        fullWidth
                        value={values.country} 
                        onChange={handleChange} 
                        helperText = {errors.country}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.city}
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        value={values.city}
                        onChange={handleChange} 
                        helperText = {errors.city}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.year}
                        required
                        id="year"
                        name="year"
                        label="Year"
                        fullWidth
                        value={values.year}
                        onChange={handleChange} 
                        helperText = {errors.year}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.pm25}
                        required
                        id="pm25"
                        name="pm25"
                        label="PM 2.5"
                        fullWidth
                        value={values.pm25}
                        onChange={handleChange}
                        helperText = {errors.pm25} 
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.latitude}
                        required
                        id="latitude"
                        name="latitude"
                        label="Latitude"
                        fullWidth
                        value={values.latitude}
                        onChange={handleChange} 
                        helperText = {errors.latitude} 
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField 
                        error = {errors.longitude}
                        required
                        id="longitude" 
                        name="longitude" 
                        label="Longitude" 
                        fullWidth 
                        value={values.longitude}
                        onChange={handleChange} 
                        helperText = {errors.longitude}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        error = {errors.population}
                        required
                        id="population"
                        name="population"
                        label="Population"
                        fullWidth
                        value={values.population}
                        onChange={handleChange} 
                        helperText = {errors.population}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.wbinc_16_text}
                        required
                        id="wbinc_16_text"
                        name="wbinc_16_text"
                        label="Wbinc_16_text"
                        fullWidth
                        value={values.wbinc_16_text}
                        onChange={handleChange} 
                        helperText = {errors.wbinc_16_text}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.region}
                        required
                        id="region"
                        name="region"
                        label="Region"
                        fullWidth
                        value={values.region}
                        onChange={handleChange} 
                        helperText = {errors.region}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.conc_pm25}
                        required
                        id="conc_pm25"
                        name="conc_pm25"
                        label="Conc_pm25"
                        fullWidth
                        value={values.conc_pm25}
                        onChange={handleChange} 
                        helperText = {errors.conc_pm25}
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        error = {errors.color_pm25}
                        required
                        id="color_pm25"
                        name="color_pm25"
                        label="Color_pm25"
                        fullWidth
                        value={values.color_pm25}
                        onChange={handleChange} 
                        helperText = {errors.color_pm25}
                    />
                    </Grid>
                </Grid>
                <Button variant="contained" size="large" color="secondary" className={classes.button} type="submit">Submit</Button>
                </form>
                </Paper>
                }
            </Container>
        </div>
    )
}

export default Add;