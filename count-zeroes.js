function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

// L     M        R
//          L     R
//          L  M  R this idx of 4 is the starting point
//[1, 1, 1, 1, 0, 0]
// 0  1  2  3  4  5 idx


//this function finds the first 0 in the array
function findFirst(arr, leftIdx = 0, rightIdx = arr.length -1){
  if(leftIdx <= rightIdx){
    let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
    
    //check if left side of middleIdx is 1 and middleIdx value is 0
    if((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0){
      return middleIdx;

    }else if (arr[middleIdx] === 1){
      return findFirst(arr, middleIdx + 1, rightIdx)
    }
    return findFirst(arr, leftIdx, middleIdx - 1)
  }
  return -1;
}

module.exports = countZeroes