import React from "react";
import UserRegister from "./modals/UserRegister";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(160),
    marginBottom: theme.spacing(80)
  },
}));

export default function UserMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Home</MenuItem>
          {!!localStorage.token ? (
            <div>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </div>
          ) : (
            <div>
                <UserRegister />
              <MenuItem>Log In</MenuItem>
            </div>
          )}
        </MenuList>
      </Paper>
    </div>
  );
}
