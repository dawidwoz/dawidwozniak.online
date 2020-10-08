const app = Vue.createApp({
    data() {
        return {
            config: undefined,
            language: undefined
        }
    },
    created: function () {
        this.config = this.fetchData("config");
        this.language = this.fetchData("EN_language");
        document.title = this.language["title"];
    },
    computed: {
        styles() {
            return {
                'background-image': `url(img/${this.config['welcome-photo']})`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            }
        }
    },
    methods: {
        fetchData(type) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "data/" + type + ".json", false);
            xmlhttp.send();
            if (!(xmlhttp.response)) {
                return null;
            }
            return JSON.parse(xmlhttp.response);
        },
    }
});
app.mount('#app');
