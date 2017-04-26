module.exports = {
    extends: ['./react.js'],

    rules: {
        'react/no-unknown-property': [2, { ignore: ['class'] }],
        'react/prop-types': 0
    }
};
