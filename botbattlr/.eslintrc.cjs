module.exports = {
  // Root ESLint configuration
  root: true,
  // Specify environments
  env: { browser: true, es2020: true },
  // Extend recommended ESLint configurations
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // Add JSX runtime plugin for React JSX support
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // Ignore patterns for files/directories that don't need linting
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // Specify parser options
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // Settings specific to React
  settings: { react: { version: '18.2' } },
  // Specify plugins
  plugins: ['react-refresh'],
  // Define custom rules
  rules: {
    // Disable the rule prohibiting target="_blank" in JSX
    'react/jsx-no-target-blank': 'off',
    // Warn if only exporting components with React Refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Add more rules as needed
  },
};