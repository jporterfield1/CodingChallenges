/*
Weekly Coding Challenge: Palindrome Given a word, create a function that returns whether or not it's possible to create a palindrome by rearranging the letters in the word.


Examples 

isPalindromePossible("rearcac") ➞ true
// You can make "racecar"
isPalindromePossible("suhbeusheff") ➞ true
// You can make "sfuehbheufs" (not a real word but still a palindrome)
isPalindromePossible("palindrome") ➞ false
// It's impossible

Notes 
	
Trivially, words that are already palindromes return true.
	
Words are given in all lowercase.
*/

function isPalindromePossible(str) {

    //Create a Alphabet size array
    let numOfChars = 256;
    let odd = 0;
    //Create and initialize value of count array to 0
    let count = Array(numOfChars).fill(0);
    //Count the occurance of characters in the string
    for (let index = 0; index < str.length; index++)
    count[str[index].charCodeAt()]++;
    //Count odd characters
    for (let index = 0; index < numOfChars; index++) {
        if ((count[index] & 1) == 1)
            odd++;
        if (odd > 1)
            return false;
    }
    return true;

}


console.log(isPalindromePossible('racecar'));
console.log(isPalindromePossible('suhbeusheff'));
console.log(isPalindromePossible('palindrome'));