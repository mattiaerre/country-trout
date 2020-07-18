import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { name, version } from '../package.json';
import './App.css';
import Home from './Home';
import ids from './ids.json';
import Recipe from './Recipe';

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
                  <li key={key}>
                    <Link to={`/${key}`}>{ids[key]}</Link>
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
