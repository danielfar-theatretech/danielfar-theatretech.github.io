
document.querySelectorAll(".image-mask").forEach((elt) => {
    const url = elt.getAttribute('src');
    elt.style.backgroundImage = `url("${url}")`;
});