import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" exact>
          <NewsPage></NewsPage> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;