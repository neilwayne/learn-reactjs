const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "descruction",
    "present",
    "happy"
];

let longWords = words.filter (word => word.length > 6);
console.log ('long words are: ', longWords);


const age = [
    "60",
    "13",
    "15",
    "77",
    "22",
    "88"
];

let youngAge = age.filter (number => number < 30);
console.log ('these ages are still considered as young age: ', youngAge);


let array1 = [1, 4, 9, 16];

const newArray = array1.map (x => x * 2);

console.log ('new array are: ', newArray);



let name = ['neil', 'wayne', 'philip', 'jacob'];
const newName = name.map (x => x + ' fernandez');
console.log ('their full names are: ', newName);


let array2 = [5, 12, 8, 130, 44];
let found = array2.find (x => x > 10);
console.log('find array where bigger than 10 is : ', found);


let partnumber = ['abc-123', 'bcd-123', 'abc-758', 'abc-297', 'bcd-213'];
let abcPartnumber = partnumber.filter (x => x.startsWith('abc'));
console.log (`these are the part numbers with prefix ${abcPartnumber}`);


let array3 = ["a", "b", "c"];
let text = "";

array3.forEach (x => {
    text += x + ",";
});
console.log('text is : ', text);

//Javascript 6

const myFunction = (totalPrice, name = 'empty') => {
    const totalTax = totalPrice * 0.1;
    const detailTax = `name: ${name}, totalPrice, ${totalPrice} tax:${totalTax}`;

    return detailTax;
}

let result = myFunction(10000, 'Shirt');
console.log(result);
result = myFunction(12000, 'Sleeve');
console.log(result);
result = myFunction (12000);
console.log(result);


let carName = "Honda";
console.log ('carName 1', carName);
function myFunction1(){
    let carName = "Volvo";
    console.log ('carName 2', carName);
    console.log('carName 3', carName);
}

console.log ('carName 4', carName);
myFunction1();
console.log ('carName 5', carName);




function firstFunction(){
    let count = 0;
    setInterval(() => {
        count++;
        alert(`this is setInterval & already show in ${count} times`);
    }, 3000);
}
//firstFunction();

function secondFunction(){
    setTimeout ( () => {
        alert("this is settimeout");
    }, 3000)
}
//secondFunction();


let colors = [ "red", "blue", "green"];

colors.forEach (function (color){
    console.log (color);
})

let numbers = [1,2,3,4,5];
let sum = 0;

function adder (number) {
    sum += number;
}

numbers.forEach (adder);
console.log (sum);


let partnumber = ['abc-123', 'bcd-123', 'abc-758', 'abc-297', 'bcd-213'];
let abcPartnumber = partnumber.filter (x => x.startsWith('abc'));
console.log (`these are the part numbers with prefix ${abcPartnumber}`);

