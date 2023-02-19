let str = 'sadasd12.32asdas';

arr = [];

for (let i=0; i<str.length; i++) {
    if (str[i] >= 0 || str[i] == '.') {
        arr.push(str[i]);
    }
}
let out = +arr.join('');

console.log( out);
   
