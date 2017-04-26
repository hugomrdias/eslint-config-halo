String.prototype.shortHash = function() {
    return this.substring(0, 7);
};
Object.defineProperty(Array.prototype, 'times', { value: 999 });

const colors = require('colors');

console.log('unicorn'.green);
// => ESLint will give an error stating 'Avoid using extended native objects'

[].customFunction();
// => ESLint will give an error stating 'Avoid using extended native objects'

'50bda47b09923e045759db8e8dd01a0bacd97370'.shortHash() === '50bda47';
