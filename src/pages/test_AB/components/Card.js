import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import box from '../../../static/box';
import useWindowPosition from '../../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-evenly',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginTop: '120px',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div>
      <div className={classes.root} id="card">
        <ImageCard place={box[2]} checked={checked} />
        <ImageCard place={box[3]} checked={checked} />  
        <ImageCard place={box[4]} checked={checked} /> 
      </div>        
    </div>       
  );
}