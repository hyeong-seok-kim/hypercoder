// 문제 설명
// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

// 제한사항
// 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
// 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
// i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
// computer[i][i]는 항상 1입니다.
function solution(n, computers) {
    // 네트워크 수를 카운트할 변수
    let answer = 0;
    const stack = [];
    const visited = Array(n).fill(false);
    let index = 0;
    // 일단 전체 노드를 훑기 위한 반복문
    for(let i = 0 ; i < n ; i++) {
        // 만약 stack에 무언가 있다면 index를 stack에 담긴 값으로
        if(stack.length > 0) {
            index = stack.pop();
        }
        // 여기서 i를 computers의 인덱스로 사용하여 훑을 것이기 때문에
        // i가 카운트 될때마다 그 노드는 방문한 노드가 될 것.
        visited[i] = true;
        // 아래 반복문에서는 노드 하나하나를 훑어서 연결된 노드를 확인하고 
        // 그 노드를 다시 파야함.
        for(let j = index ; j < n ; j++) {
            // 해당 노드와 연결되어 있으면서, 방문한 적이 없는 노드일 경우, 스택에 넣어줘야함.
            if(computers[i][j] === 1 && !visited[j]) {
                stack.push(j);
                console.log(stack)
            }
            if(stack.length === 0 && j === n-1) {
                answer++
            }
            // 스택에 들어간 인덱스는 연결되어 있다는 말인데.
        }
        
    }
    return answer;
}
    


const input1 = 4;
const input2 = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 1, 0, 1]] // ---> 2

console.log(solution(input1, input2)) 
