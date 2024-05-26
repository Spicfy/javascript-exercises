const fibonacci = function(pos) {
    if(pos < 0){
        return "OOPS";
    }
    let tmp = 0;
    let tmp2 = 1;
    if(pos == 0){
        return 0;
    }
    else if(pos == 1){
        return 1;
    }
    else{
        return fibonacci(pos-1) + fibonacci(pos-2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
