app.component('ability-display', {
    template:
        /*html*/
        `
          <h1 class="sectionTitle">{{ this.language["ability-title"] }}</h1>
          <br />
          <div v-for="ability in this.language['ability']" key="ability.id" class="abilityRecord">
          <h4 class="subSectionTitle">{{ ability["sub-title"] }}</h4>
          <div v-for="skill in ability.skills" key="skill.id" class="skillsView">
            <div class="skill">
              {{ skill.name }}
            </div>
            <div class="skillLevel" v-if="skill.star != 0">
            <span v-for="i in skill.star">
              <img src="img/star-full.png" />
            </span>
            <span v-for="i in 5-skill.star">
              <img src="img/star.png" />
            </span>
            </div>
            <div class="skillDescription" v-else>
            <i>{{ skill.description }}</i>
            </div>
          </div>
          </div>
    `,
    props: ['language']
})