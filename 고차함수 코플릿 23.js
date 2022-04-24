// 문제
// number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열

// 출력
// number 타입을 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 반드시 arr.reduce를 이용해서 풀어야 합니다.

// 입출력 예시
let output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6

function computeSumOfAllElements(arr) {
  return arr.reduce(function(i,k){
    return i + k
  },0)
}

//배열의 모든 요소의 합을 return 한다.
