module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "cypress/globals": true,
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:cypress/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "testing-library",
        "cypress",
    ],
    "rules": {
        "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": true }],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".ts"] }],
        "react/prop-types": "off",
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debugging-utils": "warn",
        "testing-library/no-dom-import": "off",
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error"
    },
    "ignorePatterns": [".eslintrc.js"],
};