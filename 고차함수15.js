let output = getDoubledElements([1, 2, 3, 4]);
console.log(output); // --> [2, 4, 6, 8]

function getDoubledElements(arr) {
  return arr.map(i => {return i*2})
}
