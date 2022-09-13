const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 250;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
var ko = document.getElementById('no')
ko.addEventListener('mouseover', function () {
  ko.style.top = (Math.floor(Math.random()*500) + 200).toString() + 'px'
  ko.style.right = (Math.floor(Math.random()*500) + 200).toString() + 'px'
  ko.style.bottom = (Math.floor(Math.random()*500) + 200).toString() + 'px'
  ko.style.left = (Math.floor(Math.random()*500) + 200).toString() + 'px'
  console.log(kt)
})
var em = document.getElementById('emdongy')
var footer = document.getElementById('footer')
em.addEventListener('click',() => {
  footer.style.display = 'block'
})
document.getElementById('heading').addEventListener('click', function () {
  ko.style.top = "0px"
  ko.style.right = "0px"
  ko.style.bottom = "0px"
  ko.style.left = "0px"
  footer.style.display = 'none'
})