// 문제
// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// 임의의 요소가 담긴 배열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(for, while) 사용은 금지됩니다.
// 같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴해야 합니다.
// 배열에는 문자열 외에 다른 요소들이 있을 수 있습니다.
// 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴해야 합니다.


function findShortestWord(arr) {
            
  if(arr.length !== 0) {
      if(typeof(arr.reduce(function(k,l){return k+l})) !== 'number') { //배열 요소의 합이 number타입이면 문자열이 없다고 판단
          const aa = arr.filter(i => {
              if(typeof(i)==='string') { //           
                  return i
              } 
          })
          const bb = aa.map(j => { //각 문자열 요소의 길이를 반환
              return j.length         //가장 길이가 짧은 문자열이 무엇인지도 알아야함.
          })
          const cc = Math.min(...bb) //가장 길이가 짧은 숫자가 뭔지 찾아서 cc에 저장함.
                                      //그럼 이제 짧은 숫자가 bb에서 몇번 인덱스에 있는지 찾아야함.
          
          const dd = bb.indexOf(cc)  //bb배열에서 cc에 담긴 짧은 숫자가 몇번 인덱스에 위치한지 저장함.
          return aa[dd]
      } else {
          return ''
      }

  } else {
      return ''
  }
}

let output = findShortestWord([4, 'two', 2, 'three']);
console.log(output); // --> 'two'