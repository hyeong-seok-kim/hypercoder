let input = [
    //
    'hello',
    'wolrd',
  ];
  let output = readVertically(input);
  console.log(output); // --> 'hweolllrod'
  
  input = [
    //
    'hi',
    'wolrd',
  ];
  output = readVertically(input);
  console.log(output); // --> 'hwiolrd'

  function readVertically(arr) {
    let result = []
    let strLength = []
    
    arr.filter(value => {
    strLength.push(value.length)
    })
    max = Math.max.apply(null, strLength)//배열 중 최대 값
    
    for(let k = 0 ; k < max ; k++) {
        for(let i = 0 ; i<arr.length ; i++){
            let array = arr[i]
            if(array[k] === undefined) {
                result=result
            } else {
                result += array[k]
            }
        }
    }
    return result
}