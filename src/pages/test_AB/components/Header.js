import React, { useEffect, useState } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BasicModal from '../../../Components/icon.js';

import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',   
    fontFamily: 'Nunito',
  },
  appbar: {
    background: '#13293D',
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
    color: '#247BA0',
  },
  pointAppBar: {
    color: '#247BA0',
  },
  textMain: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    color: '#E8F1F2'
  },
  textMainP: {
    fontSize: '1.5rem',
    color: '#E8F1F2',
    fontStyle: 'bold',
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
            <span className={classes.colorTextappBar}>Caio<span className={classes.pointAppBar}>.</span></span>
          </h1>
          <BasicModal/>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Hello, this is my<br />
            <span className={classes.colorText}>research about A B test<span className={classes.point}>.</span></span>
          </h1>
          <main>
            <h1 className={classes.textMain}>A/B testing is a design testing method by which random elements with two variants are compared<span className={classes.point}>!</span></h1>
            <p className={classes.textMainP}>Saiba Mais...</p>
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
