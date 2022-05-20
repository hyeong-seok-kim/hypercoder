// 문제 설명
// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

// 제한사항
// 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
// 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
// i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
// computer[i][i]는 항상 1입니다.
function solution(n, computers) {
    // answer는 최종 리턴할 네트워크 수를 카운트
    let answer = 0;
    // 방문한 노드들이 체크될 배열
    let visit = []; 
    
    // 방문한 노드들을 체크할 배열을 생성
    for(let i=0; i<n; i++){
        visit.push(false);
    }
    
    // 방문한 노드들이 체크되는 코드
    // 재귀함수로 작성.
    function DFS(idx){
        console.log('a')
        visit[idx] = true;
        
        for(let i=0; i<n; i++){
            // 네트워크가 연결되어 있고, 아직 방문하지 않은 상태라면 
            // 해당 컴퓨터를 다시 DFS 수행
            if(computers[idx][i] === 1 && !visit[i]){
                DFS(i);
            }
        }
    }
    
    //방문한 노드들이 체크되는 재귀함수 코드를 실행하는 코드
    for(let i=0; i<n; i++){
        // 해당 노드가 방문하지 않았다면,
        // 재귀로 파고들고, 재귀를 판다는건 방문 상태를 확인한다는 것이고,
        
        
        // 순서대로 0번 요소부터 visit에는 방문한 노드가 체크될거니까
        // 만약 2번 요소가 true라면 이미 방문이 되었을테니 건더 뛸거고 카운트가
        // 순차적으로 모두 체크가 되겟네.
        if(!visit[i]){
            DFS(i);
            answer++;
        }
    }
    return answer;
}

const input1 = 5;
const input2 = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 1], [1, 0, 0, 0, 1]]  // ---> 1

console.log(solution(input1, input2))

