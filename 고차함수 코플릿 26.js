// 문제
// 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴해야 합니다.

// 입력
// 인자 1 : records
// 객체를 요소로 갖는 배열
// 인자 2 : value
// string 타입의 문자열
// 출력
// number 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 빈 배열을 입력받은 경우, 0을 리턴해야 합니다.

function calculateScore(records, value) {
  const aa = records.filter(i => {
    return i.animal === value
  })
  const bb = aa.map(j => {
    return j.score
  })

  return bb.reduce(function(a,b){
    return a+b;
  },0)
}
//

const records = [
  {
    score: 63,
    animal: 'dog',
  },
  {
    score: 75,
    animal: 'dog',
  },
  {
    score: 87,
    animal: 'cat',
  },
  {
    score: 98,
    animal: 'cat',
  },
  {
    score: 24,
    animal: 'dog',
  },
];

let output = calculateScore(records, 'cat');
console.log(output); // --> 185

output = calculateScore(records, 'dog');
console.log(output); // --> 162

output = calculateScore([], 'dog');
console.log(output); // --> 0

output = calculateScore(records, 'mouse');
console.log(output); // --> 0