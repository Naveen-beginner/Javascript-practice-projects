// const array = [1999, 132, 343, 456, 503]
// Using built in functions
// console.log(Math.max(...array));

function largest(a) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[max]) {
            [a[max], a[i]] = [a[i], a[max]];
        }
    }
    console.log(a[0]);
}

largest([10, 40, 2, 1, 67, 76, 890]);

// My method