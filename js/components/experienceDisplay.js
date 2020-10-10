app.component('experience-display', {
    template:
        /*html*/
        `
          <h1 class="sectionTitle">{{ this.language["experience-title"] }}</h1>
          <div v-for="record in this.language['experience']" key="record.id">
          <div class="image-text">
            <img :src="styles(record.img)" />
          </div>
          <div class="large-text">
          <h4>{{ record.position }}</h4>
          <h5>{{ record.place }}</h5>
          <h6>{{ record.time }}</h6>
          <p :id="createId(record.id)"></p>
          {{ prepareDescription(record.description, record.id) }}
          </div>
          </div>
    `,
    props: ['language'],
    methods: {
        styles(image) {
            return "img/" + image;
        },
        createId(id) {
            return "description" + id;
        },
        prepareDescription(description, id) {
            id = this.createId(id);
            $(document).ready(function(){ //Need to check if the element is there
             var el = $("#" + id);
             el.html(description);
            });
        }
    }
})