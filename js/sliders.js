const inputRange = document.querySelectorAll(".sliders");
const targetImage = document.getElementById("imageContainer");
for (i = 0; i <= inputRange.length - 1; i++) {
  inputRange[i].addEventListener("input", editImage);
}
function editImage() {
  let brightness = document.getElementById("brightness").value;
  let contrast = document.getElementById("contrast").value;
  let saturation = document.getElementById("saturate").value;

  let sepia = document.getElementById("sepia").value;
  let hueRotate = document.getElementById("huer").value;

  targetImage.style.filter =
    "brightness(" +
    brightness +
    "%) contrast(" +
    contrast +
    "%) saturate(" +
    saturation +
    "%) sepia(" +
    sepia +
    "%) hue-rotate(" +
    hueRotate +
    "deg)";
}

let sliderForm = document.getElementsByClassName("center");
sliderForm.addEventListener("reset", function () {
  sliderForm.reset();
  setTimeout(function () {
    editImage();
  }, 0);
});
