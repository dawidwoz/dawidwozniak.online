app.component('education-display', {
    template:
        /*html*/
        `
          <h1 class="sectionTitle">{{ this.language["education-title"] }}</h1>
          <br />
          <div v-for="record in this.language['education']" key="record.id" class="educationRecord">
          <div class="image-text">
            <img v-if="record.img && record.img != ''" :src="styles(record.img)"  />
          </div>
          <div class="large-text">
          <h5>{{ record.course }}</h5>
          <h6>{{ record.place }}</h6>
          <h6>{{ record.time }}</h6>
          <p style="font-size: smaller">
            {{ record["final-title"] }}
          </p>
          </div>
          <hr />
          </div>
    `,
    props: ['language'],
    methods: {
        styles(image) {
            return "img/" + image;
        }
    }
})