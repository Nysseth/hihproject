function changeImg(imgs) {
    var expandedImg = document.querySelector(".gallery__expanded");
    expandedImg.src = imgs.src;
    expandedImg.parentElement.style.display = "block";
}