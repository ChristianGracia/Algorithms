/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const splitSentance = s.split("");
  let temp = "";
  for (let i = 0; i < splitSentance.length; i++) {
    temp = temp + splitSentance[i];
    console.log(temp);
    if (wordDict.includes(temp)) {
      console.log("here");
      temp = "";
    }
  }
  return wordDict.includes(temp) || !temp ? true : false;
};

// let sentance = "leetcode";
// let dict = ["leet", "code"];
// true
// let sentance = "catsandog";
// let dict = ["cats", "dog", "sand", "and", "cat"];
// false

let sentance = "aaaaaaa";
let dict = ["aaaa", "aaa"];
// true
console.log(wordBreak(sentance, dict));
