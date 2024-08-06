

/**
 * 1. Given an input string, lettersOnly @returns preserves
 * only the letters a-z (non-case sensitive).
 */
const lettersOnly = (str = '') => str.replace(/[^a-z]/gi, '')

/**
 * 2. Fibonacii summation of odd numbers
 */
const sumOddFibonacciValuesLessThan = (threshold) =>
    (function sumOddFibUntilThreshold(sum, memoized) {

        const next = memoized[memoized.length - 2] + memoized[memoized.length - 1]

        if (next > threshold) {
            return sum
        }

        const newSum = next % 2 === 1
            ? sum + next
            : sum

        return sumOddFibUntilThreshold(newSum, memoized.concat(next))
    })(1, [1, 2])


/**
 * 3. Max product of palindromic number (having X digits)
 */
const findMaxProductInPalindromeHavingDigitCountOf = (digitCount) => {
    const isPalindrome = (str) => {
        if (!str) return false

        const middleIdx = Math.floor(str.length / 2)

        for (let i = 0; i < middleIdx; i++) {
            if (str[i] !== str[str.length - (i + 1)]) {
                return false
            }
        }
        return true
    }

    const maxNumOfDigitCount = Math.pow(10, digitCount) - 1
    const minCutoff = Math.floor(maxNumOfDigitCount / 10)
    let maxProduct = 0

    for (let i = maxNumOfDigitCount; i > minCutoff; i--) {
        for (let j = i; j > minCutoff; j--) {

            const product = i * j
            if (isPalindrome(`${product}`) && product > maxProduct) {
                maxProduct = product
            }
        }
    }

    return maxProduct
}

const maxProduct = findMaxProductInPalindromeHavingDigitCountOf(3)
const sumOfOddFibonacciValuesLessThanTenMill = sumOddFibonacciValuesLessThan(10_000_000)
const value = lettersOnly("@e^*q--u&%a*__lity   ")

console.log({ maxProduct, sumOfOddFibonacciValuesLessThanTenMill, value })
