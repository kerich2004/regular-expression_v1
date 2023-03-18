arr = [];

function search (inp) {
    for (let i=0; i<inp.length; i++) {
      if (inp == '') {
        return null;
      }
      else if (inp[i] >= 0 || inp[i] == '.') {
        arr.push(inp[i]);
      }
    }
    return +arr.join('');
}

// console.log(search(''))
// console.assert(search('1234567890') == 1234567890, 1);
// console.assert(search('') === null, 2);
// console.assert(search('123asd') === 123, 3);
// console.assert(search('asd123') === 123, 4);
// console.assert(search('asd123asd') === 123, 5);
// console.assert(search('asd123asd 123') === 123123, 6); -
// console.assert(search('123.1') === 123.1, 7);
// console.assert(search('as123.1asd') === 123.1, 8);
// console.assert(search('as123asd.1asd') === 123.1, 9);
// console.assert(search('as123.asd1asd') === 123.1, 10);
// console.assert(search('as.asdasd') === null, 11);
// console.assert(search(123) === 123, 11);
