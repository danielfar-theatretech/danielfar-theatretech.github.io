const tglbtn = document.getElementById("nav-toggle");
const navlst = document.getElementById("nav-list");

tglbtn.addEventListener("click", () => {
	navlst.classList.toggle("active");
});

// Scroll to top Button

const topBtn = document.getElementById("scrollToTopBtn");

topBtn.addEventListener("click", () => {
	// document.body.scrollTop = 0; // For Safari
	// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener("scroll", () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
});
