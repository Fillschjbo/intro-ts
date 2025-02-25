function isPalindrome(word : string):boolean{
    const lowercase:string = word.toLowerCase()
    const reverse:string = lowercase.toLowerCase().split("").reverse().join("");
    return lowercase === reverse;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("mouse"))
console.log(isPalindrome("Anna"))