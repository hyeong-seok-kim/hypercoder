// 문제
// 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 없는 알파벳 소문자 문자열

// 출력
// 배열(arr)을 리턴해야 합니다.
// arr[i]는 각 부분집합의 원소로 구성된 문자열

// 주의사항
// arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
// arr[i]는 알파벳 순서로 정렬되어야 합니다.
// 집합은 중복된 원소를 허용하지 않습니다.
// 부분집합은 빈 문자열을 포함합니다.
// arr은 사전식 순서(lexical order)로 정렬되어야 합니다.

const powerSet = function (str) {
  // new Set을 이용해서 str로 들어오는 문자열에서의 중복을 없애고
  // Array.from 을 이용하여 문자열 각각의 인덱스를 추출해 배열로 만들어줌
  // Array.from 의 두번째 인자값에 대해서는 추가로 공부해볼 것.
  const set = Array.from(new Set(str));
  
  // set 배열의 요소들을 알파벳 순서로 정렬함.
  set.sort();
  
  //join메소드를 이용해서 set 배열 안에 있는 모든 요소를 하나의 문자열로 합침
  let newStr = set.join("");
  
  // 빈배열을 생성한 후,
  let result = []; 
  
  // 재귀함수를 발생하기 위한 recursion함수를 만들고, 첫 번째 인자에 문자열, 두번째 인자에 인덱스(?) 
  function recursion(string, begin) {
      // 위에서 생성한 result 빈 배열에 인자로 전달된 문자열 값 push.
      result.push(string);
      console.log(`begin : ${begin}`)
      console.log(string)
      // 반복문을 생성하는데 newStr문자열의 길이만큼 반복하는데
      // 재귀함수 호출을 이용한다.
      // 이럴 경우 반복문 내에 존재하는 recursion 함수의 첫번째 인자에는 기존 string에 newStr의 문자열 인덱스가 차례로 붙은채로 반복 호출된다.
      for(let i = begin ; i<newStr.length ; i++) {
        recursion(string + newStr[i], i+1);
        // for문에서 i++ 가 되는 부분하고 recursion 함수에서 재귀호출할 때 두번째 인자에
        // i+1을 해줌으로써 dfs트리를 이용하여 부분집합 생성 과정에중복이 없도록 할 수 있었던 것...
        // 예를들어 첫 단계에서 a라는 문자열이 만들어지고 재귀호출로 전달되면 거기서 둘로 나뉠 때
        // 첫번째 분기에서는 정상적으로 b라는 문자열을 받아 a문자열에 붙일 수 있지만,
        // for문 내에서 한번 실행 된 후이므로, i값이 상승하여 b가 아닌 c를 받을 수 밖에 없는 것.
      }
  }
  // recursion 재귀함수를 호출한다. 해당 실행에서 결과 값에 공집합을 넣는다.
  recursion('',0);
  return result;
};

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']


