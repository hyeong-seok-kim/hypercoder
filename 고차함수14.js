const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

function lessThan100(number) {
  return number < 100 && typeof(number) === 'number'
}

function getElementsLessThan100AtProperty(obj, property) {
//객체와 키가 인자값으로 들어옴
//근데 키가 string으로 들어왔음.
  if(Array.isArray(obj[property])) {
    return obj[property].filter(lessThan100) //키를 읽을땐 대괄호였어...
  } else {
    return []
  }
}

//obj는 객체
//property는 키
//키의 값이 100보다 작은 요소만.

//what이라는 키가 다를 때 빈배열로
//키의 값이 배열이 아닌 문자열로 들어오면 빈배열로