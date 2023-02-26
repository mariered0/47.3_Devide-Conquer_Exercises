function sortedFrequency(arr, val) {
    let firstValIdx = findFirst(arr, val);
    if (firstValIdx === -1) return firstValIdx;
    let lastValIdx = findLast(arr, val);

    return lastValIdx - firstValIdx + 1;
}

// L        M        R
// L  M  R        
//      L/R     M is idx2 === firstIdx   
//[1, 1, 2, 2, 2, 2, 3] 2
// 0  1  2  3  4  5  6  idx

function findFirst(arr, val, leftIdx = 0, rightIdx = arr.length - 1){
    if(leftIdx <= rightIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        if((middleIdx === 0 || val > arr[middleIdx - 1]) && arr[middleIdx] === val){
            return middleIdx;
        }else if(val > arr[middleIdx]){
            return findFirst(arr, val, middleIdx + 1, rightIdx)
        }else{
            return findFirst(arr, val, leftIdx, middleIdx - 1)
        }
        
    }
    return -1;
}

// L        M        R
//             L  M  R = M idx is 5
//[1, 1, 2, 2, 2, 2, 3] 2
// 0  1  2  3  4  5  6  idx

function findLast(arr, val, leftIdx = 0, rightIdx = arr.length -1){
    if(leftIdx <= rightIdx){
        let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
        if((middleIdx === arr.length -1 || val < arr[middleIdx + 1]) && arr[middleIdx] === val){
            return middleIdx;
        }else if(val < arr[middleIdx]){
            return findLast(arr, val, leftIdx, middleIdx -1)
        }else{
            return findLast(arr, val, middleIdx + 1, rightIdx);
        }
    }
    return -1;
}

module.exports = sortedFrequency

