import React from "react";
import { Switch } from "react-router-dom";

import Route from "./../AppRoutes/Routes";

import Bairros from "../../pages/Cadastro/Bairros";
import BusinessPlan from "../../pages/Cadastro/BusinessPlan";
import Countries from "../../pages/Cadastro/Countries";
import Estagios from "../../pages/Cadastro/Estagios";
import Fonts from "../../pages/Cadastro/Fonts";
import Functions from "../../pages/Cadastro/Functions";
import Locals from "../../pages/Cadastro/Locals";
import Logradouros from "../../pages/Cadastro/Logradouros";
import Nationalities from "../../pages/Cadastro/Nationalities";
import PhoneTypes from "../../pages/Cadastro/PhoneTypes";
import Profession from "../../pages/Cadastro/Profession";
import Ramos from "../../pages/Cadastro/Ramos";
import Segments from "../../pages/Cadastro/Segments";
import Situations from "../../pages/Cadastro/Situations";
import States from "../../pages/Cadastro/States";
import SubFonts from "../../pages/Cadastro/SubFonts";
import TiposLogradouro from "../../pages/Cadastro/TiposLogradouro";
import TreatmentForm from "../../pages/Cadastro/TreatmentForm";

const CadastroRoutes: React.FC = ( ) => (
        <Switch>
            <Route path="/bairros"  isPrivate component={Bairros} />
            <Route path="/businessPlan"  isPrivate component={BusinessPlan} />
            <Route path="/countries"  isPrivate component={Countries} /> 
            <Route path="/estagios"  isPrivate component={Estagios} /> 
            <Route path="/fonts"  isPrivate component={Fonts} /> 
            <Route path="/functions"  isPrivate component={Functions} /> 
            <Route path="/locals"  isPrivate component={Locals} /> 
            <Route path="/logradouros"  isPrivate component={Logradouros} /> 
            <Route path="/nationalities"  isPrivate component={Nationalities} />
            <Route path="/phoneTypes"  isPrivate component={PhoneTypes} />
            <Route path="/profession"  isPrivate component={Profession} />
            <Route path="/ramos"  isPrivate component={Ramos} />
            <Route path="/segments"  isPrivate component={Segments} />
            <Route path="/situations"  isPrivate component={Situations} />
            <Route path="/states"  isPrivate component={States} />
            <Route path="/subFonts"  isPrivate component={SubFonts} />
            <Route path="/tiposLogradouro"  isPrivate component={TiposLogradouro} />
            <Route path="/treatmentForm"  isPrivate component={TreatmentForm} />

              

        </Switch>

);

export default CadastroRoutes;