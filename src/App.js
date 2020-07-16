import React from 'react';
import { name, version } from '../package.json';
import './App.css';
import recipes from './recipes.json';

const copy = {
  Description: 'Description'
};

const ids = ['risotto-al-salmone'];
const recipe = recipes[ids[0]];

function App() {
  return (
    <main>
      <header className="Header" />
      <article className="Recipe">
        <h1>{recipe.name}</h1>
        <ul className="Meta">
          <li>Cooking time: {recipe.meta.cooking.time}</li>
          <li>Servings: {recipe.meta.servings.number}</li>
        </ul>
        <h2>{copy.Description}</h2>
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul className="Ingredients__list">
          {recipe.ingredients.map(({ name, quantity }, index) => (
            <li key={index}>
              {name} {quantity}
            </li>
          ))}
        </ul>
        <h2>Directions</h2>
        <ul className="Directions__list">
          {recipe.directions.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </article>
      <footer className="Footer">
        {name} v{version}
      </footer>
    </main>
  );
}

export default App;
