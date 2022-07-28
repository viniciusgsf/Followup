import React from "react";
import { Switch } from "react-router-dom";

import Route from "./../AppRoutes/Routes";

import Districts from "../../pages/Cadastro/Districts";
import Countries from "../../pages/Cadastro/Countries";
import Nationality from "../../pages/Cadastro/Nationality";
import JobFunctions from "../../pages/Cadastro/JobFunctions";
import Locations from "../../pages/Cadastro/Locations";
import PublicPlace from "../../pages/Cadastro/PublicPlace";
import PhoneTypes from "../../pages/Cadastro/PhoneTypes";
import Profession from "../../pages/Cadastro/Profession";
import ContactForm from "../../pages/Cadastro/ContactForm";
import Segments from "../../pages/Cadastro/Segments";
import Situations from "../../pages/Cadastro/Situations";
import States from "../../pages/Cadastro/States";
import PublicPlaceTypes from "../../pages/Cadastro/PublicPlaceTypes";
import Branch from "../../pages/Cadastro/Branch";
import TreatmentForm from "../../pages/Cadastro/TreatmentForm";
import Reason from "../../pages/Cadastro/Reason";

import AddStates from "../../pages/Cadastro/States/AddState";
import AddCountry from "../../pages/Cadastro/Countries/AddCountry";
import AddPublicPlace from "../../pages/Cadastro/PublicPlace/AddPublicPlace";
import AddLocations from "../../pages/Cadastro/Locations/AddLocations";
import AddDistricts from "../../pages/Cadastro/Districts/AddDistricts";
import AddPublicPlaceType from "../../pages/Cadastro/PublicPlaceTypes/AddPublicPlaceType";
import AddJobFunctions from "../../pages/Cadastro/JobFunctions/AddJobFunctions";
import AddSegments from "../../pages/Cadastro/Segments/AddSegments";
import AddProfessions from "../../pages/Cadastro/Profession/AddProfessions";
import AddSituations from "../../pages/Cadastro/Situations/AddSituations";
import AddContactForm from "../../pages/Cadastro/ContactForm/AddContactForm";
import AddBranch from "../../pages/Cadastro/Branch/AddBranch";
import AddNationality from "../../pages/Cadastro/Nationality/AddNationality";
import AddTreatmentForm from "../../pages/Cadastro/TreatmentForm/AddTreatmentForm";
import AddReason from "../../pages/Cadastro/Reason/AddReason";
import AddPhoneTypes from "../../pages/Cadastro/PhoneTypes/AddPhoneTypes";


const CadastroRoutes: React.FC = ( ) => (
        <Switch>
            <Route path='/districts/add' isPrivate component={AddDistricts} />
            <Route path="/districts"  isPrivate component={Districts} />

            <Route path='/countries/add' isPrivate component={AddCountry} />
            <Route path="/countries"  isPrivate component={Countries} />   

            <Route path="/jobFunctions/add"  isPrivate component={AddJobFunctions} />
            <Route path="/jobFunctions"  isPrivate component={JobFunctions} />

            <Route path='/locations/add' isPrivate component={AddLocations} />
            <Route path="/locations"  isPrivate component={Locations} /> 

            <Route path='/publicPlace/add' isPrivate component={AddPublicPlace} />
            <Route path="/publicPlace"  isPrivate component={PublicPlace} /> 

            <Route path="/nationalities/add"  isPrivate component={AddNationality} />
            <Route path="/nationalities"  isPrivate component={Nationality} />

            <Route path="/phoneTypes/add"  isPrivate component={AddPhoneTypes} />
            <Route path="/phoneTypes"  isPrivate component={PhoneTypes} />

            <Route path="/profession/add"  isPrivate component={AddProfessions} />
            <Route path="/profession"  isPrivate component={Profession} />

            <Route path="/contactForm/add"  isPrivate component={AddContactForm} />
            <Route path="/contactForm"  isPrivate component={ContactForm} />

            <Route path="/segments/add"  isPrivate component={AddSegments} />
            <Route path="/segments"  isPrivate component={Segments} />

            <Route path="/situations/add"  isPrivate component={AddSituations} />
            <Route path="/situations"  isPrivate component={Situations} />

            <Route path='/states/add' isPrivate component={AddStates} />
            <Route path="/states"  isPrivate component={States} />

            <Route path="/publicPlaceTypes/add"  isPrivate component={AddPublicPlaceType} />
            <Route path="/publicPlaceTypes"  isPrivate component={PublicPlaceTypes} />
            
            <Route path="/branch/add"  isPrivate component={AddBranch} />
            <Route path="/branch"  isPrivate component={Branch} />

            <Route path='/treatmentForm/add' isPrivate component={AddTreatmentForm} />
            <Route path="/treatmentForm"  isPrivate component={TreatmentForm} /> 

            <Route path='/reason/add' isPrivate component={AddReason} />
            <Route path="/reason"  isPrivate component={Reason} /> 
              

        </Switch>

);

export default CadastroRoutes;