//console numbers form array that are divisible by 3 but not divisible by 2


// array of input numbers
let num = [5,6,8,13,,21,9,27,12,16,15,18,20,24]

for(let i = 0 ; i < num.length ; i++){
     if(num[i] % 3 == 0 && num[i] % 2 != 0){
        console.log(num[i])
     }
}