const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars[0]);
console.log(cars.toString());
// all array methods
cars.push("Audi");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.at(2));
console.log(fruits.join(" * "));
console.log(fruits.pop());
console.log(fruits.push("Lemon"));
console.log(fruits.shift());
console.log(fruits.unshift("Lemon"));
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(fruits.length);
console.log(fruits.toString());
console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.includes("Apple"));
console.log(fruits.concat(cars));
console.log(fruits.copyWithin(2, 0));
console.log(fruits.fill("Orange", 2, 5));
console.log(fruits.flat());
let z=[1,2,3,4,5,67,6]
console.log(z.flatMap((x) => x * 2));
console.log(fruits.find((x) => x.length > 5));
// filter
console.log(fruits.filter((x) => x.length > 5));
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits.reduce((x, y) => x + " " + y));