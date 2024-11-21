// // Question: Create a Set named numbers containing the values 1, 2, 3, 4, 5. Answer:
let numbers = new Set([1, 2, 3, 4, 5]);
console.log(numbers);

// // Question: Add the value 6 to the numbers Set. Answer:
// numbers.add(6);
// console.log(numbers);

// // Question: Check if the value 3 exists in the numbers Set. Answer:
// console.log(numbers.has(3));

// // Question: Remove the value 2 from the numbers Set. Answer:
// numbers.delete(2);
// console.log(numbers);

// // Question: Clear all values from the numbers set. Answer:
// numbers.clear();
// console.log(numbers);

// // Question: Create a Set of fruits ['Apple', 'Banana', 'Mango']. Use a for...of loop to print each fruit. Answer:
// let colors = new Set(['Apple', 'Banana', 'Mango']);
// for (let color of colors) {
//     console.log(color);
// }

// // Question: Use the forEach method to print each value in the numbers set. Answer:
// numbers.forEach((value) => {
//     console.log(value);
// });

// // Question: Create two sets, setA = [1, 2, 3] and setB = [3, 4, 5]. Find their union. Answer:
// let setA = new Set([1, 2, 3]);
// let setB = new Set([3, 4, 5]);
// let unionSet = new Set([...setA, ...setB]);
// console.log(unionSet);

// Question: Find the intersection of setA and setB. Answer:
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log(intersectionSet);

// Question: Find the difference between setA and setB (values in setA but not in setB). Answer:
let differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log(differenceSet);