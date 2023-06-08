function flatArray(nestedArray) {
    const depth = JSON.stringify(nestedArray).split('').filter(char => char === '[').length-1;
    return nestedArray.flat(depth)
};

console.log(flatArray([[95, [5]]]))