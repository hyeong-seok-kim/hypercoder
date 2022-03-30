//'Hello HoF!' 리턴하는 함수를 리턴해야 합니다.

let output = returnFunction();
console.log(output()); // --> 'Hello HoF!'

function returnFunction() {
  return function(){
    return 'Hello HoF!'
  }
}
