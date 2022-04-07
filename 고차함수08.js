function square(num) {
  return Math.pow(num, 2);
}

function mul10(num) {
  return num * 10;
}

let output = mapCallback(square, [2, 4, 7]);

//Math 객체에 pow메서드를 이용하면 0번 인덱스 인자에 1번 인덱스 number만큼 제곱해준다.

function mapCallback(func, arr) {
  const arrays = arr;
  let result = [];

    for(value of arrays) {
      let output = func(value);
      result.push(output);
    } 
  return result;
}
