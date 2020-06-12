import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import HeaderBar from 'components/common/HeaderBar'
import Flex from 'components/common/Flex'
import VerseCard from 'components/Verse/VerseCard';

const verseRef = 'John 3:16'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <HeaderBar />
      <Flex>

        <VerseCard verseRef={verseRef} />

      </Flex>
    </div>
  );
}

export default App;
