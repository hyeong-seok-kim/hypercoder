// 문제
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 새로운 배열을 리턴해야 합니다.

// 입력
// 인자 1 : obj
// 임의의 속성을 갖는 객체
// 인자 2 : property
// string 타입의 키

// 출력
// 새로운 배열을 리턴해야 합니다.

// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 주어진 키에 해당하는 값이 배열인 경우, 해당 배열은 number 타입의 정수만을 요소로 갖는다고 가정합니다.
// 주어진 보조 함수(square)를 사용해야 합니다.

const obj = {
  key: [2, 1, 5],
};

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  if(Array.isArray(obj[property])) {
    return obj[property].map(square)
  } else {
    return []
  }

}

//객체의 키 값이 배열인 경우, 배열의 요소를 제곱한 배열로 return