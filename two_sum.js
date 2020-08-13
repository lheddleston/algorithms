/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 
 * nums = [2, 7, 11, 15]
 * target = 9
 * output = [0, 1]
 */
const twoSum = (nums, target) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let otherHalf = target - nums[i];
        if (otherHalf in map) {
            console.log("map", map);
            return [map[otherHalf], i];
        }
        map[nums[i]] = i;
    }
    return null;
};