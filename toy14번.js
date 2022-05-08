// 문제
// 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

// 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
// 예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

// 입력

// 인자 1 : rotated
// number 타입을 요소로 갖는 배열
// rotated[i]는 정수

// 인자 2 : target
// number 타입의 정수

// 출력
// number 타입을 리턴해야 합니다.

// 주의사항
// rotated에 중복된 요소는 없습니다.
// target이 없는 경우, -1을 리턴해야 합니다.

// // 
// const rotatedArraySearch = function (rotated, target) {
//     const maxNumber = Math.max(...rotated); // ---> 6
//     const maxNumberIndex = rotated.indexOf(maxNumber) ;// 2번 인덱스에 가장 큰 값이 있음.
//     // 그럼 0번 인덱스부터 2번인덱스까지 잘라서 뒤로 붙여주면 됨.
//     const sliceFront = rotated.slice(0,maxNumberIndex+1); // 0번 인덱스부터 2번 인덱스까지 잘랏음.
//     const sliceRear = rotated.slice(4);    // 3번 인덱스부터 잘랏음.
//     // 이제 이 둘을 합침
//     const mergeArray = sliceRear.concat(sliceFront);
//     //console.log(mergeArray)
//     // 이진 탐색으로 탐색 시작.
    
//     // 재귀함수를 이용해서 찾아본다.
//     const two = function(filterArray, array, target) {
//         const 기준index = Math.round(filterArray.length/2);
//         console.log(`기준 인덱스 : ${기준index}`)
//         console.log(array)
//         console.log(filterArray)
//         console.log('---------')
        
//         if(filterArray[기준index] > target) {
//             console.log('a')
//             // 가운데라고 할 수 있는 숫자가 타겟보다 크면,
//             two(filterArray.slice(0, 기준index), array, target);
//         } else if(filterArray[기준index] < target) {
//             console.log('b')
//             two(filterArray.slice(기준index+1), array, target)
//         } else if(filterArray[기준index] === target) {
//             console.log('c')
//         }
        
        
//     }
//     // 재귀함수 실행.
//     two(mergeArray, mergeArray ,target);
// };

// let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
// console.log(output); // --> 5

// naive solution
// const rotatedArraySearch = (rotated, target) => {
//   for (let i = 0; i < rotated.length; i++) {
//     if (rotated[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

// 레퍼런스 코드
const rotatedArraySearch = function (rotated, target) {
  // left, right 값을 저장해주는 것이 핵심인데 자꾸 까먹음...
  let left = 0,
    right = rotated.length - 1;
  // right값이 left보다 작아지는 순간까지 반복하는 반복문 생성
  while (left <= right) {
    // middle값을 찾는건 나랑 같았네,, 다만 나는 Math.round 메소드로 반올림을 해준 것.
    let middle = parseInt((right + left) / 2);

    // 레퍼런스에서는 재귀함수를 쓰지 않았음...
    // 가운데 위치한 값이 당히 target이면 그냥 리턴하면 되니까.
    if (rotated[middle] === target) {
      // 밑에서 보니까 middle값을 -1, +1 해가면서 middle값으로 범위를 점차 줄여나가고
      // middle값은 계속해서 인덱스 값을 저장하고 있으니 결과적으로 여기서 리턴하는 값이
      // 처음에 받은 배열 인자의 주소값과의 비교에도 문제가 없는 결과 값을 가질 수 있는 것임.
      return middle;
    }
    // 가장 우측 값이 가장 좌측 값보다 크다는건 
    // 여기서 첫 if문의 취지는 middle값 이동을 최소화하기 위함인듯함.
    // 그래서 계산을 최소화 하려고.
    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      // target값이랑 매칭되는 값이 좌측에 있다는 뜻.
      // 그래서 right의 값을 middle값에서 -1한 거로 정정한다.
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } // 
        else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1
