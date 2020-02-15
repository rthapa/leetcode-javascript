/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ret = [];
    for(let i=1;i<=n;i++){
        
        if((i%3) === 0 && (i%5) === 0){
            ret.push("FizzBuzz");
            continue;
        } 
        
        if((i%3) === 0) {
            ret.push("Fizz");
            continue;
        }
        
        if((i%5) === 0) {
            ret.push("Buzz");
            continue;
        }
        
        ret.push(i.toString());
    }
    
    return ret;
};
