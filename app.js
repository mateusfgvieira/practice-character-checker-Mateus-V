/*
Instructions
Create a small program that prompts the user for a word or phrase and then allows
them to query specific positions within that string.
*/

const readline = require('readline-sync');

//1. Use readlineSync.question() to prompt a user for input
input = readline.question('Please enter the word or phrase you would like to index: ');

//2. Prompt a user for an index number to find the character at that index
indexValue = readline.questionInt('Please enter the index value you would like to return: ');

//3. Use bracket notation to access the character
output = input[indexValue];

//4. Print out the character
console.log('The value of \'' + input + '\' at index ' + indexValue + ' is \'' + output + '\'');

