import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthResultPage from './pages/AuthResultPage';
import MainPage from './pages/MainPage';
import NewsPage from "./pages/NewsPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main" exact>
          <MainPage></MainPage>
        </Route>
        <Route path="/news" exact>
          <NewsPage></NewsPage> 
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage></AuthResultPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;