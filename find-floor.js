//this function returns the floor of x
//it output the greatest integer less than or equal to x.

function findFloor(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    //everything was checked, and nothing is matched
    if(leftIdx > rightIdx) return -1;

    //arr is sorted, so if largest num in arr matches, return that value
    if(val >= arr[rightIdx]) return arr[rightIdx];
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    //if middle value is the value, return that value
    if(arr[middleIdx] === val) return arr[middleIdx];


    if(middleIdx > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]){
        return arr[middleIdx - 1];
    }

    if (val < arr[middleIdx]){
        return findFloor(arr, val, leftIdx, middleIdx - 1);
    }
    return findFloor(arr, val, middleIdx + 1, rightIdx);
}

// L         M           R
// L     R                 => R value is the match, so 8 is returned.
//[1, 2, 8, 10, 10, 12, 19] 9
// 0  1  2  3   4   5   6  idx

module.exports = findFloor