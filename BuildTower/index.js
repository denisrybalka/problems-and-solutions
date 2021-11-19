/*

Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

*/

const towerBuilder = floors => {
  let arr = [];
  let n = 0;
  let a = Math.floor((floors * 2 - 1) / 2);
  
  for (j = 0; j < floors; j++) {
    let str = '';
    for (i = 0; i < floors * 2 - 1; i++) {
      str = str.concat(" ");
    }
    arr.push(str);
  }
  
  for (i = 0; i < floors; i++) {
    for (j = 0; j < 1; j++) {
      arr[i] = arr[i].split('');
      arr[i][a] = "*";
      arr[i][a+n] = "*";
      arr[i][a-n] = "*";
      arr[i] = arr[i].join('');
      n++
    }
    if (i != arr.length-1) {
      arr[i+1] = arr[i];
    }
  }

  return arr;
}