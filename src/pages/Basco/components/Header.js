import React, { useEffect, useState } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BascoLogo from './BascoLogo.svg';

import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'linear-gradient(#000, #292929)' 
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  icon: {
    color: '#E8F1F2',
    fontSize: '2rem',
  },
  colorText: {
    color: '#E8F1F2',
  },
  colorTextappBar: {
    color: '#E8F1F2', 
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#E8F1F2',
    fontSize: '6.5rem',
    marginTop: '100px',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      marginTop: '150px',
    },
  },
  goDown: {
    color: '#247BA0',
    fontSize: '3.5rem',
  },
  point: {
    color: '#FF0000',
  },
  pointAppBar: {
    color: '#FF0000',
  },
  textMain: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    color: '#E8F1F2'
  }
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorTextappBar}>BASCO DA GAMA<span className={classes.pointAppBar}>.</span></span>
          </h1>
          <img src={BascoLogo} className='BascoLogo' alt="BascoLogo" />
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
             <br />
            <span className={classes.colorText}>PWU<span className={classes.point}>.</span></span>
          </h1>
          <main>
            <h1 className={classes.textMain}>Submit your e-commerce project now and start your journey with us<span className={classes.point}>!</span></h1>
          </main>
          <Scroll to="card" smooth={true}>
            <IconButton >
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
