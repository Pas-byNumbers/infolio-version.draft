import React, { useState, useEffect } from "react";
import UserRegister from "../modals/UserRegister";
import UserLogin from "../modals/UserLogin";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ContextMenu from "./ContextMenu";

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
    marginLeft: theme.spacing(2),
  },
  barColor: {
    backgroundColor: "#d47720",
  },
}));

function UserMenu({ handleLogout, currentUser }) {
  const classes = useStyles();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const checkUserAuth = () => {
    if (!!(currentUser && localStorage.token)) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkUserAuth();
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barColor}>
        <Toolbar>
        <Button>
          <Typography variant="h6" className={classes.title} onClick={() => history.push('/')}>
            Infolio
          </Typography>
        </Button>
          
          <div className={classes.userMainButtons}>
            {loggedIn ? (
              <div>
                <Button>Profile</Button>
                <Button onClick={handleLogout}>Log Out</Button>
                <div>
                  <ContextMenu 
                    notesRoute={() => history.push('/notes')}
                  />
                </div>
              </div>
            ) : (
              <div>
                <UserRegister />
                <UserLogin />
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, null)(UserMenu);
