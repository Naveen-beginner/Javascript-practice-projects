function isPalindrome(str) {
    const reversed = str.split("").reverse().join("")
    console.log(str === reversed);
}

isPalindrome("madam")