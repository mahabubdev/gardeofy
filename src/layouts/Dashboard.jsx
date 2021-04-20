import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
// context
import { useAuthHook } from '../context/auth';
import { Link, useHistory } from 'react-router-dom';





// const GetContext = () => {
//   const context = useAuthHook();
//   return context;
// }



const MainListItemsAdmin = (
  <List>
    <Link to='/dashboard'>
        <ListItem button>
        <ListItemIcon>
            <DashboardIcon />
                </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
    </Link>

    <Link to='/dashboard/orders'>
        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
    </Link>

    <Link to='/dashboard/services'>
      <ListItem button>
          <ListItemIcon>
              <ViewModuleIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Services" />
        </ListItem>
      </Link>
      <Link to='/dashboard/services/add'>
        <ListItem button>
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Service" />
        </ListItem>
      </Link>
  </List>
);


const MainListItemsUser = (
  <List>
      <Link to='/dashboard'>
          <ListItem button>
          <ListItemIcon>
              <DashboardIcon />
                  </ListItemIcon>
              <ListItemText primary="Dashboard" />
          </ListItem>
      </Link>

      <Link to='/dashboard/orders'>
          <ListItem button>
              <ListItemIcon>
                  <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
          </ListItem>
      </Link>

      <Link to='/dashboard/review'>
        <ListItem button>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <ListItemText primary="Review" />
        </ListItem>
      </Link>
  </List>
);



const CommonFooterMenu = () => {

  let history = useHistory();

  return(<List>
      <ListItem button onClick={
        () => history.replace('/')
      }>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
</List>)
}







const drawerWidth = 300;

// useStyles for Material-UI
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));


















// DASHBOARD component
function DashboardUI ({ children }) {

    // context:state
    const { logoutUser, user } = useAuthHook();

    // material-ui classes
    const classes = useStyles();
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    // states
    const [open, setOpen] = useState(false);
    // handle open
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);


    // return component
    return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>


          <Button variant="contained" color="secondary" onClick={logoutUser}><ExitToAppIcon /> logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {
          user && user.role === 'customer' ? (MainListItemsUser) : (MainListItemsAdmin)
        }
        <Divider />
        <List><CommonFooterMenu /></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          { children }
        </Container>
      </main>
    </div>
    );
}









function DashboardLayout ({ children }) {
    return (
        <>
            <DashboardUI children={children} />
        </>
    )
}

export default DashboardLayout;