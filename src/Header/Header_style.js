import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(3),
      },
      title: {
        flexGrow: 1,
        textTransform: 'upperCase'
      },
      link: {
        textDecoration: 'none',
        color: 'white'
      }
    }));

export default useStyles;