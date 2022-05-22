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
    let temp = 0;
    const visited = Array(n).fill(false);
    
    // 일단 전체 노드를 훑기 위한 반복문
    
        
    for(let i = 0 ; i < n ; i++) {
        if(!visited[i]) {
            visited[i] = true;
            console.log(visited)
            
            function DFS(index) {
                for(let j = 0 ; j < n ; j++) {
                    if(computers[index][j]===1 && !visited[j]) {
                        visited[j] = true;
                        DFS(j);
                    }
                }
            }
            DFS(i);
            answer++
        }
        
        if(!visited.includes(false)) {  
            return answer;
        }
    }
}

const input1 = 3;
const input2 = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]// ---> 2

console.log(solution(input1, input2))