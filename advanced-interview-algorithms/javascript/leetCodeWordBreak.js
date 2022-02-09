// https://leetcode.com/problems/word-break
// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function (s, wordDict) {
//   const splitSentance = s.split("");
//   let temp = "";
//   for (let i = 0; i < splitSentance.length; i++) {
//     temp = temp + splitSentance[i];
//     if (wordDict.includes(temp)) {
//       temp = "";
//     }
//   }
//   return !temp ? true : false;
// };

// better solution

var wordBreak = function (s, wordDict) {
  const map = {};
  function run(s) {
    if (map.hasOwnProperty(s)) {
      return map[s];
    } else if (s == "") {
      return true;
    }
    for (let i = 0; i <= s.length; i++) {
      if (wordDict.includes(s.slice(i)) && run(s.slice(0, i))) {
        map[s] = true;
        return true;
      }
    }
    map[s] = false;
    return false;
  }
  return run(s);
};

let sentance1 = "leetcode";
let dict1 = ["leet", "code"];
// true
let sentance2 = "catsandog";
let dict2 = ["cats", "dog", "sand", "and", "cat"];
// false

let sentance3 = "aaaaaaa";
let dict3 = ["aaaa", "aaa"];
// true
console.log(wordBreak(sentance3, dict3));
