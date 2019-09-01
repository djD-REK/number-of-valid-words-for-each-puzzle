import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"];
const puzzles = [
  "aboveyz",
  "abrodyz",
  "abslute",
  "absoryz",
  "actresz",
  "gaswxyz"
];

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
const findNumOfValidWords = (words, puzzles) => {
  var sum;
  return puzzles.map(puzzle => {
    sum = 0;
    return words.reduce(
      (sum, nextWord) => sum + isValid(nextWord, puzzle),
      false
    );
  });
};

/*
With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:

    word contains the first letter of puzzle.
    For each letter in word, that letter is in puzzle.
    For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage"; while invalid words are "beefed" (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).

Return an array answer, where answer[i] is the number of words in the given word list words that are valid with respect to the puzzle puzzles[i].
*/
const isValid = (word, puzzle) => {
  let conditionOne = word.match(puzzle[0]) !== null ? true : false;
  let conditionTwo = word.split("").every(letter => puzzle.match(letter));
  return conditionOne & conditionTwo;
};

console.log(findNumOfValidWords(words, puzzles));

/*Example :

Input: 
words = ["aaaa","asas","able","ability","actt","actor","access"], 
puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
Output: [1,1,3,2,4,0]
Explanation:
1 valid word for "aboveyz" : "aaaa" 
1 valid word for "abrodyz" : "aaaa"
3 valid words for "abslute" : "aaaa", "asas", "able"
2 valid words for "absoryz" : "aaaa", "asas"
4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
*/
