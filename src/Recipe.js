/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from './recipes.json';
import Tags from './Tags';

const { REACT_APP_CLOUDFRONT_DOMAIN_NAME } = process.env;

const copy = {
  by: 'by',
  'Cooking time': 'Cooking time',
  Description: 'Description',
  Directions: 'Directions',
  Ingredients: 'Ingredients',
  Yield: 'Yield'
};

function Recipe() {
  const { id } = useParams();
  const recipe = recipes[id];

  return (
    <article className="Recipe">
      <h1>{recipe.name}</h1>
      <p className="Heading__small">
        {copy.by} {recipe.author.name}
      </p>
      <img
        alt=""
        className="Recipe__hero"
        src={`${REACT_APP_CLOUDFRONT_DOMAIN_NAME}${recipe.images.hero}`}
      />
      <Tags tags={recipe.tags} />
      <ul className="Meta">
        <li>
          {copy['Cooking time']}: {recipe.meta.cooking.time}
        </li>
        <li>
          {copy.Yield}: {recipe.meta.yield}
        </li>
      </ul>
      <h2>{copy.Description}</h2>
      <p>{recipe.description}</p>
      <h2>{copy.Ingredients}</h2>
      <ul className="Ingredients__list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.quantity} {ingredient.name}
          </li>
        ))}
      </ul>
      <h2>{copy.Directions}</h2>
      <ul className="Directions__list">
        {recipe.directions.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </article>
  );
}

export default Recipe;
