import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { name, version } from '../package.json';
import './App.css';
import Recipe from './Recipe';

const copy = {
  Home: 'Home'
};

const ids = {
  'butternut-squash-lasagna': 'Butternut Squash Lasagna'
};

function App() {
  return (
    <Router>
      <main className="App">
        <header className="Header" />
        <Switch>
          <Route path="/:id">
            <nav className="Nav">
              <ul>
                <li>
                  <Link to="/">{copy.Home}</Link>
                </li>
              </ul>
            </nav>
            <Recipe />
          </Route>
          <Route path="/">
            <nav className="Nav">
              <ul>
                {Object.keys(ids).map((key) => (
                  <li key={key}>
                    <Link to={`/${key}`}>{ids[key]}</Link>
                  </li>
                ))}
              </ul>
            </nav>
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
