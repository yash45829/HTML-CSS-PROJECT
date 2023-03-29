
let color = ["blue","red","green","black","purple","orange","green","black" ]

let box = document.getElementsByClassName("box")
for( let i = 0 ; i < box.length ; i++){
    box[i].addEventListener("mouseover", (e)=>{
        box[i].style["boxShadow"] = `0 0 20px ${color[i]}`;
        box[i].style["transitionDuration"] = "500ms";
    })
}
    for( let i = 0 ; i < box.length ; i++){
        box[i].addEventListener("mouseout", (e)=>{
            box[i].style["boxShadow"] = "";
        
        })
        
    }
