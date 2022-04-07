function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

let output = filterCallback(isOdd, [1, 2, 3, 4]);

//배열의 요소 각각의 참 거짓을 판별하도록 한다.

function filterCallback(func, arr) {
  const arrays = arr;
  let result = [];

  for(value of arrays) {
    if(func(value)) {
     result.push(value);
    };
  }
  return result;
}
