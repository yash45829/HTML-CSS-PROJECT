// let btn = document.getElementById("btn");
// btn.addEventListener("dblclick",popupfunc(e));

function popupfunc(){
let popup = document.getElementsByClassName("popup");
console.log(popup)

    function vanish(){
        popup[0].style.display = "none"
    }
    // popup.style.removeProperty('display');
    popup[0].style.setProperty('display', 'initial');
    console.log("clicked")
    setTimeout(vanish , 1000 );

}


// document.getElementsByClassName('popup').style.removeProperty('display')