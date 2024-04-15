
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

twoSum([2,7,11,15], 9)