let box = document.getElementsByClassName("box");

// red box 
let a = 0;
box[0].addEventListener("mouseout", (e) => {
  if (a == 0) {
    box[0].style.backgroundColor = "red";
    a = 1;
  } else {
    box[0].style.backgroundColor = "initial";
    a = 0;
  }
});
// green box 
let b = 0;
box[1].addEventListener("mouseout", (e) => {
  if (b == 0) {
    box[1].style.backgroundColor = "green";

    b = 1;
  } else {
    box[1].style.backgroundColor = "initial";
    b = 0;
  }
});
 
// yellow box 
let c = 0;
box[2].addEventListener("mouseout", (e) => {
  if (c == 0) {
    box[2].style.backgroundColor = "yellow";
    c = 1;
  } else {
    box[2].style.backgroundColor = "initial";
    c = 0;
  }
});
// purple box 
let d = 0;
box[3].addEventListener("mouseout", (e) => {
  if (d == 0) {
    box[3].style.backgroundColor = "purple";
    d = 1;
  } else {
    box[3].style.backgroundColor = "initial";
    d = 0;
  }
});
// orange box 
let g = 0;
box[4].addEventListener("mouseout", (e) => {
  if (g == 0) {
    box[4].style.backgroundColor = "orange";
    g = 1;
  } else {
    box[4].style.backgroundColor = "initial";
    g = 0;
    console.log("orange");
  }
});
// blue box 
let f = 0;
box[5].addEventListener("mouseout", (e) => {
  if (f == 0) {
    box[5].style.backgroundColor = "blue";

    f = 1;
  } else {
    box[5].style.backgroundColor = "initial";
    f = 0;
  }
});
