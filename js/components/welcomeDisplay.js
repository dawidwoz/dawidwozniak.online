app.component("welcome-display", {
  template:
    /*html*/
    `
        <div class="welcomeText">
          <p>{{ this.language["welcome-first-line"] }}</p>
          <h1 class="sectionTitle">{{ this.language["welcome-name"] }}</h1>
        </div>
    `,
  props: ["language"],
});
