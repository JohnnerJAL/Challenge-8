const container = document.getElementById("container");
const colors = ["yellow", "cyan", "green", "red", "blue"];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
   const color = getRandomColor();
   element.style.backgroundColor = color;
   element.style.boxShadow = `2px 2px 10px 3px cyan, -2px -2px 10px 3px cyan`;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = "var(--secondary-color)";
    element.style.boxShadow = '';
  }, 1000)
}

function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)]
}