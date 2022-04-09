class AboutView extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("About Me");
	}

	async getHtml() {
		return `
        <section class="main-padded">
        <p class="header-1">About me</p>
        `;
	}
}
