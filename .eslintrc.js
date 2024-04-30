// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/library.js', 'plugin:storybook/recommended'],
  ignorePattern: ['apps/**', 'packages/**'],
};
