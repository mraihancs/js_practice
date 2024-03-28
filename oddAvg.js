function oddAverage(num) {
    const odd = [];
    for (number of num) {
        // console.log(number);
        if (number % 2 === 1) {
            odd.push(number);

        }
    }
    
    let sum = 0;
    for(number of odd){
 sum = sum+ number;
    }


    const count = odd.length;
    const avg2 = (sum/count);
    // console.log(sum)
    
    return avg2;
}

const avg = oddAverage([10, 13, 15,37,21, 20, 46]);

console.log(avg);