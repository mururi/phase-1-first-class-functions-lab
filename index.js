const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
  return function(fare) {
    return fare*multiplier;
  }
}

const fareDoubler = fare => {
  const doubleFare = createFareMultiplier(2)(fare);
  return doubleFare;
}

const fareTripler = fare => {
  const trippleFare = createFareMultiplier(3)(fare);
  return trippleFare;
}

const selectDifferentDrivers = (drivers, selector) => {
  return selector(drivers);
}