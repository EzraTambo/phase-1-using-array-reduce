const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
   }
   
   const totalBatteries = batteryBatches.reduce(reducer, 0);
