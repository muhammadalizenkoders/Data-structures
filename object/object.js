// implement object
let ob={
    name:"sai",
    age:21,
    address:"hyd",
    salary:20000,
    display:function(){
        console.log("name is "+this.name+" age is "+this.age+" address is "+this.address+" salary is "+this.salary);
    }
};
ob.eyeColor = "blue";
// implement object methods
console.log(ob["age"]);
console.log(ob.display());
console.log(JSON.stringify(ob));
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty(ob));