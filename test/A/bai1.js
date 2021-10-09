let inputArray = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'] ;
let max = inputArray[0].length;
let outputArray = [];
function allLongestStrings(inputArray) {
    for(let x of inputArray)
        if(x.length > max)
            max = x.length;   
    for(let x of inputArray)
        if(x.length == max)
            outputArray.push(x);        
    return outputArray;
}
console.log(allLongestStrings(inputArray));


