//both are the same

let value = prompt("Enter the full name");

let at = "@";
let req = at.concat(value);
let str = value.length; // longcut

let userName = "@" + value + value.length; //shortcut

console.log(userName);
console.log(req+str);
