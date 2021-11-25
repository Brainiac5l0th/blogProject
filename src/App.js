import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import Body from "./components/Body";
import CreateNew from './components/CreateNew';
import Header from "./components/Header";
import NotFound from './components/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Body/>
            </Route>
            <Route path="/create-new">
              <CreateNew/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
