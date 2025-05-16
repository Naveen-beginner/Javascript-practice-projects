function dup(a) {
    let i, j;
    for(i=0;i<a.length;i++) {
        for(j=a.length-1;j>=i+1;j--) {
            if(a[j] === a[i]) {
                a.splice(j, 1);
                a.splice(i, 1);
            }
        }
    }
    console.log(a);
}

dup([1, 1, 2, 8, 9, 3, 3, 5, 6, 7, 6, 8])