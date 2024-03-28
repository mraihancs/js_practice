const array = [100,200,150,330]

const ahistory = array.filter(function(currentElement){
return currentElement < 200;
})

console.log(ahistory);