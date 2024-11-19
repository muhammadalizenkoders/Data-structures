// Question: Create an object person with the following properties:
name: "John"
age: 30
city: "New York"

const person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person);

// Question: Access the name property of the person object and store it in a variable. Answer:
const kk = person.name;
console.log(kk);

// Question: Add a new property isMarried with the value false to the person object. Answer:
person.isMarried = false;
console.log(person);

// Question: Delete the city property from the person object. Answer:
delete person.city;
console.log(person);

// Question: Add a method greet to the person object that logs "Hello, my name is John" to the console when called. Answer:
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}


// Question: Call the greet method of the person object. Answer:
person.greet();

// Question: Write a loop to print all keys of the person object. Answer:
for(let key in person){
    console.log(key);
}

// Question: Write a loop to print all values of the person object. Answer:
for (let key in person) {
    console.log(person[key]);
}

// Question: Use destructuring to extract the name and age properties from the person object. Answer:
let { name, age } = person;
console.log(name,age)

// Question: Provide default values for destructuring if the properties gender and city do not exist. Answer:
let {gender:gender="male",city:city="New York"} =person;
console.log(gender,city);

// Section 5: Advanced Operations
// Question: Create a new object student that has the same properties as person, but add an additional property grade: "A". Answer:
let newobj={...person,grade:"A"}
console.log(newobj);

// Question: Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { b: 3, c: 4 } into a new object. Answer:
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = {...obj1,...obj2};
console.log(obj3);

// Question: Use Object.keys to get an array of all keys in the person object. Answer:
let keys = Object.keys(person);
console.log(keys);

// Question: Use Object.values to get an array of all values in the person object. Answer:
let values= Object.values(person);
console.log(values);

// Question: Use Object.entries to get an array of key-value pairs in the person object. Answer:
let entries = Object.entries(person);
console.log(entries);

// Section 6: Checking Properties
// Question: Check if the age property exists in the person object. Answer:
console.log(person.hasOwnProperty("age"));

// Question: Use Object.hasOwn() to check if isMarried is a direct property of person. Answer:
console.log(Object.hasOwn(person,"isMarried"));
console.log(Object.hasOwn(person, "age"));

// Section 7: Freezing and Sealing
// Question: Use Object.freeze to make the person object immutable. Try changing the age property. Answer
Object.freeze(person)
person.age = 40;
console.log(person);

// Question: Use Object.seal on the person object and add a new property salary. Answer:
Object.seal(person);
person.ggb = 40;
console.log(person);

// Question: Write code to create a deep copy of the person object using JSON.stringify and JSON.parse. Answer:
let z=JSON.stringify(person);
console.log(z)
let k=JSON.parse(z);
console.log(k);

// Question: Create an array of objects representing books: javascript Use filter to find all books with a price greater than 150. Answer: javascript
let books = [
    { title: "Book 1", author: "Author 1", price: 100 },
    { title: "Book 2", author: "Author 2", price: 200 },
    { title: "Book 3", author: "Author 3", price: 300 },
    { title: "Book 4", author: "Author 4", price: 400 },
    { title: "Book 5", author: "Author 5", price: 500 }
];
let filteredBooks = books.filter((book) => book.price > 150);
console.log(filteredBooks);

// Question: Use map to create an array of book titles. Answer: javascript
let bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// Question: Use reduce to calculate the total price of all books. Answer:
console.log(books.reduce((acc, book) => acc + book.price, 0));

// Bonus Questions
// Question: Use a for...of loop to print the title and author of each book in the books array. Answer:
for (let book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}

// Question: Write a function updateAge that takes an object and an age parameter, updates the object's age, and returns the updated object. Answer:
let obj = { name: "John", age: 30 };
function updateAge(obj, age) {
    obj.age = age;
    return obj;
};
let updatedObj = updateAge(obj, 40);
console.log(updatedObj);

