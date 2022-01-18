let target = document.querySelector("#hskim");
function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);
