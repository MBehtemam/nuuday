module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: ["react", "react-hooks", "react-redux", "prettier"],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: "16.8"
    }
  },
  globals: {
    window: true,
    document: true
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-key": "error",
    "react/no-unescaped-entities": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-redux/prefer-separate-component-file": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-unpublished-require": "off",
    "array-callback-return": "error",
    "no-implicit-globals": "error",
    camelcase: "error",
    eqeqeq: "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-unused-expressions": "error",
    "no-var": "error",
    "prefer-const": "error"
  }
};
