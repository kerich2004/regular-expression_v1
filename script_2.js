let str = "dsadd33.24eewr";
function search (inp) {
let result = parseFloat(str.match(/[0-9.]+[0-9]/gm));
  return result;
}

console.log(search(str))