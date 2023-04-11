// to check the condition over entered password and email
//password : length should be 8 
//email: should contain @

// printing "valid email and password" if condition are true
// printing "Invalid email and password" if condition are false

let btn = document.getElementById("btn")
let para = document.getElementsByClassName("para")
let validform = document.getElementById("form")

btn.addEventListener("click" ,check)
  
function check(e){
    e.preventDefault();

    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let emails = email.value
    let contain = emails.includes("@")


    // if condition are true 
    if(password.value.length == 8 && contain == true){
     para[0].innerText = " Valid Email and Password !"
     para[0].style.backgroundColor = "green"
     para[0].style.color = "white"

    //  executing submission on codition true after 1 sec 
     setTimeout(() => validform.submit(), 1000);
    }
    
    // if condition are false 
    else{
        e.preventDefault();
        para[0].innerText = " Invalid Email and Password !"
        para[0].style.backgroundColor = "red"
        para[0].style.color = "white"
    }
}
