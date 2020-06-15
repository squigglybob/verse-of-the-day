import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Fab, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

import HeaderBar from 'components/common/HeaderBar'
import Flex from 'components/common/Flex'
import SearchModal from 'components/Search/SearchModal'
import VerseOfTheDay from 'views/VerseOfTheDay/VerseOfTheDay';

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
    console.log(searchOpen);
    setSearchOpen(true)
  }

  const handleSearchClose = () => {
    setSearchOpen(false)
  }

  return (
    <div className="App">
      <CssBaseline />
      <HeaderBar />
      <Flex position='center'>

        <VerseOfTheDay />

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
  );
}

export default App;
