//
const createError = (message) => {
  throw new Error(message || 'New error created');
};

const isString = (value) => typeof value === 'string';
const toDate = (str) => new Date(str);

const castIntervalToDate = (interval = []) =>
  interval.map(range => ({
    start: (isString(range.start) && toDate(range.start)),
    end: (isString(range.end) && toDate(range.end)),
  }));

const castIntervalToString = (interval = []) =>
  interval.map(range => ({
    start: range.start.toJSON(),
    end: range.end.toJSON(),
  }));

/**
 * Return a sorted of interval times
 * 
 * @param {*} interval 
 */

const sortIntervalTimes = (interval = []) => {
  return interval.sort((range1, range2) => {
    const start1 = new Date(range1.start);
    const start2 = new Date(range2.start);

    if (start1.getTime() > start2.getTime()) return 1;
    if (start1.getTime() < start2.getTime()) return -1;

    return 0;
  });
}

/**
 * Returns an array of available  itervals
 * 
 * @param {*} startTime 
 * @param {*} endTime 
 * @param {*} unavailableIntervalTimes
 */

const availableIntervalTimes = (startTime, endTime, unavailableIntervalTimes = []) => {
  try {
    const availableInterval = [];
    const start = isString(startTime) ? toDate(startTime) : startTime;
    const end = isString(endTime) ? toDate(endTime) : endTime;

    if (start.getTime() > end.getTime()) createError(`End date should be greated than start date`);
    if (unavailableIntervalTimes.length === 0) return [{ start, end }];

    unavailableIntervalTimes = castIntervalToDate(
      sortIntervalTimes(unavailableIntervalTimes)
    );

    unavailableIntervalTimes = unavailableIntervalTimes.filter(range => (
      range.end.getTime() > start.getTime() &&
      end.getTime() >= range.start.getTime()
    ));

    unavailableIntervalTimes.forEach((range, i) => {
      if (i === 0 && start.getTime() < unavailableIntervalTimes[i].start.getTime()) {
        availableInterval.push({
          start,
          end: range.start
        });
      }
      
      const nextEnd = unavailableIntervalTimes[i+1]
        ? unavailableIntervalTimes[i+1].start
        : end;

      if (range.end.getTime() < nextEnd.getTime()) {
        availableInterval.push({
          start: range.end,
          end: nextEnd,
        });
      } 
    });

    return availableInterval;
  } catch (err) {
    console.log(`Error in availableIntervalTimes method: ${err.message}`);
    console.log(err);
    return [];
  }
}

//
module.exports = {
  castIntervalToDate,
  availableIntervalTimes,
  sortIntervalTimes,
  castIntervalToString,
};