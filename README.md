# eslint-config-halo [![NPM Version](https://img.shields.io/npm/v/eslint-config-halo.svg)](https://www.npmjs.com/package/eslint-config-halo) [![NPM Downloads](https://img.shields.io/npm/dt/eslint-config-halo.svg)](https://www.npmjs.com/package/eslint-config-halo) [![NPM License](https://img.shields.io/npm/l/eslint-config-halo.svg)](https://www.npmjs.com/package/eslint-config-halo) 
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Halo   

This is for advanced users.


## Install

```
$ yarn add eslint eslint-config-halo --dev
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
    "name": "my-awesome-project",
    "eslintConfig": {
        "parser": "babel-eslint", // optional only if you need future js features
        "extends": "halo"
    }
}
```
Note: babel-eslint is way slower. Right now i need this for class properties initializers for auto bind callbacks in react.

Or to `.eslintrc`:

```json
{
    "extends": "halo"
}
```

## Configs available   

```
halo // eslint only rules
halo:plugins // extends above and adds couple of plugins 
halo:react // extends above and adds react support
halo:preact // extends above overrides some rules for preact
```

## Visual Studio Code 

Install [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier-eslint-vscode](https://marketplace.visualstudio.com/items?itemName=RobinMalfait.prettier-eslint-vscode)

```json
{
    "prettier.printWidth": 80,
    "prettier.tabWidth": 4,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.bracketSpacing": true,
    "prettier.jsxBracketSameLine": false,
    "prettier.semi": true,
    "prettier.useTabs": false
}
```

vscode-eslint config should be the default this will make vscode-eslint highlight problems and prettier-eslint-vscode format on save

## Related

- [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) - ESLint recommended rules
- [prettier-eslint-vscode](https://marketplace.visualstudio.com/items?itemName=RobinMalfait.prettier-eslint-vscode) Prettier ESlint plugin
- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ESlint plugin

## License

MIT © [Hugo Dias](http://hugodias.me)
