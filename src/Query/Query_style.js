import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '120px'
      },
    title: {
        textTransform:'upperCase',
        textAlign:'center',
        margin: '20px 0',
        fontWeight: 500
    },
    form: {
        margin: '10px 0'
    },
    grid: {
        margin: '30px 0'
    },
    button: {
        marginTop: '20px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    paper: {
        padding:theme.spacing(3),
        margin:'20px 0',
        borderRadius: '20px'
    }
    }));

export default useStyles;