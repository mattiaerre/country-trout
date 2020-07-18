const fs = require('fs');
const slugify = require('slugify');
const recipes = require('./recipes.json');

const names = [
  'Butternut Squash Lasagna',
  'Cilantro Lime Rice',
  'Fresh Guacamole',
  'Jicama "Taco Shells"',
  'Tomatillo Salsa Verde'
];

names.forEach((name) => {
  console.log(`${name}:`, slugify(name, { lower: true, remove: '"' }));
});

const { WRITE } = process.env;

if (WRITE) {
  const ids = Object.keys(recipes)
    .sort()
    .reduce((accumulator, current) => {
      if (current !== 'empty') {
        accumulator[current] = recipes[current].name;
      }
      return accumulator;
    }, {});

  fs.writeFileSync('src/ids.json', JSON.stringify(ids, null, 2));

  const tags = Object.keys(recipes).reduce((accumulator, current) => {
    if (current !== 'empty') {
      return new Set([...accumulator, ...recipes[current].tags]);
    }
    return accumulator;
  }, new Set());

  fs.writeFileSync(
    'src/tags.json',
    JSON.stringify(Array.from(tags).sort(), null, 2)
  );
}
