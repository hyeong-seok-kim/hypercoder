// 효율성이 떨어지는 닶.

function solution(participant, completion) {
    const 횟수 = completion.length;
    for(let i = 0 ; i < 횟수 ; i++) {
        let 유효 = participant.indexOf(completion[0])
        if(유효 >= 0) {
            participant.splice(유효,1);
            completion = completion.slice(1);
        }
    }
    return participant[0];
}


const 참여자 = ["mislav", "stanko", "mislav", "ana"]
const 완주자 = ["stanko", "ana", "mislav"]
console.log(solution(참여자, 완주자))// => "leo"