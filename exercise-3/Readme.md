# Slugify email

### Usage

```
const {
  slugifyEmail,
} = require('./slugify');

const email = `"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com`;
const result = slugifyEmail(email);

// output = 'very-dot--dot-very-dot-very-at-very-dot-unusual-at-strange-dot-example-dot-com'
```

### Init

```
npm install
```

### Run tests

```
npm run test
```