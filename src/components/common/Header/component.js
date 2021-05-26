import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {getAppStoreValue} from "../Helpers";
import Logo from "../../../resources/images/logo.png";

class Header extends Component {
    render() {
        const {
            classes,
            logoutHandler
        } = this.props;

        const userText = getAppStoreValue("userText");

        return (
            <>
                <div className={classes.jobaisliderbg}>
                    <Grid container className={classes.jobaimainwrapper}>
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                            <NavLink
                                        to={'/'}
                                    >
                                <img className={classes.jobaiheaderlogo} src={Logo} alt="" />
                                </NavLink>

                                <div className={classes.jobaiheaderbtn}>
                                    {
                                        userText ? 
                                        <>
                                            <span className={classes.welcometext}>Welcome: {userText}</span> 
                                            
                                            <NavLink
                                            to={'/user'}
                                            ><Button className="needanaccount" variant="outlined" color="primary"  >
                                                    Dashboard
                                                </Button>
                                            </NavLink>
                                            <Button className="signinbtn" variant="outlined" color="primary"  onClick={logoutHandler}>
                                                    Logout
                                            </Button>
                                        </>
                                        : <>
                                        <NavLink
                                            to={'/signup'}
                                            ><Button className="needanaccount" variant="outlined" color="primary"  >
                                                    Need an account ?
                                                </Button>
                                            </NavLink>

                                            <NavLink
                                                to={'/login'}
                                            ><Button className="signinbtn" variant="outlined" color="primary" >
                                                Sign In
                                            </Button>
                                        </NavLink>
                                        </>
                                    }
                                    
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Header);