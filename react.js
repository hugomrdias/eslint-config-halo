module.exports = {
    plugins: ['react'],

    extends: ['./plugins.js', 'plugin:react/recommended'],

    rules: {
        'react/jsx-no-bind': 2,
        'react/no-did-update-set-state': 2,
        'import/no-unassigned-import': 0,
        'react/prop-types': 1
    }
};
