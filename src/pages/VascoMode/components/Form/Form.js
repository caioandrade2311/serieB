import React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles((theme) => ({
  appbarTitle: {
    flexGrow: '1',
  },
  colorText: {
    color: '#E8F1F2',
  },
  point: {
    color: '#247BA0',
  },
  boxForm: {
    background: 'linear-gradient(#13293D, #011E41)',
    display: 'flex',
    textAlign: 'center',
    borderRadius: '15px',
    flexDirection: 'column',
    padding: '15px',
  },
  
}));
// Email sending function via emailjs lib
export default function FormEmail() {
  function sendEmail(e) {
    e.preventDefault();

  emailjs.sendForm('gmailMessage', 'template_p09p79c', e.target, 'user_Dzw95JQrOj7cvYWn52TXp')

    .then((result) => {
        alert("Projeto de E-commerce enviado com sucesso");
       
    }, (error) => {
        alert(error.message)
        
    });
    e.target.reset()


}
// Form
  const classes = useStyles();
  return (
    <div>
      <form className={classes.boxForm} sx={{display: 'flex',alignItems: 'center','& > :not(style)': { m: 1 },}} onSubmit={sendEmail} autoComplete="off">
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>Contact us<span className={classes.point}>.</span></span>
          </h1>
          <h2 className={classes.appbarTitle}>
            <span className={classes.colorText}>Send us your e-commerce project</span><span className={classes.point}>.</span>
          </h2>
          <Input style={{color: '#E8F1F2'}} placeholder="Name" type="text" name="name" for="name" Validate />
          <Input style={{color: '#E8F1F2', marginTop: '20px'}} placeholder="Email" type="text" name="email" Validate For="email" />
          <Input style={{color: '#E8F1F2', marginTop: '40px'}} label="Description" multiline rows={4} Validate placeholder="Tell us about your project" name="menssage"/>
          <Button variant="contained" style={{ marginTop: '50px', backgroundColor: '#247BA0',color: '#E8F1F2', fontFamily: 'Nunito'}} endIcon={<SendIcon />} type="submit" value="send">
            Send
          </Button>        
      </form>
    </div>
  );
}
