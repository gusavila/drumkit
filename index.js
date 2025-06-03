var drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((button) => {
  button.addEventListener("click", () => {
    var key = this.querySelector("span").innerText.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", (event) => {
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

function makeSound(key){
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "e":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "r":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "f":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "a":
      new Audio("sounds/crash.mp3").play();
      break;
    case "d":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Nenhum som para:", key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;
  
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
