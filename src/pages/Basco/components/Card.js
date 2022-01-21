import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import box from '../../../static/box';
import Form from './Form/Form.js';

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

// Function that makes the card appear
export default function CardBox () {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root} id="card">
        <Form/>
        <ImageCard place={box[1]} />
        <ImageCard place={box[0]}  />  
      </div>        
    </div>       
  );
}
