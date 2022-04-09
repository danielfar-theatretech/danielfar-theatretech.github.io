class ProjectsView extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Project");
    }

    async getHtml() {
        return `
            <h1>Project</h1>
            <p>You are viewing all projects</p>
        `;
    }
}
