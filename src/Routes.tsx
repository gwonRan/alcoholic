import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import CheckReviewList from "./pages/CheckReviewList/CheckReviewList";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/checkReviewList" component={CheckReviewList} />
      </Switch>
    </Router>
  );
};

export default Routes;
