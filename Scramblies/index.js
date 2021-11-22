/*

Scramblies

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.

Performance needs to be considered

Input strings s1 and s2 are null terminated.

Examples:

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

const scramble = (a,b) => {
  if (a.length > 10000 || b.length > 10000 ) {
    return false;
  }
  a = a.split('').sort();
  b = b.split('').sort();
  for (i = 0; i < a.length; i++) {
    while (b[0] == a[i] && a.length > 0 && b.length > 0) {
      b.shift();
      a.shift();
    }
  }
  return b.length > 0 ? false : true;
}