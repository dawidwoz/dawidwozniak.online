app.component("info-display", {
  template:
    /*html*/
    `
          <h1 class="sectionTitle">{{ this.language["info-title"] }}</h1>
          <br />
          <div class="image-text">
            <img src="img/info-photo.jpg" />
          </div>
          <div class="large-text" id="info-description"></div>
          {{ convertStringToHTML("#info-description",this.language["info-description"]) }}
          <br />
          <br />
          <contact-display :language="language"></contact-display>
    `,
  props: ["language"],
  methods: {
    convertStringToHTML,
  },
});
