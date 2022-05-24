// 문제
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소를 갖는 배열
// 출력
// 배열의 모든 요소들을 깊이 1 까지 단일 배열로 이어붙인 배열을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// arr.flat 사용은 금지됩니다.


function joinArrayOfArrays(arr) {
  const aa = arr.reduce(function(a,b) {
    return a + ',' + b;
  })
  return aa.split(',');
}

//2차원 배열을 입력 받고. 배열들의 요소를 모두 담은 단일 배열형태로 return할 것.
//2차원 배열 안에 있는 배열의 요소들을 모두 바깥으로 빼서 배열로.
let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']