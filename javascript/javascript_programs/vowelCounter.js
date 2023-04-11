// to count the no. of vowels in a input name 

let userName = "MahendrA" // input name 
let vowel = ["a","e","i","o","u","A","E","I","O","U"] // array of vowels

let counter = 0 ; // vowel counter
for(let i=0; i< userName.length ; i++){
 for(let j=0 ; j< vowel.length ; j++){
    if(userName[i]==vowel[j]){
        counter++;
    }
 }
}

console.log(counter) 