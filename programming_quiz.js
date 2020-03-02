var word = 'Deleveled';
var stringArray = ["VMRCO", "VORCM", "MCRTOX", "ZXTAC", "XZATC", "XMTCOR", "OXVS", "AZTXC", "VXOS", "RZAT", "MRCOTX", "SVXO", "TRAZ", "ZTAR", "MVOCR"];

console.log("-------------------------------------");
console.log("1. Palindrome Checking");
console.log( word , isPalindrome(word) );
console.log("-------------------------------------");
console.log("2. Group words with same set of characters");
groupCharacters();
console.log("-------------------------------------");
console.log("3. Generate possible strings of size N in set of N characters.");
setOfString("ABC");
setOfString(112);
setOfString("AB");
console.log("-------------------------------------");
console.log("4. Find the sum of 1^1 + 2^2 + 3^3 + ….. + n^n");
sumOfN(2);
sumOfN(3);

function isPalindrome(word)
{
    var removeRegExp = /[\W_]/g;
    var lowerString = word.toLowerCase().replace(removeRegExp, '');
    var reverseString = lowerString.split('').reverse().join(''); 
    return reverseString === lowerString;
}
function groupCharacters()
{
    let mapString = new Map();
    for(var index in stringArray) 
    {
        var temp = stringArray[index].split("").sort().join('');
        if(!mapString.has(temp))
        {
            mapString.set(temp, stringArray[index]);
        }
        else
        {
            var arrayValue = [];
            if(Array.isArray(mapString.get(temp)))
            {
                arrayValue = mapString.get(temp);
            }
            else
            {
                arrayValue.push(mapString.get(temp));
            }
            arrayValue.push(stringArray[index]);
            mapString.set(temp, arrayValue);
        }
    }
    console.log(mapString);
}
function setOfString(str) {
    var inputArr = str.toString().split("");
    let mapString = new Map();
    var result = [];
    var ans = generateNoRepeats(inputArr.length, inputArr, mapString, result);

    console.log("String: ", str);
    console.log("Result: ", ans);
}
function generateNoRepeats(n, arr, map, result) {  
    if (n == 1) {
        if (!map.has(arr.join(""))) {
            result.push(arr.join(""));
            map.set(arr.join(""), arr.join(""));
        }
    } else {
        for (var i = 0; i < n - 1; i++) {
            generateNoRepeats(n - 1, arr, map, result);
            if (n%2 === 0) {
                swap (i, n - 1, arr);
            } 
            else {
                swap (0, n - 1, arr);
            }
        }
        generateNoRepeats(n - 1, arr, map, result);
    }

    return result;
}
function swap(index1, index2, arr) {
    var tmp;
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
function sumOfN(n)
{
    var sumInt = 0;
    for(var i=1; i<=n; i++) 
    {
        sumInt += Math.pow(i,i);
    }
    console.log("Input: n=",n);
    console.log("Output: ", sumInt);
}