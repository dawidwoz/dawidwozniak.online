app.component('contact-display', {
    template:
        /*html*/
        `
        <div id="contact">
            <a :href="language['linkedin-url']"><img src="img/linkedin.png" /></a>
            <a :href="language['git-url']"><img src="img/github.png" /></a>
            <a :href="language['email']"><img src="img/mail.png" /></a>
          </div>
    `,
    props: ['language'],
    methods: {
        convertStringToHTML
    }
})