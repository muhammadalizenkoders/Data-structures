// Question: Write code to access the second item in the fruits array. Answer:
let fruits=["A","b","c","Mango"];
// console.log(fruits[1]);

// Question: Use a forEach loop to print each item in the fruits array. Answer:
// fruits.forEach((item)=>{console.log(item)});

// Question: Add Orange to the end of the fruits array. Answer:
fruits.push("Orange");

// Question: Remove the first item (Apple) from the fruits array. Answer:
fruits.shift();
// console.log(fruits);

// Question: Add Grapes to the beginning of the fruits array. Answer:
fruits.unshift("Grapes");
// console.log(fruits);

// Question: Remove the last item (Orange) from the fruits array. Answer:
fruits.pop()
// console.log(fruits);

// Question: Create a new array by adding Cherry and Peach to the existing fruits
let newFruits3=fruits.concat(["Cherry","Peach"]);
// console.log(newFruits3);

// Question: Use splice to remove Banana from the fruits array (assume it is in the second position). Answer:
fruits.splice(1,1);
// console.log(fruits);

// Question: Use splice to insert Pineapple at the second position in the fruits array. Answer:
fruits.splice(1, 0, "Pineapple");
console.log(fruits);

// Question: Use slice to create a new array with the first two items of the fruits array. Answer:
let newFruits2=fruits.slice(0,2);
console.log(newFruits2);

// Question: Find the index of Mango in the fruits array. Answer:
let index=fruits.indexOf("Mango");
console.log(index);

// Question: Check if Banana exists in the fruits array using includes.
let check=fruits.includes("Banana");
console.log(check);

// Question: Use find to locate the first fruit in the fruits array that starts with M. Answer:
let find=fruits.find((item)=>item.startsWith("M"));
console.log(find);

// Question: Use filter to create a new array with fruits that have more than 5 letters. Answer:
let newFruits=fruits.filter((item)=>item.length>5);
console.log(newFruits);

// Question: Sort the fruits array alphabetically. Answer:
let sortedFruits=fruits.sort();
console.log(sortedFruits);

// Question: Reverse the fruits array. Answer
let reversedFruits=fruits.reverse();
console.log(reversedFruits);

// Question: Use reduce to create a single string from the fruits array, with items separated by a comma and a space (, ). Answer:
let string=fruits.reduce((prev, curr)=>prev+" "+curr+",");
console.log(string);

// Question: Use map to create a new array where each fruit is in uppercase. Answer:
let newFruits1=fruits.map((item)=>item.toUpperCase());
console.log(newFruits1);

// Question: Combine all the methods you've learned to:
// Add Kiwi at the start.
// Remove Mango from the array.
// Sort the remaining fruits alphabetically. Answer:
fruits.unshift("kiwi");
fruits.splice(-1,1)
fruits.sort()
console.log(fruits);

// Bonus Questions
// // Question: Flatten a nested array [1, [2, 3], [4, [5, 6]]] using flat. Answer:
let arr=[1,[2,3],[4,[5,6]]];
let newArr=arr.flat(2);
console.log(newArr);

// Question: Use join to create a string from the fruits array with items separated by a hyphen (-). Answer:
let string1=fruits.join("-");
console.log(string1);
