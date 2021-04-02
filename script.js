const boxes = document.querySelectorAll(".box");
//adding scroll

window.addEventListener("scroll", checkBoxes);

//run check boxes
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
//boxes is a node liste we can map through
//the equation above
// .getBoundingClinetRect = methjod of returing the DomRect opbject providing info about the size of
//an element and its positon realtive to the veiwport .top denotes the top value
