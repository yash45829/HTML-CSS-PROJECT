// click event javacript file 
/* <span class="material-symbols-outlined">
                light_mode
                </span><span class="material-symbols-outlined">
                    nightlight
                    </span> */
               
let btn = document.getElementById('btn')
btn.addEventListener("click" , lightmode)
let el = "light";
function lightmode(){
    let clr = document.getElementsByClassName("clr")





    if(el == "light"){
        btn.innerText = "Light Mode"
        document.body.style.color = " white"
        document.body.style.backgroundColor = "  #524e4e"
    for(let i = 0 ; i < clr.length ; i++){
       clr[i].style.color = "white"
       el = "dark";
       console.log(el)
     } 
    } else{
        btn.innerText = "Dark Mode"
        document.body.style.color = " black"
        document.body.style.backgroundColor = " white"
   for(let i = 0 ; i < clr.length ; i++){
        clr[i].style.color = "black"
        el = "light";
        console.log(el)
        }
        }
        }
