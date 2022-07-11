axios("https://api.github.com/repos/danielfar-theatretech/danielfar-theatretech.github.io/branches/master").then((b) =>
	checkTime(b.data.commit.commit.author.date)
);

function checkTime(datetime) {
	const updateAt = new Date(datetime);
	const now = new Date();

	if (now - updateAt < 3600 * 1000) {
		// 3600 * 1000 = 1 hour
		// display maintenance warning

        const maintenanceBtn = document.createElement("div");
        maintenanceBtn.id = "maintenanceBtn";
        const maintenanceBtnIcon = document.createElement("div");
        maintenanceBtnIcon.classList.add("icon");
        maintenanceBtnIcon.innerHTML = feather.icons["alert-triangle"].toSvg();
        maintenanceBtn.appendChild(maintenanceBtnIcon)


        const maintenanceBtnText = document.createElement("div");
        maintenanceBtnText.innerText = "Please be aware, this page was recently updated and may not display correctly."
        maintenanceBtnText.classList.add("alert-text")
        maintenanceBtn.appendChild(maintenanceBtnText)

        maintenanceBtn.addEventListener("mouseover", () => maintenanceBtnText.classList.add("shown"))
        maintenanceBtn.addEventListener("mouseout", () => maintenanceBtnText.classList.remove("shown"))

        document.getElementById("main").appendChild(maintenanceBtn)
	}
}