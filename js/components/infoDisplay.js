app.component('info-display', {
    template:
        /*html*/
        `
          <h1 class="sectionTitle">{{ this.language["info-title"] }}</h1>
          <br />
          <div class="image-text">
            <img src="img/info-photo.jpg" />
          </div>
          <div class="large-text" id="info-description"></div>
          {{ prepareDescription(this.language["info-description"]) }}
    `,
    props: ['language'],
    methods: {
        prepareDescription(description) {
            $(document).ready(function(){ //Need to check if the element is there
             var el = $("#info-description");
             el.html(description);
            });
        }
    }
})