module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        es6: true,
    },
    rules: {
        'max-len': ['warn', 120, 4],
        'quote-props': ['error', 'as-needed'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        'no-underscore-dangle': ['off'],
        semi: ['error', 'never'],

    },
}
