// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// 인자 2 : target
// number 타입의 정수

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// 이진탐색 알고리즘(O(logN))을 사용해야 합니다.
// 단순한 배열 순회(O(N))로는 통과할 수 없는 테스트 케이스가 존재합니다.
// target이 없는 경우, -1을 리턴해야 합니다.

//---------------------------------------------------------------------------------------------

//직접 풀어본 문제
const binarySearch1 = function (arr, target) {
  //우선 배열의 가운데 인덱스를 기준으로 왼쪽에 위치한 요소들이 타겟보다 작으면 우측꺼를 가져오고
  // 그렇지 않으면 좌측꺼를 가져오도록 코딩
  let index = Math.ceil(arr.length/2)
  let result = 0;
  
    if(arr[index-1]===target || arr[0] === target) {
      return arr[index-1];
    } else if(arr[index-1] < target) {
      //target이 가운데 있는 기준 요소의 값보다 크면, 좌측에 값이 없다고 판단하여 우측 범위 값을
      //재귀로 호출.
      return binarySearch(arr.slice(index),target)
    } else if(arr[index-1] > target) {
      // target이 가운데 있는 기준 요소의 값보다 작으면, 좌측에 값이 있다고 판단하여 좌측 범위 값을
      // 재귀로 호출
      return binarySearch(arr.slice(0,index),target)
    }
};

// 위에는 본인이 풀었는데, 문제가 원하는 결과가 처음 인자로 전달된 배열에서의 인덱스 값인걸 간과하고 푼것이 패인.
// 레퍼런스 코드를 보고 어떤식으로 풀어야할지 공부해보고자 함.

const binarySearch = function (arr, target) {
  // 입력된 배열의 좌측 끝, 우측 끝의 인덱스 번호를 left,right 변수에 넣어주었다.
  let left = 0,
    right = arr.length - 1;
  // 위에서 선언된 변수를 통해 right값이 left값보다 작아질 때까지 반복하는 반복문을 사용한다.
  while (left <= right) {
    // middle값을 구하는데 사용한 코드 소수점으로 떨어지더라도 parseInt메소드는 정수로 변환하여 리턴함.
    let middle = parseInt((right + left) / 2);
//  parseInt(string, radix) ---> 문자열을 숫자로 바꾸어주는 메소드
//  < string >
//    - 숫자로 변환할 문자열
//  < radix >
//    - optional
//    - string 문자열을 읽을 진법(수의 진법 체계의 진법)
//    - 2~36의 수

    if (arr[middle] === target) {
      // 그냥 middle 인덱스가 target이면 값을 더이상 구할 필요도 없으니까 바로 리턴
      return middle;
    }
    if (target < arr[middle]) {
      // target으로 선정된 값이 중간 값보다 작을 경우, right변수에는 middle에 -1한 값으로 대체
      // 왜그럴까? 기존 arr 배열을 건들지 않기 위해 그냥 임의의 변수를 이용하여 조율하려고하는거네.
      right = middle - 1;
    } else {
      // 이 조건문 같은 경우는 target이 중간 값보다 클 경우, 즉 해당 값이 우측에 있다고 판단되는 부분
      // 근데 middle에 +1한 값을 left에 넣어줌으로써 
      // 위에 middle값을 재정의할 때, 계속해서 범위가 좁혀짐.
      left = middle + 1;
    }
  }
  // 결국 아무 값도 못찾으면 -1을 리턴.
  return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

// output = binarySearch([4, 5, 6, 9], 100);
// console.log(output); // --> -1