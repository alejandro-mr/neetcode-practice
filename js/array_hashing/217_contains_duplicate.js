/**
 * @param {number[]} nums
 * @return {boolean}
 */

// const { performance } = require('perf_hooks')

var containsDuplicate = function (nums) {
  let unique = new Map()

  for (const num of nums) {
    if (unique.get(num)) return true

    unique.set(num, true);
  }

  return false

  /* array based implementation
     let unique = []
     if (unique.indexOf(num) > -1) return true
     unique.push(num)
  */
}


const test = () => {
  // Test cases

  // result: true
  //performance.mark('start')
  console.log(containsDuplicate([1, 2, 3, 1]))
  //performance.mark('end')
  //console.log(performance.measure('start', 'end'))
  // result: false
  console.log(containsDuplicate([1, 2, 3, 4]))
  // result: true
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
}

test()
