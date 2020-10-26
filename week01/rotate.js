var rotate = function (nums, k) {
    var l = nums.length;
   // 通过倒序把 所有位置平移
   for(var i = nums.length;i--;) {
        nums[i+k] = nums[i];
   }
 
   for(var j = k;j-- ;){
     nums[j] = nums[nums.length-k+j]
   }
   nums.length = l;
   console.log(nums);
};
rotate([1,2,3,4,4,5,55],2);
