function findRotatedIndex(arr, val) {
    let middleIdx = findMiddle(arr);
    if(middleIdx > 0 && val >= arr[0] && val <= arr[middleIdx - 1]){
        return binarySearch(arr, val, 0, middleIdx - 1);
    } else{
        return binarySearch(arr, val, middleIdx, arr.length - 1);
    }
}

// L  M     R
//[3, 4, 1, 2]  1
// 0  1  2  3  idx

//              S/E  M        findMiddle
// S/E   M                    binarySearch -> -1    
//[37, 44, 66, 102, 10, 22]  14  
// 0   1    2   3    4   5   idx

function binarySearch(arr, val, startIdx, endIdx) {
    if(arr.length === 0) return -1;
    if(val < arr[startIdx] || val > arr[endIdx]) return - 1;

    while (startIdx <= endIdx) {
        let middleIdx = Math.floor((startIdx + endIdx) / 2);
        if(arr[middleIdx] === val){
            return middleIdx;
        }else if (val < arr[middleIdx]){
            endIdx = middleIdx - 1;
        }else {
            startIdx = middleIdx + 1;
        }
    }
    return -1;
}

// L  M     R
//[3, 4, 1, 2]  1
// 0  1  2  3  idx

//              S/E  M  
//[37, 44, 66, 102, 10, 22]  14  
// 0   1    2   3    4   5   idx

//find the dividing point and returns the idx that starts the second group
function findMiddle(arr){
    //if arr only has 1 value or first value is less than the last value, return 0 
    if(arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (startIdx <= endIdx) {
        let middleIdx = Math.floor((startIdx + endIdx) / 2);
        //if the middle value is larger than the next value, return the middleIdx +1
        if(arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1;
        else if (arr[startIdx] <= arr[middleIdx]) {
            startIdx = middleIdx +1
        }else{
            endIdx = middleIdx -1;
        }
    }
}




module.exports = findRotatedIndex