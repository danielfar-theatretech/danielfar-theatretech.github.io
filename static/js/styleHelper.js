
document.querySelectorAll(".image-mask").forEach((elt) => {
    const url = elt.getAttribute('src');
    elt.style.backgroundImage = `url("${url}")`;
});

document.querySelectorAll(".copy-on-click").forEach((elt) => {
    elt.addEventListener("click", () => {
        document.querySelectorAll(`#${elt.dataset.tooltipid}`).forEach((tt) => {
            tt.innerText = "Copied!"
            setTimeout(() => tt.innerText = "Copy to Clipboard", 3000)
        })
        navigator.clipboard.writeText(elt.dataset.copy)
    });
});

document.querySelectorAll(".tooltip").forEach((elt) => {
    elt.addEventListener("mouseover", () => {
        document.querySelectorAll(`#${elt.dataset.tooltipid}`).forEach((tt) => {
            tt.classList.add("tt-shown")
        })
    })

    elt.addEventListener("mouseout", () => {
        document.querySelectorAll(`#${elt.dataset.tooltipid}`).forEach((tt) => {
            tt.classList.remove("tt-shown")
        })
    })
})

if(typeof feather !== "undefined") {
    feather.replace()
}