function showSelectedImage(imageUrl, error) {
  if (error !== null) {
    alert(error);
  }

  document.getElementById("imageContainer").src = imageUrl;
}
// Enter url's image
let urlBox = document.getElementById("urlBox");
let imageContainer = document.getElementById("imageContainer");
urlBox.addEventListener("button", function (e) {
  let urlImage = document.getElementById("go").value;
  imageContainer.setAttribute("src", urlImage);
  e.preventDefault();
  console.log("done");
});
