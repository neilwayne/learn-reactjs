let alphabet = ["a", "b", "c","d"];

let result = alphabet.join("_");
console.log (result);
result = alphabet.length;
console.log (result);
result = alphabet.includes("af");
console.log (result);
result = alphabet.push ("e");
console.log (result);
console.log (alphabet);
result = alphabet.pop ();
console.log (result);
console.log (alphabet);

let bigValue = numeral('1,000,000,000,200.00');
let integerValue = bigValue.value();
console.log(integerValue);
console.log(`the value is ${bigValue.format('$ 0,00')}`);

let secondValue = numeral ('Rp 200,500,000');
console.log('second\'s value is ', secondValue.value());

moment()
let today = moment().locale('tl-ph');

console.log ('today is ', today.format('dddd, MMMM Do YYYY'));
console.log (moment().add(1, 'weeks').format('DD MMMM YYYY'));

console.log(moment([2019,5,29]).fromNow());


let grade = window.prompt ("what's your grade?");
let myGrade = "";

if (grade >= 90){
    myGrade = "A";
}   else if (grade >= 80){
    myGrade = "B";
}   else if (grade >= 70){
    myGrade = "C";
}   else if (grade >= 60){
    myGrade = "D";
}   else {
    myGrade = "F";
}

console.log(`my grade is ${myGrade}`);


let Animal = window.prompt ("Give a name of an animal.");
switch (Animal){
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal will go on Noah's Ark.");
        break;
    case "Dinosaur":
    default:
        console.log("This animal will not.");
}


let textNumber = "";

for (i = 0; i < 5; i++) {
    textNumber += i + ",";
}
console.log(textNumber)


let person = { first_name: "John", last_name: "Doe", age: 25};

let personInfo = "";
for (let info in person){
    personInfo += person[info] + " ";
}
console.log(personInfo);