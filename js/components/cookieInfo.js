app.component('cookie-display', {
    template:
        /*html*/
        `
        <div v-if="display" id="cookieInfo">
          <p>{{ this.language["cookie-note"] }}</p>
          <b @click="display = false">X</b>
        </div>
    `,
    props: ['language'],
    data: function() {
        return {
            display: true
        }
    }
})
