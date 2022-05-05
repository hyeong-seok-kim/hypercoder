// 문제
// 임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

// 입력
// 인자 1 : node
// 'value', 'children' 속성을 갖는 객체 (Node)
// 'node.value'는 number 타입
// 'node.children'은 Node를 요소로 갖는 배열

// 출력
// 배열을 리턴해야 합니다.

// 주의사항
// 생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.

// BFS는 최단 거리를 찾을 때 사용.
// 너비 우선 탐색이며, 큐를 이용하여 탐색한다.
// 입출력 예시에서 root에는 1이라는 노드가 저장
// rootChild1에는 root의 branch로 2라는 노드가 연결
// rootChild2에는 root의 branch로 3이라는 노드가 연결
// leaf1에는 rootChild1에는의 branch로 4라는 노드가 연결
// leaf2에는 rootChild1에는의 branch로 5라는 노드가 연결

// 그러고 이렇게 연결된 그래프를 넣었다.

let bfs = function (node) {
  // node에는 그래프가 들어감.
  // 그 그래프를 배열에 담아서 queue 변수에 넣어줌.
  let queue = [node];
  const values = [];
  // queue에 값이 있는 이상 계속해서 반복하는 반복문 생성.
  while (queue.length > 0) {
    // head에는 queue변수에 0번 인덱스 값을 저장한다.
    const head = queue[0];
    // 0번 인덱스 저장 후에는 1번 인덱스부터 잘라내어 다시 queue에 저장.
    queue = queue.slice(1);
    // values에는 최종 return할 값들을 쌓으려고 하는 듯.
    // 쌓이는 값은 queue에 저장되있던 요소(노드 객체)인 head안에 있는 value 값일 것임.
    values.push(head.value);
    // 그러고서 head에 저장된 이 순간의 노드객체에 children 배열의 요소를 각각 queue에 추가해줌.
    // 이렇게 해주는 이유는 '너비 우선 탐색'이니까 children에 존재하는 경우 branch값이니까 해당 branch의 탐색 순서를
    // 뒤로 미루는 개념이라고 이해할 수 있겠음.
    head.children.forEach((child) => queue.push(child));
  }
  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
// 여기서 Node class를 선언해줬네...
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
// Node class에 prototype으로 addChild라는 메소드를 만들어주었음.
// 인자값이 들어오면 해당 인자를 생성되는 객체의 children이라는 배열에 요소르 추가함.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]