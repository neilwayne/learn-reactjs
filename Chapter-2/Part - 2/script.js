class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * 2 * this.radius;
    }
}

let circle = new Circle (10);
let totalArea = circle.getArea();
console.log (`this totalArea is ${totalArea}`)

const object = {
    name: 'Budi',
    gender: 'Male',
    live: "Batam",
    age: 23,
    country: "USA"
}
console.log(object);

//const { name, live } = object;
//console.log (name, live);

const simpleFunction = ({ name, gender }) => `hi my name is ${name} with gender ${gender}`
const greeting = simpleFunction (object);
console.log (greeting);


const simpleFunction2 = (obj) => `hi my name is ${obj.name} with gender ${obj.gender}`
const greeting2 = simpleFunction2 (object);
console.log (greeting2);


const { name, age, ...newObject } = object;
console.log (name, age);
console.log (newObject);    


const person1 = {
    name: "Omni Knight",
    class: "Support",
    level: 21
};

const person2 = {
    ...person1,
    name: "Tide Hunter"
};

console.log (`person1 is `, person1);
console.log (`person2 is `, person2);


const App = {
    start(){
        console.log ('running')
    },
    end(){
        console.log ('stop')
    }
}

App.start();
App.end();
