# Slugify email

### Usage

```
const {
  slugifyEmail,
} = require('./slugify');

const email = `"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com`;
const result = slugifyEmail(email);
```

### Init

```
npm install
```

### Run tests

```
npm run test
```