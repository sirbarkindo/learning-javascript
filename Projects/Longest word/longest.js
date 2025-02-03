// 'use strict';

function longestWord(str) {
    let words = str.split(' ');
    let longestWord = '';


    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    }

    return longestWord;
}

console.log(longestWord('I love My Job and bogs.'));
console.log(longestWord('and word always go to work.'));
