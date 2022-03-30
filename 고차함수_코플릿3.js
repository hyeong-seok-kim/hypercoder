//함수와 수(num)를 입력받아 num에 함수를 두 번(twice) 적용(apply)한 결과를 리턴해야 합니다.

function square(num) {
    return num * num;
  }
  
  let output = applyTwice(square, 2);
  console.log(output); // --> 16
  
  function add5(num) {
    return num + 5;
  }
  
  output = applyTwice(add5, 3);
  console.log(output); // --> 13
  
  function applyTwice(func, num) {
    const multiple = func(num);  //square, 2를 인자로 받으면 4를 return함 근데 여기서 한번 더 호출하도록 해야함.
    return func(multiple)
  }
  