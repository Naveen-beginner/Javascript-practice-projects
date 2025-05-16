for(let i = 0; i <=10; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz\n";
    if (i % 5 === 0) output += "Buzz\n";
    console.log(output || i);
}