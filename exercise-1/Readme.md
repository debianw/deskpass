# Strip quotes from a string

### Usage

```
const {
  stripQuotes
} = require('./strip-quotes');

const str = `sdf'sdfsdf'sdf\"s sdf sdf 'sdf '' dfsdf'`;
const result = stripQuotes(str);

// output = 'sdfsdfsdfsdfs sdf sdf sdf  dfsdf'
```

### Init

```
npm install
```

### Run tests

```
npm run test
```