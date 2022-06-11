const removeFromArray = function() {
    let args = Array.from(arguments);
    let arr = args[0]
    args.shift();
    for(let i = 0; i < args.length; i++){
        for( let j = 0; j < arr.length; j++){
            if (args.includes(arr[j])){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
