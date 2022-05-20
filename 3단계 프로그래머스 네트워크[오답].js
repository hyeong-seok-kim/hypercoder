// 문제 설명
// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

// 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

// 제한사항
// 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
// 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
// i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
// computer[i][i]는 항상 1입니다.

function solution(n, computers) {
    // network 배열에 들어간 숫자를 지워가면서 남은 네트워크의 수를 카운터하여 return 하자
    let network = [];
    for(let i = 0 ; i < n ; i++) {
        network.push(1)
    }
    // 일단 처음 들어오는 n이 아무것도 연결이 안되어 있으면 결국 이게 return되야하니까 이걸 사용해보자
    function recursive(index, 남은노드) {
        console.log(남은노드)
        console.log(network)
        if(남은노드.length < 1) {
            let result = network.reduce((a,b) => a+b);
            if(network.length === result) {
                return result;
            } else {
                return result+1;
            }
            // 재귀함수 종료 조건
            // network에 마지막까지 연결된 노드가 없는 요소(1)을 모두 더한 값을 리턴.
        }
        //0번 노드 탐색.
        for(let j = 0 ; j < 남은노드[0].length ; j++) {
            console.log(`제발${index}`)
            console.log(`아제발${j}`)
            if(남은노드[0][j] === 1 && j !== index) {
                network[j] = 0;
            }
            //console.log(남은노드[0])  
        }
        // console.log(network)
        // 재귀함수
        return recursive(index+1, 남은노드.slice(1));
    }
    // 재귀 실행
    return recursive(0, computers);
    // 0번 노드부터 차례대로 연결된 노드가 하나 발견될 때마다 n을 줄여나가자
    // 근데 일단 발견된거 이후로 그 노드를 탐색할때 중복이 발생하면...
}

const input1 = 5;
const input2 = [[1, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 1], [1, 0, 0, 0, 1]]  // ---> 1

console.log(solution(input1, input2))

