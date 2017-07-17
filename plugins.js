module.exports = {
    plugins: ['import', 'no-use-extend-native', 'promise', 'unicorn'],
    extends: [
        './index.js',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended'
    ],
    rules: {
        'no-use-extend-native/no-use-extend-native': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': ['error', { js: 'never' }],
        'import/first': 'error',
        'import/named': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/no-absolute-path': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/newline-after-import': 'error',
        'import/no-amd': 'error',
        'import/no-duplicates': 'error',
        // Enable this sometime in the future when Node.js has ES2015 module support
        // 'import/unambiguous': 'error',
        // Enable this sometime in the future when Node.js has ES2015 module support
        // 'import/no-commonjs': 'error',
        // Looks useful, but too unstable at the moment
        // 'import/no-deprecated': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'warn',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/no-unresolved': ['error', { commonjs: true }],
        'import/order': 'warn',
        'import/prefer-default-export': 'warn',
        'import/no-unassigned-import': 'error'
    }
};
