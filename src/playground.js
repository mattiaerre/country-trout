const slugify = require('slugify');

const recipes = require('./recipes.json');

// console.log(slugify('Risotto al salmone', { lower: true }));

console.log(slugify('Butternut Squash Lasagna', { lower: true }));

const _ = Object.keys(recipes).reduce((accumulator, current) => {
  return new Set([...accumulator, ...recipes[current].tags]);
}, new Set());

console.log(Array.from(_).sort());
