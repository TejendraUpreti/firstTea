
function countVowels (arb){

    let count = 0;
    for(const char of arb){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        };
    };
console.log(count);
};
countVowels("tejendraupreti");


