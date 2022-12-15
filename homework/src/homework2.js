const arr = [1, 2, 3, 4, 5];
let sum = 0;

function sumArr(arr){
    let sum = arr.reduce((x,y) => x + y);
    return sum;
}  
console.log(sumArr(arr));
