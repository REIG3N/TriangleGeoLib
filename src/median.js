/**
 * Calculates the median of a triangle side.
 *
 * @param {number} length Any type of number (excluded Boolean, String and NaN variables types).
 * @returns {string} The median of the triangle side you target (example : a side of the triangle is opposite to another side and its length is 7, so you'll have the median of that side).
 */

export default function median(length){
    const result = length / 2

    console.log(`The median is : ${result}`) // For verify the calculus result directly

    // Convert number in a character strings
    const stringedNumber = length.toString();

    // Verify if the number have at least one number after comma
    const regex = /\.(\d+)/;
    const afterCommaNumbers = regex.test(stringedNumber);

    // Return the suitable message if the input isn't a number
    if(isNaN(result)) {

        return NaN // Return a non number type as a error message

    }

    // Return the suitable message if the result is a number
    if(!isNaN(result) && afterCommaNumbers) {

        const fixedResult = result.toFixed(1) // Round the initial result

        const message = `Exact Median result: ${result} -> Rounded Median result : ${fixedResult}`
        return message

    } else {

        const message = `Median result : ${result}` // Keep the initial result
        return message
        
    }

}