function isAnagram(s: string, t: string): boolean {
    if (s.length > t.length || t.length > s.length) return false

    const charsCount: Map<string, number> = new Map()

    for (const char of s) {
        charsCount.get(char) ? charsCount.set(char, (charsCount.get(char) || 0) + 1) : charsCount.set(char, 1)
    }

    for (const char of t) {
        if (charsCount.get(char)) {
            charsCount.set(char, (charsCount.get(char) || 0) - 1)
            continue
        }
        return false
    }

    for (const [_, count] of charsCount) {
        if (count > 0) return false
    }

    return true;
}

const testCases = () => {
    // Test cases

    // result: true
    // performance.mark('startTestCase1')
    console.log(isAnagram('anagram', 'nagaram'))
    // performance.mark('endTestCase1')
    // console.log(performance.measure('startTestCase1', 'endTestCase1'))

    // result: true
    console.log(isAnagram('rat', 'car'))
};

testCases()
