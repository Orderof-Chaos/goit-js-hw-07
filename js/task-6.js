function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes")
const buttons = document.querySelectorAll("#controls button");
const create = buttons[0];
const destroy = buttons[1];
const input = document.querySelector("#controls input");
function createBoxes(amount) {
  const boxesList = [];
  for (let i = 1; i <= amount; i += 1) {
    boxesList.push(`<div class="iter${i}"></div>`)
  };
  let stringBoxes = boxesList.join(" ");
  
  boxes.innerHTML = stringBoxes;
  for (let i = 1; i <= amount; i += 1) {
    let currentBox = boxes.querySelector(`.iter${i}`);
    currentBox.style.backgroundColor = getRandomHexColor()
    let size = i * 10 + 20 + "px"
    currentBox.style.width = size
    currentBox.style.height = size;
    
  };  
};
create.addEventListener("click", () => {
  
  if (Number(input.value) > 0 && Number(input.value) < 101) {
    boxes.innerHTML = "";
    createBoxes(input.value)
  }
  input.value = ""
})
destroy.addEventListener("click", () => {
  boxes.innerHTML = ""
 })
