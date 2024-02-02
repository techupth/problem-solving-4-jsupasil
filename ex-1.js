function pivotIndex(nums) {
  const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  let index = 0;
  let leftAccumulator = 0;
  let rightAccumulator = sum;

  while (index < nums.length) {
    rightAccumulator -= nums[index];
    if (leftAccumulator === rightAccumulator) {
      return index;
    }
    leftAccumulator += nums[index];
    index++;
  }
  return -1;
}

let nums1 = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums1));

let nums2 = [1, 2, 3];
console.log(pivotIndex(nums2));

let nums3 = [2, 1, -1];
console.log(pivotIndex(nums3));
