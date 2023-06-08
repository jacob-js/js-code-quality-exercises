/**
 * A function which takes in a number and checks whether it's prime or not
 * @param {Number} num 
 * @returns {Boolean}
 */
function isPrime(num){
    let divisibleTimes = 0;
    for(let i=1; i <= num; i++){
        if(num % i === 0) divisibleTimes += 1;
        if(divisibleTimes > 2) break;
    };
    return divisibleTimes === 2;
};

console.log(isPrime(11))