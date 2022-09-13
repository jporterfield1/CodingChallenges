/*
b) Write a function to replace all instances of character c1 with character c2 and vice versa.

Examples:
doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"

doubleSwap("128 895 556 788 999", "8", "9")
➞ "129 985 556 799 888"

Notes:
Both characters will show up at least once in the string.
*/

function doubleSwap(phrase, char1, char2) {
    let phraseArr = phrase.split('');
    for (let i = 0; i < phraseArr.length; i++) {

        if (phraseArr[i] === char1) {
            phraseArr[i] = char2;
        } else if(phraseArr[i] === char2){
            phraseArr[i] = char1;
        }
        

    }
    return phraseArr.join('');
}

console.log(doubleSwap("aabbccc", "a", "b") + " : Expect----bbaaccc"); //PASS
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&") + " : Expect----random w&rds writt#n h#r#"); //PASS
console.log(doubleSwap("128 895 556 788 999", "8", "9") + " : Expect----129 985 556 799 888"); //PASS