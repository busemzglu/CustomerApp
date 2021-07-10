import React ,{ useState }from "react";

import { Link,useHistory ,Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo2.jpg";
import alertify from "alertifyjs"
import 'alertifyjs/build/css/alertify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontFamily:"\"Lato\", sans-serif"
    
  },
  image: {
    backgroundImage: "url(" + logo + ")",
    backgroundColor: "#ffffff",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    margin: theme.spacing(14, 13),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));






export default function SignInSide() {
  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const classes = useStyles();

  
  let history = useHistory();

  function handleClick() {
    if(username==="admin" && password ==="123"){
      alertify.set('notifier','position', 'top-right');
      alertify.success('Login Success', 1); 
      localStorage.setItem("isLogin","success")

      setTimeout(function(){ history.push("/home"); }, 1300);
    }
    else{
      alertify.set('notifier','position', 'top-right');
      alertify.error('Error notification message.'); 
      
    }
  }

if(localStorage.getItem("isLogin")==="success"){
  return (<Redirect to="/home" />)

}else{
  return (
    <Grid container component="main" className={classes.root} style={{}}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}  noValidate >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setUserName(e.target.value)}
              
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Sign In
              </Button>
            
           
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}




}
