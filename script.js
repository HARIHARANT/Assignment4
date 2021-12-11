/** oddNumber **/
let number = [12,2,5,7,8,3];
let oddNumber = number.filter(elm=> elm%2 != 0)
console.log(oddNumber);

/** titleCapsArr **/
let str = ["hellO","worLd","gUvi"];
let titleCapsArr = str.map(elm => elm.charAt(0).toUpperCase()+elm.substr(1).toLowerCase());
console.log(titleCapsArr);

/** arrTotal **/
let arrTotal = number.reduce((init,elm)=> init+elm)
console.log(arrTotal);

/** primeNumbers **/
let primeNumbers = number.filter((elm)=> {
    for(let i = 2; i < elm; i++){
        if(elm%i === 0) return false;
    }
    return elm > 1;
})
console.log(primeNumbers);

/** palindromes **/
let palindromes = ["pop","radar","hello"]
let palindromesArr = palindromes.filter(elm=> elm.toLowerCase() === elm.split("").reverse().join("").toLowerCase())
console.log(palindromesArr);