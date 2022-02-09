// https://leetcode.com/problems/valid-parentheses
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else if (s[i] != stack.pop()) {
      return false;
    }
  }
  return !stack.length;
};

console.log(isValid("([)]"));
console.log("should be false");
console.log(isValid(")(){}"));
console.log("should be false");
console.log(isValid("[[[]"));
console.log("should be false");

console.log(isValid("()"));
console.log("should be true");

console.log(isValid("()[]{}"));
console.log("should be true");

console.log(isValid("{[]}"));
console.log("should be true");
