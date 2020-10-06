import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { countryList } from "../../../utilityExports/countryList.js";

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

export default function UserRegister() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    country: "",
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

  const countrySelector = () => (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="country"
        value={userInfo.country}
        onChange={handleChange}
      >
        {countryList.map((country) => (
          <MenuItem value={country}>{country}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Register a User Account</h2>
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

        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />

        <TextField
          id="standard-basic"
          label="First Name"
          name="first_name"
          value={userInfo.first_name}
          onChange={handleChange}
        />

        <TextField
          id="standard-basic"
          label="Last Name"
          name="last_name"
          value={userInfo.last_name}
          onChange={handleChange}
        />

        {countrySelector()}
      </form>
    </div>
  );

  return (
    <div>
      <MenuItem type="button" onClick={handleOpen}>
        Sign Up
      </MenuItem>
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
