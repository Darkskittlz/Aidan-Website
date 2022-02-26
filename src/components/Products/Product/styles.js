import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '98%',
    maxHeight: 650,
  },
  media: {
    height: 500,  
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: '999',
    color: "black"
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: '999',
    color: 'black'
  },
}));
