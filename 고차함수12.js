let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {
  return words.filter(i => {return i.length % 2 === 1})
}

//길이가 홀수인 문자열을 요소로 갖는 배열을 리턴하도록
//여기서 words가 배열이라는 것을 눈치채야함. 왼쪽에 입출력 예시만 봐도 배열을 인자값으로 넣어주는걸 왜 눈치 못챗는가 반성