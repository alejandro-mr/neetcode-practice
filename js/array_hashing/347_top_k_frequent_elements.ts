function topKFrequent(nums: number[], k: number): number[] {
    const count: Map<number, number> = new Map()
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1)
    }

    const frequency: number[][] = []
    for (const [n, c] of count) {
        frequency[c] = [...frequency[c] || [], n]
    }

    const result: number[] = []
    for (const f of frequency.reverse()) {
        if (k <= 0) {
            return result
        }
        if (f && f.length) {
            k = k - f.length
            result.push(...f)
        }
    }
    return result
}

(() => {
    // Test cases

    // result: [1, 2]
    console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

    // result: [1]
    console.log(topKFrequent([1], 1))

    // result: [5, 2, 1]
    console.log(topKFrequent([10, 1, 1, 1, 1, 1, 5, 5, 5, 5, 2, 2, 2, 1, 0], 3))
})()
