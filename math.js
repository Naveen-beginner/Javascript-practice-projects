// generate otp
 
// console.log(Math.round(4.3));
// console.log(Math.round(4.8));

// console.log(Math.floor(4.3)); // math.floor rounds "DOWN" to nearest integer
// console.log(Math.floor(4.9));

// console.log(Math.ceil(4.3)); // math.floor rounds "UP" to nearest integer
// console.log(Math.ceil(4.9));

// console.log(Math.trunc(4.3)); // math.trunc only keeps the integer removes decimal part
// console.log(Math.trunc(4.7));

// console.log((Math.random()));

// console.log(Math.sin(Math.PI/2));

// console.log(Math.log10(2));

// console.log(Math.exp(2));
// console.log(Math.min(2,3));


function generateOTP() {
    return Math.floor(100000 + Math.random() * 100000)
}

console.log(generateOTP());