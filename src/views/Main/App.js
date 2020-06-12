import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import HeaderBar from 'components/common/HeaderBar'
import Flex from 'components/common/Flex'
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <HeaderBar />

      <Flex>

        <Paper>
          Hello there :)

        </Paper>

      </Flex>
    </div>
  );
}

export default App;
