import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import NoMatch from "./containers/NoMatch";
import NoteCreate from "./containers/notes/Create";
import NotesList from "./containers/notes/List";
import Protected from "./containers/Protected";
import Register from "./containers/Register";

const BaseRouter = () => (
  <div className="router">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/register/" component={Register} />
      <Protected exact path="/notes/" component={NotesList} />
      <Protected exact path="/notes/create/" component={NoteCreate} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default withRouter(BaseRouter);
