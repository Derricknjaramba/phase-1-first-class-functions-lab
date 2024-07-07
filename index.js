const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

  
  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ];

  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  const faredoubler = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  console.log(fareDoubler(10));

  const faretripler = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareTripler = createFareMultiplier(3);
  
  console.log(fareTripler(10));

  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }

  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia', 'Jane'];

  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Sally', 'Bob']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

  







