import React from "react";
import { Switch } from "react-router-dom";

import Route from "./../AppRoutes/Routes";

import ContactMotives from '../../pages/FollowUp/ContactMotives';
import AddContactForm from "../../pages/Cadastro/ContactForm/AddContactForm";
import ContactForm from "../../pages/Cadastro/ContactForm";

const FollowupRoutes: React.FC = ( ) => (
        <Switch>
            <Route path="/contactmotives" isPrivate component={ContactMotives}/>
            
            <Route path="/contactForm/add"  isPrivate component={AddContactForm} />
            <Route path="/contactForm"  isPrivate component={ContactForm} />
        </Switch>

);

export default FollowupRoutes;