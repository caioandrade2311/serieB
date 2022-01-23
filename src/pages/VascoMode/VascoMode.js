import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Card from './components/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#13293D',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.webp'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));
// Function DarkMode
export default function VascoMode() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />  
      <Header />
      <Card />
    </div>
  );
}
