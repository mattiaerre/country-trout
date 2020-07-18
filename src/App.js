import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { name, version } from '../package.json';
import './App.css';
import Home from './Home';
import ids from './ids.json';
import Recipe from './Recipe';

const { REACT_APP_CLOUDFRONT_DOMAIN_NAME } = process.env;

function App() {
  return (
    <Router>
      <main className="App">
        <header className="Header">
          <Link to="/">[/]</Link>
        </header>
        <Switch>
          <Route path="/:id">
            <Recipe />
          </Route>
          <Route path="/">
            <nav className="Nav">
              <ul>
                {Object.keys(ids).map((key) => (
                  <li className="Nav__item" key={key}>
                    <img
                      alt=""
                      className="Nav__hero"
                      src={`${REACT_APP_CLOUDFRONT_DOMAIN_NAME}${ids[key].hero}`}
                    />
                    <Link to={`/${key}`}>{ids[key].name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Home />
          </Route>
        </Switch>
        <footer className="Footer">
          {name} v{version}
        </footer>
      </main>
    </Router>
  );
}

export default App;
