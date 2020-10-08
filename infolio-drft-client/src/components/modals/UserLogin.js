import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { authenticateUser } from "../../actions/userActions.js";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function UserLogin( props ) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    props.authenticateUser(userInfo)
    handleClose()
  }


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Log in to your account</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Username"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />

        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          type="password"
        />

        <Button 
          variant="contained" 
          color="primary"
          onClick={handleSubmit}
          >
          Log In
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Button color="inherit" type="button" onClick={handleOpen}>
        Log in
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  authenticateUser: userInfo => dispatch(authenticateUser(userInfo))
})

export default connect(null, mapDispatchToProps)(UserLogin);
