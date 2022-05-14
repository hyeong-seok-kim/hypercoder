// 문제
// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴해야 합니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.


function getLongestElement(arr) {
    
  if(arr.length !== 0) {
    const aa = arr.map(i => {                
        return i.length;  // aa 변수 안에 각각 배열 요소의 글자수로 저장함.
    })
    const bb = Math.max(...aa); // bb변수 안에는 배열 요소 중 가장 큰 숫자를 찾음.

    const cc = aa.indexOf(bb) //aa변수 중에서 가장 큰 숫자라고 생각되는 요소의 위치를 찾음.
    return arr[cc];
  } else if(arr.length === 0) {
    return ''
  }
} 

//문자열을 요소로 갖는 배열을 입력하면 그중 가장 긴 문자열을 return한다.
//각 배열 요소의 글자수를 파악한다.
//파악된 숫자중 가장 큰 숫자의 인덱스 값을 기억한다.

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

output = getLongestElement(['one', 'two', 'wow']);
console.log(output); // --> 'one'
