var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var config = JSON.parse(this.responseText);
        const app = Vue.createApp({
            data() {
                return {
                    config
                }
            },
            computed: {
                styles() {
                    return {
                        'background-image': `url(img/${config['welcome-photo']})`,
                        'background-repeat': 'no-repeat',
                        'background-size': 'cover',
                        'background-position': 'center'
                    }
                }
            }
        });
        app.mount('#app');
    }
};
xmlhttp.open("GET", "data/data.json", true);
xmlhttp.send();
