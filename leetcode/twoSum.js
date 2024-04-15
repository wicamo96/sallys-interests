/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Brute Force
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
*/

// Hash map
var twoSum = function(nums, target) {
    let hashMap = []

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const check = target - cur;
        const findHash = hashMap.find(hash => hash.num === check)
        if (findHash !== undefined) {
            return[i, findHash.index]
        }
        hashObject = {num: nums[i], index: i}
        hashMap.push(hashObject)
    }
}