let image = document.getElementsByClassName("image");
document.body.addEventListener("keydown", move);
let x = 0; // x axis
let y = 0; // y axis
function move(e) {


    // logic
    // translate only when 0<y<59 vh and 0<x<79 vw
  e = e || window.event;
  if (e.keyCode === 38 && y != 0) {
    //   console.log('up arrow pressed')
    image[0].style = `top:${y - 1}vh; left:${x}vw;`;
    y = y - 1;
    x = x;
  } else if (e.keyCode === 40 && y <= 59) {
    image[0].style = `top:${y + 1}vh;left:${x}vw;`;
    y = y + 1;
    x = x;
    //   console.log('down arrow pressed')
  } else if (e.keyCode === 37 && x != 0) {
    image[0].style = `left:${x - 1}vw;top:${y}vh;`;
    x = x - 1;
    y = y;
    //   console.log('left arrow pressed')
  } else if (e.keyCode === 39 && x <=79) {
    image[0].style = `left:${x + 1}vw;top:${y}vh;`;
    x = x + 1;
    y = y;
    //   console.log('right arrow pressed')
  }
  
}
