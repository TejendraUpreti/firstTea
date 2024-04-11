let scor = prompt("Enter the Mark numbers then finaliez the Grade!");
let grade;

if(scor >= 90 && scor <= 100){
    grade = "A";
}
else if(scor >=70 && scor <=89){
    grade = "B";
}
else if(scor >=60 && scor <=69){
    grade = "C";
}
else if(scor >=50 && scor <=59){
    grade = "D";
}
else if(scor >=0 && scor <=49){
    grade = "E";
}
    console.log(grade);

