// Code your solution in this file!
const drivers = ["Jonny", "Allie", "D", "I", "Z", "G", "O"];

const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, f) {
  return f(arrayOfDrivers);
}
