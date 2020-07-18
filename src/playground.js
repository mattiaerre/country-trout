const fs = require('fs');
const slugify = require('slugify');

const recipes = require('./recipes.json');

const names = ['Butternut Squash Lasagna', 'Risotto al salmone'];

names.forEach((name) => {
  console.log(`${name}:`, slugify(name, { lower: true }));
});

if (false) {
  const all = Object.keys(recipes).reduce((accumulator, current) => {
    if (current !== 'empty') {
      return new Set([...accumulator, ...recipes[current].tags]);
    }
    return accumulator;
  }, new Set());

  fs.writeFileSync(
    'src/tags.json',
    JSON.stringify(Array.from(all).sort(), null, 2)
  );
}
