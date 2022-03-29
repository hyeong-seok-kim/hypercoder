let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false

function superIncreasing(arr) {
    let sum = arr[0]
        if (sum < arr[1]) {
            sum = sum + arr[1]
            for(let i = 2 ; i < arr.length ; i++) {
                if(sum < arr[i]) {
                    sum = sum + arr[i]
                } else {
                    return false
                }
            }
        } else if(sum >= arr[1]) {
            return false
        }
        return true
}