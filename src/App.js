import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Posts from './Posts'
import Author from './Author'
import portfolio from './assets/portfolio.jpg'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


// Menu bar Items
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconHome from 'material-ui/svg-icons/action/home';
import Pages from 'material-ui/svg-icons/social/pages';
import FontIcon from 'material-ui/FontIcon';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'


configureAnchors({offset: -90, scrollDuration: 800})

const styleText = {
  'margin-top': '10%',
'text-align' : 'center'
}
const container = {
  margin: '80px 20px 20px 15px',
  paddingLeft: '200px'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }
  handleChangeRequestNavDrawer = () => {
   this.setState({
     navDrawerOpen: !this.state.navDrawerOpen
   });
 }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = '256px';
    const style = {
      backgroundColor:'rgb(48, 48, 48)',
          minHeight: '100vh',
      paddingRight: 0,
     paddingLeft: 0 ,
      'margin-left': navDrawerOpen ? paddingLeftDrawerOpen : '0px'
    };
    const pageCont = {
        backgroundColor:'#fff',
        marginTop:'5vh',
        marginBottom: '5vh'
    }
    return (

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div style={style} class="container-fluid">
            <AppBar
              titleStyle={{textAlign: "center"}}
              onClick={ this.handleChangeRequestNavDrawer }
            />
          <Router>
            <div class="row col-xs-12 around-xs  around-md">
                <div class="col-xs-9 col-md-9 " style={pageCont}>
                  <Drawer
                    docked={true}
                    open={navDrawerOpen}>
                    <AppBar   titleStyle={{flex:'0'}} showMenuIconButton={false}>

                      <ListItem
                        disabled={true}
                        leftAvatar={<Avatar src={portfolio} />}>
                        git-srinivas
                      </ListItem>

                    </AppBar>

                    <MenuItem
                      containerElement={<NavLink to="/" />}
                      leftIcon={<IconHome />}>Home</MenuItem>
                    <MenuItem
                      containerElement={<NavLink to="/posts"/>}
                      leftIcon={<Pages />}>Posts</MenuItem>
                    <MenuItem
                      containerElement={<NavLink to="/author"/>}
                      leftIcon={<AccountCircle />}>Author</MenuItem>
                  </Drawer>

                  <Route  exact path="/" component={Home}/>
                  <Route   path="/posts" component={Posts}/>
                  <Route   path="/Author" component={Author}/>
                </div>
            </div>
            {/* <div class="routerContainer">

              </div> */}
          </Router>

          </div>
        </MuiThemeProvider>


    );
  }
}

export default withWidth()(App);




          {/* handleAbout = ()=>{
            goToAnchor('about',false)
            }
            handleSkills = ()=>{
            goToAnchor('skills', false)
            }
            handleProjects = ()=>{
            goToAnchor('projects', false)
            }
            handleContact = ()=>{
            goToAnchor('contact', false)
          } */}

          {/* <div style={style}>
            <ScrollableAnchor id={'about'}>
            <div style={{height:'500px'}}>
            <h1>About</h1>

            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'skills'}>
            <div style={{height:'500px'}}>
            <h1>Skills</h1>
            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects'}>
            <div style={{height:'500px'}}>
            <h1>Projects</h1>
            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
            <div style={{height:'600px'}}>
            <h1>Contact</h1>
            </div>
            </ScrollableAnchor>
          </div> */}
          {/* <Avatar
            src={portfolio}
            size={150}
            style={{'margin-top':'5%','margin-bottom':'5%'}}
            ></Avatar>
            titleStyle={{flex:'0'}}
            showMenuIconButton={false}
          */}

          {/* <MenuItem onClick={this.handleSkills}>Skills</MenuItem>
          <MenuItem onClick={this.handleContact}>Contact</MenuItem> */}
