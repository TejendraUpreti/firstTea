let score = prompt("Enter the Marks then find the Grade");
let grade;

if(score >=90 && score <=100){
    grade = "A";
}else if(score >=70 && score <=89){
    grade = "B";
}else if(score >=50 && score <=69){
    grade = "C";
}else if(score >=30 && score <=49){
    grade = "D";
}else{
    grade = "fall";
}
console.log(grade)