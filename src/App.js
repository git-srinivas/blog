import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Posts from './Posts'
import Author from './Author'
import portfolio from './assets/portfolio.jpg'
import  lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
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
//LIsts
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

//Posts
import AngularPosts from './AngularPosts'
import NodePosts from './NodePosts'
import JsPosts from './JsPosts'
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
      // backgroundColor:'rgb(48, 48, 48)',
      backgroundColor:'#f9fbfb',
          minHeight: '100vh',
      paddingRight: 0,
     paddingLeft: 0 ,
      'margin-left': navDrawerOpen ? paddingLeftDrawerOpen : '0px'
    };
    const pageCont = {
        backgroundColor:'#f9fbfb',
        marginTop:'15vh',
        marginBottom: '5vh'
    }
    return (

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div style={style} class="container-fluid">
            <AppBar
              titleStyle={{textAlign: "center"}}
              style={{position:'fixed'}}
              // title="Learning Awsome"
              onClick={ this.handleChangeRequestNavDrawer }
            />
            <Router>
              <div class="row col-xs-12 around-xs  around-md" >
                <div class="col-xs-9 col-md-9 " style={pageCont}>
                  <Drawer
                    docked={true}
                    open={navDrawerOpen}>
                    <AppBar
                      title="Learning Awsome"
                      showMenuIconButton={false}
                      titleStyle={{fontWeight:300}}>
                      {/* titleStyle={{flex:'0'}}  */}

                      {/* <ListItem
                        disabled={true}
                        leftAvatar={<Avatar src={portfolio} />}
                        >
                        git-srinivas
                      </ListItem> */}

                    </AppBar>

                    {/* <MenuItem
                      containerElement={<NavLink to="/" />}
                      leftIcon={<IconHome />}>Home</MenuItem>
                      <MenuItem
                      containerElement={<NavLink to="/posts"/>}
                      leftIcon={<Pages />}>Posts</MenuItem>
                      <MenuItem
                      containerElement={<NavLink to="/author"/>}
                    leftIcon={<AccountCircle />}>Author</MenuItem> */}
                    <List>
                      <Subheader>Nested List Items</Subheader>
                      <ListItem
                        primaryText="Home"
                        leftIcon={<IconHome />}
                        containerElement={<NavLink to="/" />}
                      />

                      <ListItem
                        primaryText="Posts"
                        leftIcon={<Pages />}
                        // containerElement={<NavLink to="/posts"/>}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                          <ListItem
                            key={1}
                            primaryText="Javascript"
                            leftIcon={<ActionGrade />}
                            containerElement={<NavLink to="/js"/>}
                          />,
                          <ListItem
                            key={2}
                            primaryText="AngularJs"
                            leftIcon={<ContentSend />}
                            containerElement={<NavLink to="/angular"/>}
                          />,
                          <ListItem
                            key={3}
                            primaryText="NodeJs"
                            leftIcon={<ContentInbox />}
                            containerElement={<NavLink to="/node"/>}
                          />,
                        ]}
                      />
                      <ListItem
                        primaryText="Author"
                        leftIcon={<AccountCircle />}
                        containerElement={<NavLink to="/author"/>}
                      />
                    </List>
                  </Drawer>

                  <Route  exact path="/" component={Home}/>
                  <Route   path="/angular" component={AngularPosts}/>
                  <Route   path="/node" component={NodePosts}/>
                  <Route   path="/js" component={JsPosts}/>
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
