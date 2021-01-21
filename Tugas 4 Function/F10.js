function isPalindrome(kata){
    var kata1 = kata.toLowerCase("").split("").reverse().join("");
    if (kata1 == kata.toLowerCase())
    return true;
    return false;
}
 
console.log(isPalindrome('level')); // true
console.log(isPalindrome('Civic')); // true
console.log(isPalindrome('JavaScript')); // false
console.log(isPalindrome('Living')); // false
console.log(isPalindrome('Madam')); // true
console.log(isPalindrome(`Mlm`));
console.log(isPalindrome(`Non`));