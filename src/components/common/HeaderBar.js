import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom';

import * as ROUTES from 'constants/routes'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {
    color: theme.palette.common.white
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.iconButton}
            component={Link}
            to={ROUTES.HOME}
            aria-label="Home"
            edge="start"
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Verse of the Day
          </Typography>
        </Toolbar>
      </AppBar>
    </div >
  );
}
