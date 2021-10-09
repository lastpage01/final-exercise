let input = [60, 40, 55, 75, 64] ;
let output = [];
let left = 0, right = 0;
for(let x = 0 ; x < input.length; x++){
    if(x % 2 ==0 )
        right += input[x];
    else left += input[x];
}
output.push(right);
output.push(left);
console.log( output);