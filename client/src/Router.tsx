import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
function Router(props: any) {
  return (
    <Switch>
      <Route exact path="/" component={UsersPage} />
      <Route path="/:userId" component={UserPage} />
    </Switch>
  );
}
export default Router;
