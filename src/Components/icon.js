import React from 'react';
import Modal from '@mui/material/Modal';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton} from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
  };

const useStyles = makeStyles((theme) => ({
    icon: {
      color: '#E8F1F2',
      fontSize: '2rem',
    },
    box: {
      background: 'linear-gradient(#247BA0, #13293D)',
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'content-box',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
      },
    },
    dark: {
      background: '#292929 !important',
    },
    light: {
      background: '#E8F1F2 !important',
      color: '#292929 !important'
    }, 
    test: {
      background: '#247BA0 !important',
      color: '#13293D !important'
    }
}));
export default function BasicModal() {
    const classes = useStyles();
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <IconButton onClick={handleOpen}>
            <SortIcon className={classes.icon} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style} className={classes.box}>               
                  <Button className={classes.dark} variant="contained" href="/">
                    DARKMODE
                  </Button>
                  <Button className={classes.light} variant="contained" href="/light">
                    LIGHTMODE
                  </Button>
                  <Button className={classes.test} variant="contained" href="/test">
                    TEST-AB
                  </Button>
                </Box>
            </Modal>
        </IconButton>    
      </div>
    );
  }