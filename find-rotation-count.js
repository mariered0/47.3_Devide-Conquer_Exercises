function findRotationCount(arr) {
    return findMiddle(arr);
}

//find where the dividing point is, then return that index of it.

//  S      M      E
// [7, 9, 11, 12, 5] // 4
//  0  1  2   3   4     idx

function findMiddle(arr){
    if(arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
        let middleIdx = Math.floor((startIdx + endIdx) / 2);
        if(arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1;
        else if(arr[startIdx] <= arr[middleIdx]){
            startIdx = middleIdx + 1;
        }else{
            endIdx = middleIdx - 1;
        }
    }
}

module.exports = findRotationCount