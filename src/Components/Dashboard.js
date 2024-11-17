import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon,
  CssBaseline, Container, Paper, Box, IconButton, Grid, Menu, MenuItem
} from '@mui/material';
import { Home, LibraryBooks, School, Settings, Assessment, AccountCircle } from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const data = {
  labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
  datasets: [
    {
      label: 'Courses ($)',
      data: [0, 300, 600, 800, 1500, 2000, 2400, 2400, 2400],
      fill: false,
      borderColor: '#3e95cd',
    }
  ]
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/'); // Redirect to admin login page
    handleClose();
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={handleProfileMenuClick}
              sx={{ ml: 2 }}
            >
              <AccountCircle fontSize="large"/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            width: 60,
            boxSizing: 'border-box',
            backgroundColor: '#f7f7f9',  // Updated to white
            color: '#000',  // Text color updated to black
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => handleNavigation('/')} sx={{ backgroundColor: 'transparent' }}>
            <ListItemIcon sx={{ color: '#000' }}><Home /></ListItemIcon>  {/* Icon color updated to black */}
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/Assessment')} sx={{ backgroundColor: 'transparent' }}>
            <ListItemIcon sx={{ color: '#000' }}><LibraryBooks /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/enroll')} sx={{ backgroundColor: 'transparent' }}>
            <ListItemIcon sx={{ color: '#000' }}><School /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/settings')} sx={{ backgroundColor: 'transparent' }}>
            <ListItemIcon sx={{ color: '#000' }}><Settings /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/leaderboard')} sx={{ backgroundColor: 'transparent' }}>
            <ListItemIcon sx={{ color: '#000' }}><Assessment /></ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Today
                </Typography>
                <Line data={data} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Amount
                </Typography>
                <Typography component="p" variant="h4">
                  $3,024.00
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                  on 15 March, 2019
                </Typography>
                <div>
                  <a href="#">Students Enrolled</a>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Recent Orders
                </Typography>
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Payment Method</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>16 Mar, 2019</td>
                      <td>Elvis Presley</td>
                      <td>Tupelo, MS</td>
                      <td>VISA &#x2022;&#x2022;&#x2022;&#x2022; 3719</td>
                      <td>$312.44</td>
                    </tr>
                    <tr>
                      <td>16 Mar, 2019</td>
                      <td>Paul McCartney</td>
                      <td>London, UK</td>
                      <td>VISA &#x2022;&#x2022;&#x2022;&#x2022; 2574</td>
                      <td>$866.99</td>
                    </tr>
                    <tr>
                      <td>16 Mar, 2019</td>
                      <td>Tom Scholz</td>
                      <td>Boston, MA</td>
                      <td>MC &#x2022;&#x2022;&#x2022;&#x2022; 1253</td>
                      <td>$100.81</td>
                    </tr>
                  </tbody>
                </table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;