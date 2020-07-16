/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from './recipes.json';

const copy = {
  Description: 'Description'
};

function Recipe() {
  const { id } = useParams();
  const recipe = recipes[id];

  return (
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
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} {ingredient.quantity}
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
  );
}

export default Recipe;