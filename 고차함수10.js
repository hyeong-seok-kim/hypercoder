let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

function removeElement(arr, discarder) {
  //사실일 때, 값을 리턴하도록 함수를 만들어 줘야함.
  return arr.filter(function(i){return i!==discarder})
}
//filter는 인자에 꼭 함수가 들어가서 조건을 만들어줘야하고 해당 함수의 인자값이 결과적으로 필터하고자하는 배열 각각의 index값임.
//arr에 배열, discarder에 걸러야하는 인자값을 주었을때. 그냥 바로 걸러지는 값을 return 해야함.