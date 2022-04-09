let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]

function keep(arr, keeper) {
  return arr.filter(i => {return i===keeper})
}
