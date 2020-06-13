import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import HeaderBar from 'components/common/HeaderBar'
import Flex from 'components/common/Flex'
import VerseOfTheDay from 'views/VerseOfTheDay/VerseOfTheDay';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <HeaderBar />
      <Flex>

        <VerseOfTheDay />

      </Flex>
    </div>
  );
}

export default App;
