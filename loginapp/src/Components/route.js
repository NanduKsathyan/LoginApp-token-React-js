import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Login';
import DisplayData from './DisplayData';
const Router=()=>{
return(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/dispay" component={DisplayData}/>
    </Switch>
    
    </BrowserRouter>)

}
export default Router;