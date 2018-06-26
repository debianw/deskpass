# Available intervals

### Usage

```
const {
  availableIntervalTimes,
} = require('./available-time');

const unavailableTimes = [
  { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
  { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
];

const availableTimes = availableIntervalTimes("2018-06-22T08:00:00.000Z", "2018-06-22T17:00:00.000Z", unavailableTimes);
```

### Init

```
npm install
```

### Run tests

```
npm run test
```