const body = document.querySelector("body");

const button = document.createElement("button");
button.classList.add("btn");
button.innerText = "Click Me to Input Your Desired Number!"
body.appendChild(button);

const btn = document.querySelector(".btn");

function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`; 
};

function boxRow(num) {
  const oldContainer = document.querySelector(".container");
  if(oldContainer){
  oldContainer.remove();
  };  
  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);


  let totalGap = num - 1 
  let boxSize = (960 - totalGap) / num;
  
  for (let i = 0; i < num * num; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    container.appendChild(box);
    
    box.addEventListener("mouseenter", function(e) {
      e.target.style.backgroundColor = randomColor();
    });
};
};

boxRow(16);

btn.addEventListener("click", function() {
  let input = prompt("Please input the number of squares per side for the new grid (not more than 100)");
  if (input === "" || input > 100 || isNaN(input)){
    alert("Error! Please try again!");
    return;
  };
  input = Number(input);
  boxRow(input);
});