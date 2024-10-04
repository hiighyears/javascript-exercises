const removeFromArray = function(array) {
    // let newArray= [];
    for(let j = 1;j<arguments.length;j++) {
    for(let i = 0;i<array.length;i++){
        for(let k = 0;k<array.length;k++){

        if (array[i]===arguments[j])
            // newArray.push(array[i]);
        array.splice(i,1);}
    }
    // array = newArray ;
}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
