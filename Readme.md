## Problems and solutions
---

### Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

for example, a tower of 3 floors looks like below
```js
[
  '  *  ', 
  ' *** ', 
  '*****'
]
```
and a tower of 6 floors looks like below
```js
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```

[Solution](https://github.com/denisrybalka/problems-and-solutions/tree/master/BuildTower/index.js)

---
### String Incrementor
Write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
```js
foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
```

Attention: If the number has leading zeros the amount of digits should be considered.

[Solution](https://github.com/denisrybalka/problems-and-solutions/tree/master/StringIncrementor/index.js)

---
### Valid Braces
Write a function that takes a string of braces, and determines if the order of the braces is valid.
It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples:
```js
"(){}[]"   =>  True

"([{}])"   =>  True

"(}"       =>  False

"[(])"     =>  False

"[({})](]" =>  False
```

[Solution](https://github.com/denisrybalka/problems-and-solutions/tree/master/ValidBraces/index.js)

---
### Scramblies
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.

Performance needs to be considered.

Input strings s1 and s2 are null terminated.

Examples:
```js
scramble('rkqodlw', 'world') ==> True

scramble('cedewaraaossoqqyt', 'codewars') ==> True

scramble('katas', 'steak') ==> False
```
[Solution](https://github.com/denisrybalka/problems-and-solutions/tree/master/Scramblies/index.js)