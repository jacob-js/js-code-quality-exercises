/**
 * This function takes in a nested array and check its nesting depth and then it returns a flatten array
 * @param {Array} nestedArray 
 * @returns
 */

function flatArray(nestedArray) {
    const depth = JSON.stringify(nestedArray).split('').filter(char => char === '[').length-1;
    return nestedArray.flat(depth)
};