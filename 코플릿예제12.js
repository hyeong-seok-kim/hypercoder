let output = findBugInApples([['A'], ['B']]);
console.log(output); //[1, 0]

output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output); //[1, 1]

function findBugInApples(arr) {
    let result = []
    
    for(let i = 0 ; i < arr.length ; i++) { //처음 맞닥뜨리는 배열을 확인
        let inspectArr = arr[i] // 이렇게하면 검사해야할 배열이 들어감.
        console.log(inspectArr)
        
        for(let k = 0 ; k < inspectArr.length ; k++) {
            if(inspectArr[k] === 'B') {
                result.push(i)
                result.push(k)
            }
        }
    }
    return result
}