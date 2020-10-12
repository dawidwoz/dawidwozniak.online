app.component('footer-display', {
    template:
        /*html*/
        `
        <div id="footer">
          <p id="copyright">{{ this.language['copyright'] }} &copy; {{  getYear() }} {{ this.language['author'] }}</p>
          <p id="footerNote"></p>
          {{ convertStringToHTML("#footerNote", this.language['footer-note']) }}
        </div>
    `,
    props: ['language'],
    methods: {
      getYear() {
        return new Date().getFullYear();
      },
      convertStringToHTML
    }
})
