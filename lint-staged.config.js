module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'tsc --noEmit',

  // Lint then format our styles
  '**/*.(s*css)': ['stylelint --fix'],

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': ['eslint --fix'],

  // Format MarkDown and JSON
  '**/*.(md|json)': ['prettier --write'],
};
