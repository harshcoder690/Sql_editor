/*
 * Dashboard/Handle Routes
 *
 */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RunQueryPage from '../RunQueryPage'

export default function Dashboard() {
  return (
    <> 
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route exact path="/dashboard" component={RunQueryPage} />
      </Switch>
    </>
  );
}
