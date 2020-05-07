const inputs = document.querySelectorAll(".sliders input");
const image = document.getElementsByClassName("originalImage");
inputs.forEach((input) => input.addEventListener("click", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
function handleUpdate() {
  suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  this.nextElementSibling.innerHTML = this.value + suffix;
  if (this.nextElementSibling.classList == "noSuffix") {
    this.nextElementSibling.innerHTML = "";
  }
}
