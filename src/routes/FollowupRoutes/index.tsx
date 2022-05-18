import React from "react";
import { Switch } from "react-router-dom";

import Route from "./../AppRoutes/Routes";

import ContactMotives from '../../pages/FollowUp/ContactMotives';
import ContactWays from '../../pages/FollowUp/ContactWays';

const FollowupRoutes: React.FC = ( ) => (
        <Switch>
            <Route path="/contactmotives" isPrivate component={ContactMotives}/>
            <Route path="/contactways" isPrivate component={ContactWays} />
        </Switch>

);

export default FollowupRoutes;