const removeFromArray = function(nums, ...args) {
    let result = [];
   for(let i = 0; i < nums.length; i++){
        if(!args.includes(nums[i])){
        result.push(nums[i]);
        }
   }
   return result;
}
// Do not edit below this line
module.exports = removeFromArray;
