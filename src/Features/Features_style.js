import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      root: {
        marginTop: '120px'
      },
      title: {
        textTransform:'upperCase',
        margin: '20px 0'
      },
      banner: {
        marginTop: '50px'
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
      link: {
        textDecoration: 'none',
        color: 'white'
      },
      button_feature: {
        margin: '20px 0 '
      },
      button: {
        margin: '30 0'
      }
    }));

export default useStyles;