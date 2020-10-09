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
        document.title = this.language.title;
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
        styles(image) {
            return {
                'background-image': `url(img/` + image + `)`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            }
        }
    }
});

