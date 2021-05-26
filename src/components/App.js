import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Login  from "./Login/container";
import Signup from "./Signup/container";

import { styles } from "./style";
import "./style.css";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
// import { darkTheme, blueTheme, Theme } from "./../resources/theme";
import { Theme } from "./../resources/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import PrivateRoute from "./common/PrivateRouteContainer";
import PublicRoute from "./common/PublicRouteContainer";


import LoadingSpinner from "./common/ReduxBased/LoadingSpinner/container";

class App extends Component {

  state = {
    isLogin: true,
    selectedTheme: Theme,
  }
  render() {
  
    return (
      <>
          <Router>
            
          </Router>
          <Router>
            
            <MuiThemeProvider theme={Theme}>
              <MuiThemeProvider theme={this.state.selectedTheme}>
              
                <Switch>
   
                    
                    <PublicRoute path={`/login`} component={Login}/>

                </Switch>
                </MuiThemeProvider>
              </MuiThemeProvider>
          </Router>
      </>
    );
  }
}

export default withStyles(styles)(App);
