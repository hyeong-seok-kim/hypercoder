let output = insertDash('454793');
console.log(output); // --> 4547-9-3

// 문자열을 입력받음.
// 홀수가 연속되면 그 사이에 -를 붙인다.

function insertDash(str) {
    let result = 0
    for(let i = 0 ; i<str.length ; i++) { // 문자를 한자리씩 나눠야함.
        if(result===0) { //첫 시작일 땐 0에 숫자로 더해주자 
            
        }       //이제 넣으려는 값             이미 들어가있는 값
        if(Number(str.charAt(i))%2===1 && Number(result.charAt(i)%2===1)) {  //홀수일 때, 현재 값도 홀수여야함.
            result += '-' + str.charAt(i)
            console.log(i)
        } else {                    //짝수여서 그냥 넣을 때
            result += str.charAt(i)   //저장은 문자로함.
            console.log(i)
        }
        console.log(result)
    }
    result = result.slice(1)
    return result
}