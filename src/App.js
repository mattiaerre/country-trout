import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { name, version } from '../package.json';
import './App.css';
import Recipe from './Recipe';

const ids = { 'risotto-al-salmone': 'Risotto al salmone' };

function App() {
  return (
    <Router>
      <main>
        <header className="Header" />
        <nav className="Nav">
          <ul>
            {Object.keys(ids).map((key) => (
              <li key={key}>
                <Link to={`/${key}`}>{ids[key]}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          <Route path="/:id">
            <Recipe />
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
