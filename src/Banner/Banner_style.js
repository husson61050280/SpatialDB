import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      title: {
        flexGrow: 1,
        textTransform: 'upperCase',
        fontWeight: 700,
        lineHeigh:1.5
      },
      banner: {
        marginTop: '120px',
        textAlign: 'center'
      },
      paper: {
        padding: theme.spacing(4),
        borderRadius: '20px',
      },
      icon: {
        fontSize: '80px',
        color:'red',
        marginTop: '20px'
      }
    }));

export default useStyles;