import HomeManagement from "./Page/HomeManagement/HomeManagement";
import Setting from "./Page/Setting";
import React from "react";
import BaseLayout from "./component/BaseLayout";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomeManagement} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </BaseLayout>
    </Router>
  );
};

export default App;
