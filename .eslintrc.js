
module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules:{
    "extends": [
      "react-app",
      "react-app/jest",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"]
  },
};
