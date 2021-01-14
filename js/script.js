document.querySelector("#close").addEventListener("click", () => {
  document.querySelector(".bg-black").style.display = "none";
});

function preview(index) {
  let imgSrc = document.getElementById("thumbnail-" + index).src;
  console.log(imgSrc);
  document.querySelector(".bg-black").style.display = "block";
  document.querySelector(".img-preview").src = imgSrc;
}
