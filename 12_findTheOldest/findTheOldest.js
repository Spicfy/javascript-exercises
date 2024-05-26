const findTheOldest = function(books) {
    const age = books.map((book) => book.yearOfDeath ? book.yearOfDeath - book.yearOfBirth: new Date().getFullYear() - book.yearOfBirth); 
    let oldest = age[0];
    let oldestIndex = 0;
    for(let i = 1; i < age.length; i++){
        if(age[i] > oldest){
            oldest = age[i];
            oldestIndex = i;
        }
    }
    return books[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
