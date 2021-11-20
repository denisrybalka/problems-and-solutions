/*

Write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


*/

const incrementString = (str) => {
  str = str.split("");
  let out = str.filter((a) => a != +a);
  let num = str.filter((a) => a == +a).map((a) => +a);
  while (num[0] == 0 && num.length > 1) {
    out.push("0");
    num.shift();
  }
  num = num.join("");
  if (num.includes("9") && out.includes("0")) out.pop();
  return out.join("").concat(++num);
};
