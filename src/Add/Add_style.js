import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '120px'
      },
    title: {
        textTransform:'upperCase',
        fontWeight: 700,
        textAlign: 'center',
        
    },
    form: {
        margin: '10px 0'
    },
    button: {
        margin: '20px 0',
        marginLeft: '10px'
    },
    paper: {
        padding: theme.spacing(4),
    },
    paper_success:{
        textAlign: 'center',
        padding: theme.spacing(4),
    },
    icon: {
        fontSize:"80px",
        color:"green",
    },
    icon2: {
        fontSize:"30px",
        margin: '0 10px',
        color:'green'
    }

    }));


export default useStyles;