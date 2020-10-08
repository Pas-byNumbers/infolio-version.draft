import React, { useState, useEffect } from "react";
import UserRegister from "../modals/UserRegister";
import UserLogin from "../modals/UserLogin"
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userMainButtons: {
    marginLeft: theme.spacing(2)
  }
}));

function UserMenu(
  {
    handleLogout,
    currentUser
  }
) {
  const classes = useStyles();

  const [ loggedIn, setLoggedIn ] = useState(false)

  const checkUserAuth = () => {
    if (!!(currentUser && localStorage.token)) {
      setLoggedIn(true)
    }
    else {
      setLoggedIn(false)
    }
  }

  useEffect(() => {
    checkUserAuth()
  })

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Infolio
          </Typography>
          <div className={classes.userMainButtons}>
            {loggedIn ? (
            <div>
              <Button>Profile</Button>
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
          ) : (
            <div>
                <UserRegister />
                <UserLogin />
            </div>
          )}
          </div>
          {/* <Button onClick={checkUserAuth}>check auth</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
  }
}

export default connect(mapStateToProps, null)(UserMenu)