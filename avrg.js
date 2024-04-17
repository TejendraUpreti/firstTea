let marks = [23,24,56,76,86,45,65,43,54];

let sum = 0;

for(let val of marks){
    // sum = sum + val;
    sum += val;
}
let avrg = sum/marks.length;

console.log(`Averge marks of class= ${avrg}`);