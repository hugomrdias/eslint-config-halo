'use strict';

module.exports = {
    env: {
        'browser': true,
        'commonjs': true,
        'node': true
    },
    extends: 'eslint:recommended',
    rules: {
        // Possible Errors
        'comma-dangle': [2, 'never'],
        'no-cond-assign': 2,
        'no-console': 1,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-jsdoc': 0,
        'valid-typeof': 2,
        'no-unexpected-multiline': 0,
        // Best Practices
        'accessor-pairs': 0,
        'block-scoped-var': 2,
        'complexity': [0, 11],
        'consistent-return': 0,
        'curly': [2, 'all'],
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        'eqeqeq': [2, 'smart'],
        'guard-for-in': 2,
        'no-alert': 1,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-label': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-param-reassign': 0,
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 2,
        'wrap-iife': [2, 'inside'],
        'yoda': 2,

        // Strict Mode
        'strict': [2, 'global'],

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 0,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': 2,
        'no-use-before-define': [2, 'nofunc'],

        // Node.js CommonJS
        // disabled because of https://github.com/eslint/eslint/issues/3420
        // 'callback-return': [1, ['cb', 'callback', 'next', 'done']],
        'global-require': 1,
        'handle-callback-err': 1,
        'no-mixed-requires': [1, {
            'grouping': true
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0,

        // Stylistic Issues
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': 0,
        'brace-style': [2, '1tbs', {
            'allowSingleLine': false
        }],
        'camelcase': [2, {
            'properties': 'always'
        }],
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'self'],
        'eol-last': 2,
        'func-names': 0,
        'func-style': [0, 'declaration'],
        'id-length': [0, {
            'min': 2,
            'properties': 'never',
            'exceptions': ['x', 'y', 'z', 'm', '_']
        }],
        'id-match': 0,
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'jsx-quotes': 0,
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'minimum'
        }],
        'lines-around-comment': 0,
        'linebreak-style': [2, 'unix'],
        'max-nested-callbacks': [1, 4],
        'new-cap': 2,
        'new-parens': 2,
        'newline-after-var': [2, 'always'],
        'no-array-constructor': 2,
        'no-continue': 2,
        'no-inline-comments': 2,
        'no-lonely-if': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {
            'max': 1
        }],
        'no-nested-ternary': 2,
        'no-negated-condition': 2,
        'no-new-object': 2,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': [2, 'never'],
        'one-var': [2, 'never'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [2, 'single'],
        'require-jsdoc': 0,
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
        'semi': [2, 'always'],
        'sort-vars': 0,
        'space-after-keywords': [2, 'always'],
        'space-before-keywords': [2, 'always'],
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, {
            'anonymous': 'never',
            'named': 'never'
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-return-throw-case': 2,
        'space-unary-ops': 2,
        'spaced-comment': [2, 'always', {
            'exceptions': ['*']
        }],
        'wrap-regex': 0,

        // ECMAScript 6
        'arrow-body-style': [0, 'always'],
        'arrow-parens': 0,
        'arrow-spacing': 0,
        'constructor-super': 0,
        'generator-star-spacing': 0,
        'no-arrow-condition': 2,
        'no-class-assign': 0,
        'no-const-assign': 0,
        'no-dupe-class-members': 0,
        'no-this-before-super': 0,
        'no-var': 0,
        'object-shorthand': 0,
        'prefer-arrow-callback': 0,
        'prefer-const': 0,
        'prefer-spread': 0,
        'prefer-reflect': 0,
        'prefer-template': 0,
        'require-yield': 0,


        // Legacy
        'max-depth': [0, 4],
        'max-len': [0, 80, 4],
        'max-params': [0, 3],
        'max-statements': [0, 10],
        'no-bitwise': 0,
        'no-plusplus': 0,

        // New stuff not yet in the docs
        'no-empty-pattern': 0,
        'no-magic-numbers': 0
    }
}
