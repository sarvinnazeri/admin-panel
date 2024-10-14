'use client';
import * as React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, CssBaseline, Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Input } from '@mui/material';
import { Home, Settings, Add, People, BarChart, PersonAdd, ExitToApp, ShoppingCart, Menu as MenuIcon, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function AdminPanel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pageTitle, setPageTitle] = React.useState('Home');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handlePageChange = (text) => {
    setPageTitle(text);
  };

  const getIcon = (text) => {
    switch (text) {
      case 'Home':
        return <Home />;
      case 'Create Users':
        return <Add />;
      case 'Users':
        return <People />;
      case 'Settings':
        return <Settings />;
      case 'Charts':
        return <BarChart />;
      case 'Products':
        return <ShoppingCart />;
      case 'Log Out':
        return <ExitToApp />;
      default:
        return <Home />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {pageTitle}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: theme.spacing(0, 1), ...theme.mixins.toolbar }}>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
        <Box sx={{ overflow: 'hidden' }}>
          <Input id="my-input" aria-describedby="my-helper-text" placeholder='search' sx={{ pl: 2, mb: 2, ml: 2, display: open ? 'block' : 'none' }} />
          <List>
            {['Home', 'Create Users', 'Users', 'Charts', 'Products', 'Log Out'].map((text) => (
              <ListItem button key={text} component="a" href={text === 'Log Out' ? `/login` : `/components/${text.replace(' ', '').toLowerCase()}`} onClick={() => handlePageChange(text)}>
                <ListItemIcon>
                  {getIcon(text)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: open ? `${drawerWidth}px` : 0,
        }}
      >
        <Box sx={{ ...theme.mixins.toolbar }} />
      </Box>
    </Box>
  );
}









