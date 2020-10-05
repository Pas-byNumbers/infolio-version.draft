import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
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
          { 
            !!localStorage.token ? 
              <div>
               <MenuItem>Profile</MenuItem>
               <MenuItem>Log Out</MenuItem> 
              </div>
            :
            <MenuItem>Log In</MenuItem>
          }
        </MenuList>
      </Paper>
      
    </div>
  )
        }