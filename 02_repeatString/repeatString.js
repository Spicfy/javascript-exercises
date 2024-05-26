const repeatString = function(str, iter) {
    let result = '';
    if(iter < 0){
        return 'ERROR';
    }
    for(let i = 0; i < iter; i++){
        result += str;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
