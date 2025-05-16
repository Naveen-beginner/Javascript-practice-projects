function vowel(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let i of str) {
        if (vowels.includes(i)) count++;
    }
    console.log(count);          
}

vowel("Hello sdvasetiuogsdv")