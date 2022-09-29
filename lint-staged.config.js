module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'tsc --noEmit',

  // Lint then format our styles
  '**/*.(scss)': ['stylelint --fix'],

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': ['eslint --fix'],

  // Format MarkDown and JSON
  '**/*.(ts|tsx|js|scss|md|json)': ['prettier --write'],
};
