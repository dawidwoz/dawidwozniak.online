app.component('experience-display', {
    template:
        /*html*/
        `
        <p>{{ this.language["welcome-first-line"] }}</p>
        <h1 class="name">{{ this.language["welcome-name"] }}</h1>
    `,
    props: ['language'],
    data() {
        return {
            reviews: []
        }
    }
})