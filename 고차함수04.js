function square(num) {
    return num * num;
  }
  
  function add5(num) {
    return num + 5;
  }
  
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  let output = compose(add5, square, 2);
  console.log(output); // --> 9
  
  output = compose(square, add5, 2);
  console.log(output); // --> 49
  
  output = compose(isOdd, add5, 2);
  console.log(output); // --> true
    
  function compose(func1, func2, num) {
    return func1(func2(num));
  }
  