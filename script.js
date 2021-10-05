const image = document.querySelector('img')

image.onclick = function () {
    image.style.width = image.offsetWidth * 1.1 + "px"
}
