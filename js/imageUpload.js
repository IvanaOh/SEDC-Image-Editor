function showSelectedImage(imageUrl, error) {
  if (error !== null) {
    alert(error);
  }

  document.getElementById("imageContainer").src = imageUrl;
}
//
function setImageFromURL(event) {
  event.preventDefault();
  const form = event.target;
  const imageUrl = form.url.value;
  const image = document.getElementById("imageContainer");
  image.src = imageUrl;
}
