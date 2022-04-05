function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = compose2(add5, square);
console.log(output(4)); // --> 21

output = compose2(square, add5);
console.log(output(4)); // --> 81

output = compose2(isOdd, add5);
console.log(output(4)); // --> true
  
  function compose2(func2, func1) {
    //compose2 함수에 num로 한번 더 호출하면 결과 값이 리턴되어야 함.
    //함수형태로 return되고 있어야함.

    return function(num) { //이 함수를 리턴해버림
      const output1 = func1(num); //함수의 내용은 output1내용에 
      return func2(output1);
    }
  }

