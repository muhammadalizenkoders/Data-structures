// Create a Set
const letters = new Set();
let text = "";

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
for (const x of letters) {
    text += x;
  }
console.log(text);
console.log(letters.size);
// Create a Set and add literal values
const mySet2 = new Set([4, 5, 6]);
console.log(mySet2);

// Add a duplicate value
mySet2.add(3); 
console.log(mySet2); 

// Remove a value from the Set
mySet2.delete(3);
console.log(mySet2);

// Check if a value is in the Set
console.log(mySet2.has(1)); 
console.log(mySet2.has(2)); 

// Clear all elements from the Set
mySet2.clear();
console.log(mySet2);

// Union of two Sets
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionSet = new Set([...setA, ...setB]);
console.log(unionSet); 

// Intersection of two Sets
const intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log(intersectionSet);

// Difference of two Sets
const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log(differenceSet);

// Symmetric Difference of two Sets
const symmetricDifferenceSet = new Set([
  ...[...setA].filter(x => !setB.has(x)),
  ...[...setB].filter(x => !setA.has(x))
]);
console.log(symmetricDifferenceSet); 

const isSubset = [...setA].every(x => setB.has(x));
console.log(isSubset); 

const isSuperset = [...setB].every(x => setA.has(x));
console.log(isSuperset); 

const isDisjoint = [...setA].every(x => !setB.has(x));
console.log(isDisjoint); 

console.log(setA.size); 

const setToArray = [...setA];
console.log(setToArray);
