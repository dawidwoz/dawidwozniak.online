app.component('ability-display', {
    template:
        /*html*/
        `
          <h1 class="sectionTitle">{{ this.language["ability-title"] }}</h1>
          <br />
    `,
    props: ['language']
})