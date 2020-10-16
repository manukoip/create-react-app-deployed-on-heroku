import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // add within App function before the return
  const [myValue, setValue] = React.useState('default')
  return (
    <div>
	    <AppBar color="primary" position="static">
	      <Toolbar>
		      <TypoGraphy variant="title"
			      color="inherit"
		      >
		      This is Manu on React.
		      </TypoGraphy>
	      </Toolbar>
      </AppBar>
      <br></br>
      <TextField
	      id="standard-helperText"
	      label="Helper text"
	      defaultValue="Default Value"
        helperText="Some important text"
        // add underneath helperText within TextField
        style={{
	          position: 'absolute', left: '50%', top: '50%',
	          transform: 'translate(-50%, -50%)'
        }}
        // add under style field in TextField tags
        onChange={(e) => setValue(e.target.value)}
      />
    
      <br></br>
      <h1
	      style={{
		        position: 'absolute', left: '50%', top: '60%',
		        transform: 'translate(-50%, -50%)'
	      }}>
      Hello {myValue}!
      </h1>
    </div>
  );
}

export default App;
