import './App.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Calendar from './components/Calendar';
import Statistics from './components/Statistics';

function App() {
  const [value, setValue] = useState('customerlist')
  const [drawerOpen, setDrawer] = useState(false);

  const toggleDrawer = (value) => {
    setDrawer(value);
  }

  return (
    <div className="App">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Button onClick={() => toggleDrawer(true)} variant="contained" color="secondary" style={{ margin: '10px' }}>Menu</Button>
          <Drawer anchor="left"
            variant="temporary"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <Box>
              <Typography variant="h4" align="center" style={{ marginTop: '10px' }}>Menu</Typography>
              <List>
                <ListItem>
                  <Button onClick={() => setValue("customerlist")} color="primary">Customers</Button>
                </ListItem>
                <ListItem>
                  <Button onClick={() => setValue("traininglist")} color="primary">Traininglist</Button>
                </ListItem>
                <ListItem>
                  <Button onClick={() => setValue("calendar")} color="primary">Calendar</Button>
                </ListItem>
                <ListItem>
                  <Button onClick={() => setValue("statistics")} color="primary">Statistics</Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Typography variant="h6">
            Personal Trainer
          </Typography>
        </Toolbar>
      </AppBar>
      {value === 'customerlist' && <Customerlist />}
      {value === 'traininglist' && <Traininglist />}
      {value === 'calendar' && <Calendar />}
      {value === 'statistics' && <Statistics />}

    </div>
  );
}

export default App;
