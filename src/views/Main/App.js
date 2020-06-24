import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Fab,
  makeStyles,
  Container,
  MuiThemeProvider
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import HeaderBar from 'components/common/HeaderBar'
import SearchModal from 'components/Search/SearchModal'
import VerseOfTheDay from 'views/VerseOfTheDay/VerseOfTheDay';
import Search from 'views/Search/Search';
import bibleData from 'data/bibleChaptersVerses.min.js'
import SearchPhrase from 'views/Search/SearchPhrase';

import themeOverides from 'constants/theme';
import * as ROUTES from 'constants/routes'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000
  }
}))

function getbookDetails() {
  let bibleDetails = {}
  bibleData.forEach((book) => {
    bibleDetails[book.abbr] = book
  })
  return bibleDetails
}

const bibleDetails = getbookDetails()

const BIBLE_VERSION = 'LEB'

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
    <MuiThemeProvider theme={themeOverides}>
      <Router>
        <div className="App">
          <CssBaseline />
          <HeaderBar />

          <Container>
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <VerseOfTheDay
                  bibleVersion={BIBLE_VERSION}
                />
              </Route>
              <Route path={ROUTES.SEARCH_WITH_PARAMS}>
                <Search
                  bibleVersion={BIBLE_VERSION}
                  bibleDetails={bibleDetails}
                />
              </Route>
              <Route path={ROUTES.SEARCH_PHRASE_WITH_PARAMS}>
                <SearchPhrase
                  bibleVersion={BIBLE_VERSION}
                />
              </Route>
            </Switch>
          </Container>

          <Fab
            size="medium"
            color="secondary"
            aria-label="search"
            className={classes.fab}
            onClick={handleSearchOpen}
          >
            <SearchIcon />
          </Fab>

          <SearchModal
            bibleDetails={bibleDetails}
            open={searchOpen}
            handleClose={handleSearchClose}
          />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
