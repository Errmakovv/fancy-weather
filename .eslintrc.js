module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "no-undef": 0,
        "no-mixed-operators": 0,
        "max-len": 0,
        "no-unused-vars": 0,
        "object-curly-newline": 0,
        "import/prefer-default-export": 0,
        "new-cap": 0,
    }
};