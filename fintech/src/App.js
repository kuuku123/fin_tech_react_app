import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthResultPage from "./pages/AuthResultPage";
import BalancePage from './pages/BalancePage';
import ListPage from './pages/ListPage';
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage/>
        </Route>
        <Route path="/list" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/balance" exact>
          <BalancePage></BalancePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;