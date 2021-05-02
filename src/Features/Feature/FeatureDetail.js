import React ,{useState , useEffect} from 'react';
import {Typography , Button , Container, TextField} from '@material-ui/core'
import useStyles from '../Features_style';
import Map from '../../Map/Map';
import {feature1 , feature2 , feature3 , feature4 , feature5 , feature6} from '../../api/index'
import {useHistory , Link} from 'react-router-dom'

const FeatureDetail = ({feature_id , Features_Method}) => {
    const history = useHistory();
    const classes = useStyles();
    const [data , setData] = useState("");
    const [marker , setMarker] = useState();
    const Feature = Features_Method.filter(feature => feature.id === feature_id);

    const point = [
        {id: 1 , lat: 46.3588  , long: 68.5766 , color:'red'},
        {id: 2 , lat: 78.6888  , long: 92.5766 , color:"blue"},
        {id: 3 , lat: 53.3588  , long: 84.5766 , color:'red'},
        {id: 4 , lat: 69.6888  , long: 93.5766 , color:"blue"},
        {id: 5 , lat: 56.3588  , long: 85.5766 , color:'red'},
        {id: 6 , lat: 90.6888  , long: 80.5766 , color:"blue"},
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data_api;
        if(feature_id === 1){
            data_api = await feature1(data)
        } 
        else if(feature_id === 6) {
            data_api = await feature6(data);
        } 
        setMarker(point)       
    }

    const FilterAPI = async (feature_id) => {
        let data_api;
        switch(feature_id) {
            case feature_id === 2:
                data_api = await feature2();
                break;
            case feature_id === 3:
                data_api = await feature3();
                break;
            case feature_id === 4:
                data_api = await feature4();
                break;
            case feature_id === 5:
                data_api = await feature5();
                break;
        }
        return data_api
    }

    useEffect(() => {
        if(feature_id === 2 || feature_id === 3 || feature_id === 4 || feature_id === 5){
            const data_api = FilterAPI(feature_id);
            setMarker(point)                
        }
    }, [])

    return(
        <div>
            {feature_id === 0 ? history.push('/') :
            <Container maxWidth="lg" align="center" className={classes.root}>
                <Typography variant="h4" color="textSecondary" className={classes.title} gutterBottom >
                    {Feature[0].desc} 
                </Typography>
                {feature_id === 1 || feature_id === 6 ?
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <TextField
                            required
                            id="year"
                            name="year"
                            label="Input a year"
                            fullWidth
                            value={data.country}
                            onChange={(e) => setData({ ...data, country: e.target.value })} 
                        />
                    <Button variant="contained" size="large" color="secondary" type="submit" className={classes.button_feature}>Submit</Button>
                </form>
                : ""}
            </Container>
            }       
            {marker && <Button variant="contained" color="secondary" size="large" className={classes.button} component={Link} to="/">Back</Button>}
            {marker ? <Map marker={marker} setMarker={setMarker}/> : ""}
        </div>
    );
}
export default FeatureDetail;