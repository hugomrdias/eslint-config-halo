# eslint-config-halo [![NPM Version](https://img.shields.io/npm/v/eslint-config-halo.svg)](https://www.npmjs.com/package/eslint-config-halo) [![NPM Downloads](https://img.shields.io/npm/dt/eslint-config-halo.svg)](https://www.npmjs.com/package/eslint-config-halo) [![NPM License](https://img.shields.io/npm/l/eslint-config-halo.svg)](https://www.npmjs.com/package/eslint-config-halo) 
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Halo   

This is for advanced users.

## Note to self

keep eslint peer dep in the last version with new rules or options we support!

## Install

```
$ yarn add eslint eslint-config-halo --dev
```

## Usage

Add some ESLint config to your `package.json`:

```
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

Install [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```json
{
    "editor.formatOnType": true,
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true,
    "prettier.printWidth": 80,
    "prettier.tabWidth": 4,
    "prettier.useTabs": false,
    "prettier.semi": true,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.bracketSpacing": true,
    "prettier.jsxBracketSameLine": false,
    "prettier.cssEnable": [],
}
```

Use the default settings for vscode-eslint and these to auto format using prettier and eslint.

## Related

- [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) - ESLint recommended rules
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Prettier plugin
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ESlint plugin

## License

MIT © [Hugo Dias](http://hugodias.me)
