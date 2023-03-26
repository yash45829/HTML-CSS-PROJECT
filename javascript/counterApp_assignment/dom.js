let count = document.getElementById("count");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let set = document.getElementById("set");

increase.addEventListener("click", increaseCount); // to increase number
decrease.addEventListener("click", decreaseCount); // to decrease number
set.addEventListener("click", setCount);        // to set the count to zero
let s = 0;

function increaseCount() {
  s++;
  count.innerText = s;
}
function decreaseCount() {
  s--;
  count.innerText = s;
}
function setCount() {
  s = 0;
  count.innerText = s ;
}
