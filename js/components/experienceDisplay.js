app.component('experience-display', {
    template:
        /*html*/
        `
          <h1>{{ this.language["experience-title"] }}</h1>
    `,
    props: ['language']
})