

const batteryBatches = [
    [
       { type: 'alkaline', capacity: 2000 },
       { type: 'alkaline', capacity: 1500 },
    ],
    [
       { type: 'lithium', capacity: 12000 },
    ],
   ];

   const reducer = (batteryBatches) => {
    const totalBatteries = batteryBatches.reduce((accumulator, batteryBatch) => {
       const batteryCount = batteryBatch.reduce((batchAccumulator, battery) => {
         return batchAccumulator + 1;
       }, 0);
   
       return accumulator + batteryCount;
    }, 0);
   
    return totalBatteries;
   };
   
   const totalBatteries = reducer(batteryBatches);
   console.log('Total Batteries:', totalBatteries);

