// function feetCalculation(inch){
//     const height =  inch /12;
//     return height;
// }

// const mrHeight = feetCalculation(75);
// console.log(mrHeight)



/*


 eto feet eto inch related math soultion


*/

function feetCalculation(inch){
    const feetValue = inch /12;
   const res = parseInt(feetValue);
   const remaining = inch %12;
   const result = res +' '+ 'feet'+' ' + remaining+' ' + 'inch';
   return result;
}

const re = feetCalculation(55);
console.log(re);

