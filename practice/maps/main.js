const student=new Map([['name','ali'],['age','20'],['grade','92']]);
// Question: Add a new key subject with the value "Mathematics" to the student map. Answer:
student.set('subject','Mathematics');

// Question: Retrieve the value associated with the key grade in the student map. Answer:
console.log(student.get('subject'));

// Question: Check if the key age exists in the student map. Answer:
console.log(student.has('age'));

// Question: Remove the key grade from the student map. Answer:
console.log(student.delete('grade'));

// Question: Clear all key-value pairs from the student map. Answer:
console.log(student.clear());

// Question: Create a Map named countryCodes with the following entries:
// US: "United States"
// IN: "India"
// GB: "United Kingdom"
// Use a for...of loop to print all key-value pairs in the map. Answer:
let countryCodes = new Map([
    ['US', 'United States'],
    ['IN', 'India'],
    ['GB', 'United Kingdom']
]);
for (let [key, value] of countryCodes) {
    console.log(`${key}: ${value}`);
}

// // Question: Use the forEach method to print all keys in the countryCodes map. Answer:
// countryCodes.forEach(( key) => {
//     console.log(key);
// });

// Question: Get an array of all keys in the countryCodes map using Map.keys. Answer:
let keys = Array.from(countryCodes.keys());
console.log(keys);

// Question: Get an array of all values in the countryCodes map using Map.values. Answer:
let values = Array.from(countryCodes.values());
console.log(values);

// Question: Get an array of all key-value pairs in the countryCodes map using Map.entries. Answer:
let entries = Array.from(countryCodes.entries());
console.log(entries);

// Question: Use a Set to remove duplicate values from the array [1, 2, 2, 3, 4, 4, 5]. 
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = Array.from(new Set(arr));
console.log(uniqueValues);

// // Question: Convert the student map to an object. Answer:
// let obj = Object.fromEntries(student);
// console.log(obj);


// Question: Create a Map from the following object: { name: "Bob", age: 25, city: "Paris" }. Answer:
let obj = { name: "Bob", age: 25, city: "Paris" };
let map = new Map(Object.entries(obj));
console.log(map);

// Question: Write a function getUniqueCharacters that takes a string and returns a Set of unique characters. Answer:
function getUniqueCharacters(str) {
    return new Set(str.split(''));
}
let uniqueChars = getUniqueCharacters('hello');
console.log(uniqueChars);