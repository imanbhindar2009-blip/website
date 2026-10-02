function showPhoto(input, imageId) {
  const file = input.files[0];

  if (!file) {
    return;
  }

  const image = document.getElementById(imageId);
  const reader = new FileReader();

  reader.onload = function(event) {
    image.src = event.target.result;
    image.classList.add("has-photo");
    image.parentElement.querySelector("span").style.display = "none";
  };

  reader.readAsDataURL(file);
}

function makeHearts() {
  const surprise = document.getElementById("surprise");
  surprise.textContent = "You are very special to me ♡";
}
