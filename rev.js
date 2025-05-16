function rev(str) {
    let rev = "";
    for(let i of str) {
        rev = i + rev
    }
    console.log(rev.split("").join(""))
}

rev("imagine")