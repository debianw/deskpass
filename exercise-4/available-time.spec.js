//
const should = require('chai').should();

const {
  sortIntervalTimes,
  castIntervalToDate,
  castIntervalToString,
  availableIntervalTimes,
} = require('./available-time');

//
describe('Available invertal time', function () {

  //
  it('should cast interval of times', function () {
    const interval = castIntervalToDate([{ start: "2018-06-22T14:00:00", end: "2018-06-22T16:00:00" }]);

    interval[0].start.getTime().should.equal(1529697600000);
  });

  //
  it('should sort interval of times', function () {
    const times = sortIntervalTimes([
      { start: "2018-06-22T14:00:00", end: "2018-06-22T16:00:00" },
      { start: "2018-06-22T18:00:00", end: "2018-06-22T20:00:00" },
      { start: "2018-06-22T09:00:00", end: "2018-06-22T10:00:00" },
    ]);

    times[0].start.should.equal('2018-06-22T09:00:00');
    times[1].start.should.equal('2018-06-22T14:00:00');
    times[2].start.should.equal('2018-06-22T18:00:00');
  });

  //
  it('clean out of range', function () {
    const unavailableTimes = [
      { start: "2018-06-22T06:00:00.000Z", end: "2018-06-22T08:00:00.000Z" },
      { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
      { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
      { start: "2018-06-22T17:00:00.000Z", end: "2018-06-22T20:00:00.000Z" },
      { start: "2018-06-22T23:00:00.000Z", end: "2018-06-22T24:00:00.000Z" },
    ];
  });

  //
  it('should return an interval of available times, case #1', function () {
    const unavailableTimes = [
      { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
      { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
    ];

    const availableTimes = availableIntervalTimes("2018-06-22T08:00:00.000Z", "2018-06-22T17:00:00.000Z", unavailableTimes);

    castIntervalToString(availableTimes).should.be.deep.equal([
      {
        "start": "2018-06-22T08:00:00.000Z",
        "end": "2018-06-22T09:00:00.000Z",
      },
      {
        "start": "2018-06-22T10:00:00.000Z",
        "end": "2018-06-22T14:00:00.000Z",
      },
      {
        "start": "2018-06-22T16:00:00.000Z",
        "end": "2018-06-22T17:00:00.000Z",
      }
    ]);
  });

  it('should return an interval of available times, case #2', function () {
    const unavailableTimes = [
      { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
      { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
    ];

    const availableTimes = availableIntervalTimes("2018-06-22T10:00:00.000Z", "2018-06-22T17:00:00.000Z", unavailableTimes);

    castIntervalToString(availableTimes).should.be.deep.equal([
      {
        "start": "2018-06-22T10:00:00.000Z",
        "end": "2018-06-22T14:00:00.000Z",
      },
      {
        "start": "2018-06-22T16:00:00.000Z",
        "end": "2018-06-22T17:00:00.000Z",
      }
    ]);
  });

  it('should return an interval of available times, case #3', function () {
    const unavailableTimes = [
      { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
      { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
    ];

    const availableTimes = availableIntervalTimes("2018-06-22T08:00:00.000Z", "2018-06-22T15:00:00.000Z", unavailableTimes);

    castIntervalToString(availableTimes).should.be.deep.equal([
      {
        "start": "2018-06-22T08:00:00.000Z",
        "end": "2018-06-22T09:00:00.000Z",
      },
      {
        "start": "2018-06-22T10:00:00.000Z",
        "end": "2018-06-22T14:00:00.000Z",
      },
    ]);
  });

  //
  it('should return an interval of available times, case #4', function () {
    const unavailableTimes = [
      { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
      { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
    ];

    const availableTimes = availableIntervalTimes("2018-06-22T10:30:00.000Z", "2018-06-22T17:00:00.000Z", unavailableTimes);

    castIntervalToString(availableTimes).should.be.deep.equal([
      {
        "start": "2018-06-22T10:30:00.000Z",
        "end": "2018-06-22T14:00:00.000Z",
      },
      {
        "start": "2018-06-22T16:00:00.000Z",
        "end": "2018-06-22T17:00:00.000Z",
      }
    ]);
  });

  //
  it('should return an interval of available times, case #5', function () {
    const unavailableTimes = [
      { start: "2018-06-22T09:00:00.000Z", end: "2018-06-22T10:00:00.000Z" },
      { start: "2018-06-22T14:00:00.000Z", end: "2018-06-22T16:00:00.000Z" },
    ];

    const availableTimes = availableIntervalTimes("2018-06-22T10:30:00.000Z", "2018-06-22T15:20:00.000Z", unavailableTimes);

    castIntervalToString(availableTimes).should.be.deep.equal([
      {
        "start": "2018-06-22T10:30:00.000Z",
        "end": "2018-06-22T14:00:00.000Z",
      },
    ]);
  });

  //
  it('should return an interval of available times, case #6', function () {
    const unavailableTimes = [];

    const availableTimes = availableIntervalTimes("2018-06-22T08:30:00.000Z", "2018-06-22T15:20:00.000Z", unavailableTimes);

    castIntervalToString(availableTimes).should.be.deep.equal([
      {
        "start": "2018-06-22T08:30:00.000Z",
        "end": "2018-06-22T15:20:00.000Z",
      },
    ]);
  });

});