function twoSum(nums: number[], target: number): number[] {
    const rest: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (i > 0) { rest.set(nums[i - 1], i - 1) }
        if (rest.has(diff)) {
            return [rest.get(diff) || 0, i]
        }
    }
    return [-1, -1]
}

(() => {
    // Test cases

    // result: [1, 2]
    // performance.mark('startTestCase1')
    console.log(twoSum([2, 5, 5, 11], 10))
    // performance.mark('endTestCase1')
    // console.log(performance.measure('startTestCase1', 'endTestCase1'))

    // result: [2, 3]
    console.log(twoSum([1, 3, 4, 2], 6))

    // result: [1, 2]
    console.log(twoSum([3, 2, 4], 6))

    // result: [0, 1]
    console.log(twoSum([3, 3], 6))
})()
