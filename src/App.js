import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'


import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import MailIcon from '@material-ui/icons/Mail'


function CheckboxExample() {
  const[checked, setChecked] = React.useState(true)
  return (
    <div>
      <Checkbox 
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}  
      />
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header" color="primary">
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button 
            startIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
