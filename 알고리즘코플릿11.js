let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]

function removeExtremes(arr) {
    let strLength = []
    let max = 0
    let min = 0
    let maxIndex = 0
    let minIndex = 0
    
    arr.filter(value => {
      strLength.push(value.length)
    })
      max = Math.max.apply(null, strLength)//배열 중 최대 값
      min = Math.min.apply(null, strLength)  //배열 중 최소 값
      for(let i = strLength.length ; i > 0 ; i--) {
          if(strLength[i] === max) {
              maxIndex = i
              i = -1
          }
      }
          for(let i = strLength.length ; i > 0 ; i--) {
          if(strLength[i] === min) {
              minIndex = i
              i = -1
          }
      }
      arr.splice(maxIndex,1);
      if(maxIndex > minIndex ){
          arr.splice(minIndex,1);
      } else {
          arr.splice(minIndex-1,1);
      }
      return arr
  }