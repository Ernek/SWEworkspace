function countZeroes(arr) {
    let count = 0
    let left = 0
    let right = arr.length - 1
    while (left <= right){
        let middleindex = Math.floor((left + right)/2)
        if (arr[middleindex] == 0){
            count += (right - middleindex) + 1 
            right = middleindex - 1 
        } else if (arr[middleindex] == 1){
            left = middleindex + 1
        }
    }
    return count
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]))
console.log(countZeroes([1, 0, 0, 0, 0]))
console.log(countZeroes([0, 0, 0]))
console.log(countZeroes([1, 1, 1, 1]))


// module.exports = countZeroes