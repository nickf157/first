let dogName = "Bobo";
let dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
}
else {
    console.log(dogName + " says woof woof");
}

dogName = "Spiky";
dogWeight = 17;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
}
else {
    console.log(dogName + " says woof woof");
}

dogName = "Spot";
dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
}
else {
    console.log(dogName + " says woof woof");
}

dogName = "Lady";
dogWeight = 16;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
}
else {
    console.log(dogName + " says woof woof");
}

dogName = "Live";
dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + " says WOOF WOOF");
}
else {
    console.log(dogName + " says woof woof");
}

function bark(dogName, dogWeight) {
    if (dogWeight > 20) {
        console.log(dogName + " says WOOF WOOF");
    }
    else {
        console.log(dogName + " says woof woof");
    }
}

bark("Bobo", 23);
bark("Spiky", 17);
bark("Spot", 53);
bark("Lady", 16);



let x = 32;
let y = 44;
let radius = 5;

let centerX = 0;
let centerY = 0;
let width = 600;
let height = 400;

function setup(width, height) {
    centerX = width / 2;
    centerY = height / 2;
}

function computeDistance(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d2 = (dx * dx) + (dy * dy);
    let d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    let area = Math.PI * r * r;
    return area
}

setup(width, height);
let area = circleArea(radius);
let distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);



let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

let i = 0;
let highScore = 0;
while (i < scores.length) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
    i = i + 1
}

console.log("Bubble test: " + scores.length);
console.log("Highest bubble score: " + highScore);

let bestSolutions = [];
for(let i = 0; i < scores.length; i++);


let numbers = new Array(1,2,3,4,5);
console.log(numbers); // [1,2,3,4,5]

let values = new Array(5);
console.log(values); // [5]

let array = Array.of(5);
console.log(arr); // [5]

let arr = [1,2,3];
arr.push(4);
console.log(arr); // [1,2,3,4]

arr.pop();
console.log(arr); // [1,2,3]

arr.unshift(0);
console.log(arr) // [0,1,2,3]

arr.shift();
console.log(arr) // [1,2,3]

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(7)); // -1 (not found)

console.log(arr.lastIndexOf(2)); 

console.log(arr.includes(1)); // true
console.log(arr.includes(7)); // false

arr.splice(2,1,10,20);

let sliced = arr.slice(1,4);
console.log(sliced);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combined = arr1.concat(arr2)
console.log(combined);

let words = ["Hello", "world!"];
console.log(words.join(" "));

let sentence = "JavaScript is fun";
let wordsArray = sentence.split(" ");
console.log(wordsArray)

function add(a, b) {
    return a + b;
}
console.log(add(2,3));

//Arrow function
let add_arrow = (a,b) => a + b;

let multiply = (a,b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
}

let access = document.getElementById("code9");
let code = access.innerHTML;
code += "midnight";
alert(code);