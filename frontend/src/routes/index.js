import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Welcome from "../pages/Home";
import NoMatch from "../pages/NoMatch";

const BaseRouter = () => (
  <div className="router">
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default withRouter(BaseRouter);
