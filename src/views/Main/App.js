import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Fab, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import HeaderBar from 'components/common/HeaderBar'
import Flex from 'components/common/Flex'
import SearchModal from 'components/Search/SearchModal'
import VerseOfTheDay from 'views/VerseOfTheDay/VerseOfTheDay';

import * as ROUTES from 'constants/routes'
import Search from 'views/Search/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000
  }
}))

function App() {

  const classes = useStyles()

  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearchOpen = () => {
    setSearchOpen(true)
  }

  const handleSearchClose = () => {
    setSearchOpen(false)
  }

  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <HeaderBar />
        <Flex position='center'>
  
  
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <VerseOfTheDay />
            </Route>
            <Route path={ROUTES.SEARCH_WITH_PARAMS}>
              <Search />
            </Route>
          </Switch>
  
        </Flex>
  
        <Fab
          size="medium"
          color="secondary"
          aria-label="search"
          className={classes.root}
          onClick={handleSearchOpen}
        >
          <SearchIcon />
        </Fab>
  
        <SearchModal
          open={searchOpen}
          handleClose={handleSearchClose}
        />
      </div>
    </Router>
  );
}

export default App;
