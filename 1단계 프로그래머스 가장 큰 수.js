// 가장 큰 수
// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

// function solution(numbers) {
//     var answer = '';
//     numbers.sort(sortFunc)
//     answer = numbers.join('')
//     if(answer[0] === '0') return '0'
//     return answer;
// }
// const sortFunc =  (a,b) =>{
//     const compareA = parseInt(a.toString() + b.toString())
//     const compareB = parseInt(b.toString() + a.toString())
//     return compareB - compareA
// }

// const input = [6, 10, 2]	// ---> 6210
// solution(input)

function solution(number, k) {

    let numbering = number.split("").map(Number);//문자열을 배열로 만들어주자
    let arr =[];

    //반복되는 수는없음
    //k가 최댓값일때 나올수 있는 가장 큰 숫자는 9
    //numbering에서 k개의수를 제거했을때 얻을 수 있는 배열을 구현하면 끝남
    //arr.pop()사용하면 마지막요소를 제거하고 그요소를 반환한다.
    for(let i=0; i < numbering.length;i++){
        let x = numbering[i];

        while(true){
            //다지웠을때 멈춰야함
            if(k == 0){
                break; 
            }
            //arr현재숫자가 마지막 숫자보다 작을떄 arr 마지막 숫자를 제거해야함 현재숫자는[arr.length-1]번째 마지막숫자는 for문에서 돌고있는 numbering[i]임
            if(arr[arr.length -1] < x){
                arr.pop();
                k--;
            }
            else{
                break;
            }

        }
        arr.push(x);//제거하고 숫자넣기

    }
    //뒤에서부터 k개만큼 제거하려면 arr.length -k부터 k까지 splice로 설정해줘야함
        arr.splice(arr.length - k, k);
        let answer = arr.join('');

        return answer;
}
   //조합을 쓰기엔 number의 크기가 너무크다 앞에서부터 제거해줘야할듯

