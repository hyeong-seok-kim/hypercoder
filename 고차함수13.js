let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

output = getIndex([10, 5, 1, 3], 13);
console.log(output); // --> 4

function getIndex(arr, num) {
  const count = arr.filter(i => {return i<num})
  return count.length
}

//다른거 다 무시하고 그냥 입출력 예시만 놓고봤을 때 num값보다 작은 값을 구하고 그 수량을 return하라는 것처럼 보였음.