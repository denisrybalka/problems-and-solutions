/*

Write a function that takes a string of braces, and determines if the order of the braces is valid.

It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

const validBraces = (str) => {
  let stack = [];
  const open = ["(", "[", "{"], close = [")", "]", "}"];
  str = str.split("");
  for (let i in str) {
    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (close.indexOf(str[i]) == open.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};
