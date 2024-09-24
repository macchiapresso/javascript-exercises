const sumAll = function(i, j) {
    let result = 0
    if (i < 0 || j < 0) { return "ERROR"; } 
    if(Number.isInteger(i) === false || Number.isInteger(j) === false) { return "ERROR"; } 
    
    if(i < j) {
        for(i; i <= j; i++) {
            result = result + i;
        }
    } else if (i > j) {
        for(j; j <= i; j++) {
            result = result + j;
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
