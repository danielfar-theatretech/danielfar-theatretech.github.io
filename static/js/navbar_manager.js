const tglbtn = document.getElementById("nav-toggle");
const navlst = document.getElementById("nav-list");

tglbtn.addEventListener("click", () => {
	navlst.classList.toggle("active");
});
