//JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
function sumOfNumbers(arr) {
    let sum = 0;
    for (let  i = 0; i < arr.length; i++) {
        if (typeof arr[i] === `number `&& !isNaN(arr[i])){
        sum += arr[i];
        } 
    }
    return sum;
}

const arr1 = [2,"11",3,"a2",false,5,7,1];
const arr2 = [2,3,0,5,7,8,true,false];

console.log("Original array: "+arr1.join(", "));
console.log("Sum of numbers in array: "+sumOfNumbers(arr1));

console.log("Original array: "+arr2.join(", "));
console.log("Sum of numbers in array: "+sumOfNumbers(arr2));
