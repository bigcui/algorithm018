/**
  * @param {number[]} nums
  * @return {number}
  */
var removeDuplicates = function (nums) {
    var j = 0;
    var n = nums.length;
    for (var i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[i - j] = nums[i];
        }
        else {
            j++;
        }
    }
    return n - j;
};
// nums = [0,0,1,1,1,2,2,3,3,4],å
console.log('st', new Set([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 'result');
