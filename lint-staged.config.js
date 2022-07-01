module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '*.(ts|tsx|js|jsx)': ['eslint --fix', 'eslint'],

  // Format MarkDown and JSON
  '*.(md|json)': ['prettier --write'],
};
