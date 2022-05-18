import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Routes";

import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import Dashboard from "../../pages/Dashboard";
import Profile from '../../pages/Profile';
import Homepage from "../../pages/Homepage";
import ForgotPassword from "../../pages/ForgotPassword";
import Settings from "../../pages/Settings";


const AppRoutes: React.FC = ( ) => (
        <Switch>
            <Route path="/signin"  component={SignIn}/>
            <Route path="/signup"  component={SignUp} />
            <Route path="/profile" exact component={Profile} isPrivate />
            <Route path="/" exact component={Dashboard} />
            <Route path="/home" exact component={Homepage} isPrivate />
            <Route path="/forgot-password"  component={ForgotPassword}  />
            <Route path="/settings" component={Settings} isPrivate />
            
        </Switch>

);

export default AppRoutes;