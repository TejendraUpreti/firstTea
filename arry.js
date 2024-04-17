// let arry = [300, 788, 976];
// let discount = 0;

// let discount = 0.1; // 10% discount

// // Apply discount to each element in the array
// let discountedArray = arry.map(price => price * (1 - discount));

// console.log("Discounted prices: ", discountedArray);

//2nd example

// let arry = [300,766,900,100,500];
// let i = 0;

// for(let val of arry){
//     let offer = val / 10;
//     arry[i] = arry[i] - offer;
//     console.log(`value od after offer: ${arry[i]}`)
//     i++;
// }

// 3rd example

let arry1 = [300,766,900,100,500];
let j = 0;

for(let i = 0; i < arry1.length; i++){
    let offer = arry1[i] / 10;
    arry1[i] -= offer;
}
console.log(arry1);


